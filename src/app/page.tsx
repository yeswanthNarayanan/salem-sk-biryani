import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* NAVBAR */}
      <nav className={styles.navbar} aria-label="Main navigation">
        <div className={styles.logo}>
          <a href="/" className="logo-font" aria-label="Salem SK Biryani - Home">Salem SK Biryani Restaurant</a>
        </div>
        <div className={styles.navLinks}>
          <a href="#menu">MENU</a>
          <a href="#deals" className={styles.active}>DEALS</a>
          <a href="#delivery">DELIVERY</a>
          <a href="#legacy">LEGACY</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className={styles.hero} aria-label="Welcome to Salem SK Biryani">
        <div className={styles.heroBg}>
          <Image 
            src="/hero_biryani.png" 
            alt="Salem SK Biryani — Best Authentic Dum Biryani Restaurant in Salem, Tamil Nadu" 
            fill 
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>HOUSE OF<br /><span className={styles.heroHighlight}>TASTE</span></h1>
          <p className={styles.heroText}>
            Best biryani restaurant in Salem, Tamil Nadu. Centuries of spice mastery, slow-cooked to perfection.<br />Discover the authentic, robust soul of Salem-style Biryani.
          </p>
        </div>
      </section>

      {/* DEALS SECTION */}
      <section id="deals" className={styles.dealsSection}>
        <div className={styles.sectionHeader}>
          <div>
            <div className="section-label">SPECIAL OFFERS</div>
            <h2>365 Days Deals</h2>
          </div>
        </div>
        
        <div className={styles.dealsGrid}>
          {/* Card 1 */}
          <div className={styles.dealCard}>
            <div className={styles.dealImageWrap}>
              <div className={styles.badge}><span className="pill-orange">BEST VALUE</span></div>
              <Image src="/chicken_biryani.png" alt="1+1 Chicken Biryani Deal at Salem SK Biryani - Best biryani in Salem" fill />
            </div>
            <h3 className={styles.dealTitle}>1+1 Chicken Biryani</h3>
            <p className={styles.dealDesc}>Double the treat for you and your companion.</p>
            <div className={styles.dealFooter}>
              <div className={styles.dealPrice}>₹199</div>
            </div>
          </div>
          {/* Card 2 */}
          <div className={styles.dealCard}>
            <div className={styles.dealImageWrap}>
              <Image src="/bucket_biryani.png" alt="Chicken Bucket Biryani for family - Salem SK Biryani restaurant" fill />
            </div>
            <h3 className={styles.dealTitle}>Chicken Bucket Biryani</h3>
            <p className={styles.dealDesc}>Perfect for family gatherings. Serves 4-5.</p>
            <div className={styles.dealFooter}>
              <div className={styles.dealPrice}>₹399</div>
            </div>
          </div>
          {/* Card 3 */}
          <div className={styles.dealCard}>
            <div className={styles.dealImageWrap}>
              <div className={styles.badge}><span className="pill-dark">PREMIUM</span></div>
              <Image src="/mutton_feast.png" alt="Premium Mutton Biryani 1+1 deal - Best mutton biryani in Salem" fill />
            </div>
            <h3 className={styles.dealTitle}>Mutton Biryani 1+1</h3>
            <p className={styles.dealDesc}>Tender, slow-cooked prime cuts for royals.</p>
            <div className={styles.dealFooter}>
              <div className={styles.dealPrice}>₹499</div>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY BAR */}
      <div id="delivery" className={styles.deliveryBar}>
        <div className={styles.deliveryBarLeft}>
          <h3>Delivered to your doorstep</h3>
          <p>Craving excellence? We partner with the best.</p>
        </div>
        <div className={styles.deliveryLogos}>
          <div className={styles.partner}>
            <span style={{ color: '#fc8019' }}>SWIGGY</span>
            <small>Order via Swiggy</small>
          </div>
          <div className={styles.partner}>
            <span style={{ color: '#e23744' }}>Zomato</span>
            <small>Order via Zomato</small>
          </div>
        </div>
      </div>

      {/* SOUL SEC */}
      <section id="legacy" className={styles.soulSection}>
        <div className={styles.soulImage}>
          <Image src="/spices.png" alt="Authentic Salem spices used in SK Biryani - 40+ signature spices" fill />
        </div>
        <div className={styles.soulContent}>
          <div className="section-label">OUR LEGACY</div>
          <h2>The Soul of Salem Spices</h2>
          <p className={styles.soulDesc}>
            At Salem SK Biryani it isn't just a dish, it's an ancestral tempera handed down through generations. Our "Culinary Alchemists" carefully select the finest Seeraga Samba rice and premium spices from the foothills of Salem to create a flavor that is deep, earthy, and unmistakably authentic.
          </p>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <h4>40+</h4>
              <p>SIGNATURE SPICES</p>
            </div>
            <div className={styles.statItem}>
              <h4>12h</h4>
              <p>SLOW COOKED</p>
            </div>
          </div>
        </div>
      </section>

      {/* MENU SEC */}
      <section id="menu" className={styles.menuSection}>
        <div className="section-label">ONLY FROM US</div>
        <h2>The Alchemist's Menu</h2>
        
        <div className={styles.menuGrid}>
          {/* Card 1 */}
          <div className={styles.menuGridCard}>
            <div className={styles.menuGridImageWrap}>
              <Image src="/kuska_biryani.png" alt="Plain Kuska Biryani - Salem SK Biryani restaurant" fill />
            </div>
            <h3 className={styles.menuGridTitle}>Biryani</h3>
          </div>
          
          {/* Card 2 */}
          <div className={styles.menuGridCard}>
            <div className={styles.menuGridImageWrap}>
              <Image src="/chicken_biryani_menu.png" alt="Chicken Biryani - Best chicken biryani in Salem" fill />
            </div>
            <h3 className={styles.menuGridTitle}>Chicken Biryani</h3>
          </div>

          {/* Card 3 */}
          <div className={styles.menuGridCard}>
            <div className={styles.menuGridImageWrap}>
              <Image src="/mutton_feast.png" alt="Mutton Dum Biryani - Authentic Salem style" fill />
            </div>
            <h3 className={styles.menuGridTitle}>Mutton Biryani (Dum)</h3>
          </div>

          {/* Card 4 */}
          <div className={styles.menuGridCard}>
            <div className={styles.menuGridImageWrap}>
              <Image src="/special_mutton.png" alt="Mutton Biryani Seeraga Samba rice - Best in Salem Tamil Nadu" fill />
            </div>
            <h3 className={styles.menuGridTitle}>Mutton Biryani (Seeraga Samba)</h3>
          </div>

          {/* Card 5 */}
          <div className={styles.menuGridCard}>
            <div className={styles.menuGridImageWrap}>
              <img src="https://i.pinimg.com/originals/2a/a4/b0/2aa4b074dd088bdede6da0deebd27198.jpg" alt="Chicken Fried Rice" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <h3 className={styles.menuGridTitle}>Chicken Fried Rice</h3>
          </div>

          {/* Card 6 */}
          <div className={styles.menuGridCard}>
            <div className={styles.menuGridImageWrap}>
               <img src="https://www.kannammacooks.com/wp-content/uploads/street-style-spicy-egg-rice-recipe-1-3.jpg" alt="Egg Fried Rice" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <h3 className={styles.menuGridTitle}>Egg Fried Rice</h3>
          </div>

          {/* Card 7 */}
          <div className={styles.menuGridCard}>
            <div className={styles.menuGridImageWrap}>
               <img src="https://recipesofhome.com/wp-content/uploads/2020/06/veg-fried-rice-recipe.jpg" alt="Veg Fried Rice" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <h3 className={styles.menuGridTitle}>Veg Fried Rice</h3>
          </div>

          {/* Card 8 */}
          <div className={styles.menuGridCard}>
            <div className={styles.menuGridImageWrap}>
               <Image src="/chicken_65.png" alt="Spicy Chilly Chicken starter - Salem SK Biryani" fill />
            </div>
            <h3 className={styles.menuGridTitle}>Chilly Chicken</h3>
          </div>

          {/* Card 9 */}
          <div className={styles.menuGridCard}>
            <div className={styles.menuGridImageWrap}>
               <img src="https://www.licious.in/blog/wp-content/uploads/2020/12/Garlic-Chicken.jpg" alt="Garlic Chicken" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <h3 className={styles.menuGridTitle}>Garlic Chicken</h3>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testSection}>
        <div className="section-label">TESTIMONIALS</div>
        <h2>What Our Alchemists Say</h2>
        
        <div className={styles.testGrid}>
          <div className={styles.testCard}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.testText}>"The Seeraga Samba rice makes all the difference! It's so light and perfectly absorbs the signature spice blend. Truly the most authentic Salem tastes I've had in years."</p>
            <div className={styles.testAuthor}>
              <div className={styles.avatar}>RJ</div>
              <div className={styles.authorMeta}>
                <h5>Rajah Kumer</h5>
                <p>REGULAR ENTHUSIAST</p>
              </div>
            </div>
          </div>
          <div className={styles.testCard}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.testText}>"Salem SK never disappoints. Their mutton is always tender, and the pepper-heavy spicy profile is exactly what I crave! This place is culinary alchemy in a masterpiece."</p>
            <div className={styles.testAuthor}>
              <div className={styles.avatar} style={{ backgroundColor: '#ffccbc' }}>A</div>
              <div className={styles.authorMeta}>
                <h5>Ananya S.</h5>
                <p>FOOD CRITIC</p>
              </div>
            </div>
          </div>
          <div className={styles.testCard}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.testText}>"Ordered the bucket Biryani for a family dinner. Everyone was raving about the aroma the moment it arrived. The spice balance is just incredible - deep and earthy."</p>
            <div className={styles.testAuthor}>
              <div className={styles.avatar} style={{ backgroundColor: '#e1bee7' }}>VK</div>
              <div className={styles.authorMeta}>
                <h5>Vignesh M.</h5>
                <p>LOYAL CUSTOMER</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <div className="logo-font">Salem SK Biryani Restaurant</div>
            <p style={{marginTop: '12px', marginBottom: '12px'}}>
               <span className="pill-dark" style={{display: 'inline-block', padding: '6px 12px', fontSize: '12px', letterSpacing: '0.1em'}}>100% HALAL SHOP</span>
            </p>
            <p>
              © 2026 Salem SK Biryani. The Culinary Alchemists.<br/>
              Crafting authentic Salem biryani experiences since 1996.
            </p>
          </div>
          <div className={styles.footerCol}>
            <h4>CONTACT & HOURS</h4>
            <p>D.No: 247/1, Trichy Main Road, 5, Seerangan Street Corner, Sanjeevarayanpet, SBI Bank Opposite DADAGAPATTI, Salem - 636 006</p>
            <p style={{ margin: '12px 0' }}><strong>Opening time:</strong> Morning 11:00 am<br/><strong>Closing time:</strong> Night 11:00 pm</p>
            <p style={{ fontWeight: 700, color: 'var(--brand)', marginTop: '8px', fontSize: '1.1rem' }}>📞 +91 9047 888 999 | +91 94444 78695</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div>&copy; 2026 Salem SK Biryani. All rights reserved.</div>
          <div>
            <a href="#" style={{ marginRight: '24px' }}>Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>

        {/* SEO-only content block — visually hidden, crawlable by search engines */}
        <div style={{position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0}} aria-hidden="true">
          <h2>Salem SK Biryani Restaurant — Best Biryani Restaurant in Salem, Tamil Nadu</h2>
          <p>Salem SK Biryani Restaurant (also known as SK Biryani, SK Biryani Salem, SK Biryani Restaurant, SKBiryani, SKBiryani Salem, SK Briyani, Salem SK Briyani, SK Briyani Restaurant, SKBriyani, SKBriyani Salem, Salem SK Briyani Restaurant) is the best biryani restaurant in Salem, Tamil Nadu, India. We are the top-rated restaurant in Salem and the most famous biryani restaurant in Salem city.</p>
          <h3>Best Biryani in Salem | Best Restaurant in Salem | Best Restaurants in Salem</h3>
          <p>If you are searching for the best biryani in Salem, best restaurant in Salem, best restaurants in Salem, best non-veg restaurant in Salem, best biryani restaurant in Salem, top restaurant in Salem, top biryani in Salem, famous biryani in Salem, or famous restaurant in Salem — Salem SK Biryani Restaurant is your answer. We are consistently rated as the number one biryani restaurant in Salem, Tamil Nadu.</p>
          <h3>Our Menu — Authentic Salem-Style Biryani &amp; More</h3>
          <p>We serve authentic Seeraga Samba chicken biryani, mutton biryani, mutton dum biryani, chicken fried rice, egg fried rice, veg fried rice, chilly chicken, and garlic chicken. All dishes are prepared with 40+ signature spices, slow-cooked for 12 hours using traditional Salem recipes.</p>
          <h3>Location &amp; Contact</h3>
          <p>Visit us at D.No: 247/1, Trichy Main Road, 5, Seerangan Street Corner, Sanjeevarayanpet, SBI Bank Opposite DADAGAPATTI, Salem - 636 006, Tamil Nadu, India. Opening time: Morning 11:00 AM. Closing time: Night 11:00 PM. Open all 7 days. Call us at +91 9047 888 999 or +91 94444 78695. Proprietor: C. Selvakumar.</p>
          <h3>Order Online &amp; Party Orders</h3>
          <p>Order Salem SK Biryani online via Swiggy and Zomato for fast delivery to your doorstep in Salem. We also undertake all party orders — catering for weddings, birthdays, corporate events, and family gatherings in Salem and surrounding areas. Enjoy our 365 days deals including 1+1 chicken biryani at ₹199 and 1+1 mutton biryani at ₹499. 100% Halal certified restaurant.</p>
        </div>
      </footer>
    </main>
  )
}
