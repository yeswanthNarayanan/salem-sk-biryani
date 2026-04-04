const https = require('https');
const fs = require('fs');

async function downloadWikiImage(query, filename) {
  return new Promise((resolve, reject) => {
    const searchUrl = 'https://en.wikipedia.org/w/api.php?action=query&titles=' + query + '&prop=pageimages&format=json&pithumbsize=800';
    console.log('Fetching URL for', query);
    https.get(searchUrl, (res) => {
      let data = '';
      res.on('data', (c) => data += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query.pages;
          const pageId = Object.keys(pages)[0];
          if (pageId === '-1' || !pages[pageId].thumbnail) {
            console.log('No image found for', query);
            resolve();
            return;
          }
          const source = pages[pageId].thumbnail.source;
          console.log('Found image for', query, source);
          
          const file = fs.createWriteStream(filename);
          https.get(source, (imgRes) => {
            imgRes.pipe(file);
            file.on('finish', () => {
              file.close();
              console.log('Saved', filename);
              resolve();
            });
          });
        } catch(e) {
          console.error(e);
          resolve();
        }
      });
    });
  });
}

(async () => {
  await downloadWikiImage('Fried_rice', 'public/chicken_fried_rice.jpg');
  await downloadWikiImage('Nasi_goreng', 'public/egg_fried_rice.jpg');
  await downloadWikiImage('Thai_fried_rice', 'public/veg_fried_rice.jpg');
})();
