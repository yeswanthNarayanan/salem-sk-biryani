import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salem SK Biryani | Best Biryani Restaurant in Salem, Tamil Nadu",
  description:
    "Salem SK Biryani — the best biryani restaurant in Salem, Tamil Nadu. Authentic Seeraga Samba chicken & mutton biryani, fried rice, chilly chicken & garlic chicken. 100% Halal. Trichy Main Road, Sanjeevarayanpet, Salem 636006. Order via Swiggy & Zomato. Open 11 AM – 11 PM daily. Call +91 9047 888 999.",
  keywords: [
    // Brand name variations (with/without spaces, with/without 'restaurant')
    "Salem SK Biryani",
    "Salem SK Biryani Restaurant",
    "SK Biryani",
    "SK Biryani Salem",
    "SK Biryani Restaurant",
    "SK Biryani Restaurant Salem",
    "Salem SKBiryani",
    "SKBiryani",
    "SKBiryani Salem",
    "SKBiryani Restaurant",
    // Common Tamil spelling: Briyani
    "SK Briyani",
    "Salem SK Briyani",
    "SK Briyani Restaurant",
    "SK Briyani Salem",
    "Salem SK Briyani Restaurant",
    "SKBriyani",
    "SKBriyani Salem",
    "SKBriyani Restaurant",
    // Competitive local search terms
    "best biryani in Salem",
    "best restaurant in Salem",
    "best restaurants in Salem",
    "best biryani restaurant in Salem",
    "best non veg restaurant in Salem",
    "best non veg restaurant Salem",
    "top restaurant in Salem",
    "top biryani in Salem",
    "famous biryani in Salem",
    "famous restaurant in Salem",
    "Salem biryani restaurant",
    "Salem best biryani",
    "Salem best restaurant",
    "Salem famous biryani",
    // Dish + location keywords
    "chicken biryani Salem",
    "mutton biryani Salem",
    "Seeraga Samba biryani Salem",
    "dum biryani Salem",
    "fried rice Salem",
    "chilly chicken Salem",
    "garlic chicken Salem",
    // Broader area search
    "best biryani Tamil Nadu",
    "halal restaurant Salem",
    "halal biryani Salem",
    "biryani near me Salem",
    "biryani delivery Salem",
    "Salem food delivery",
    "biryani Trichy Main Road Salem",
    "restaurant Sanjeevarayanpet Salem",
    "biryani Dadagapatti Salem",
    "party orders biryani Salem",
  ],
  authors: [{ name: "Salem SK Biryani" }],
  creator: "Salem SK Biryani",
  publisher: "Salem SK Biryani",
  formatDetection: {
    telephone: true,
    email: false,
  },
  metadataBase: new URL("https://salemskbiryani.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Salem SK Biryani | Best Biryani Restaurant in Salem, Tamil Nadu",
    description:
      "Authentic Seeraga Samba biryani, slow-cooked to perfection. Chicken & mutton biryani, fried rice, chilly chicken & more. 100% Halal. Order via Swiggy & Zomato.",
    url: "https://salemskbiryani.com",
    siteName: "Salem SK Biryani",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/hero_biryani.png",
        width: 1200,
        height: 630,
        alt: "Salem SK Biryani — Authentic Salem-Style Dum Biryani",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salem SK Biryani | Best Biryani in Salem",
    description:
      "Authentic Seeraga Samba biryani, slow-cooked to perfection. 100% Halal restaurant in Salem, Tamil Nadu.",
    images: ["/hero_biryani.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here after registering
    // google: "your-google-verification-code",
  },
  category: "restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for Local Restaurant Business
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Salem SK Biryani Restaurant",
    alternateName: [
      "Salem SK Biryani",
      "SK Biryani",
      "SK Biryani Salem",
      "SK Biryani Restaurant",
      "SKBiryani",
      "SKBiryani Salem",
      "SKBiryani Restaurant",
      "SK Briyani",
      "Salem SK Briyani",
      "SK Briyani Restaurant",
      "SK Briyani Salem",
      "SKBriyani",
      "SKBriyani Salem",
      "Salem SK Briyani Restaurant",
    ],
    description:
      "Best biryani restaurant in Salem, Tamil Nadu. Authentic Seeraga Samba chicken & mutton dum biryani, fried rice, chilly chicken & garlic chicken. 100% Halal certified.",
    url: "https://salemskbiryani.com",
    telephone: "+919047888999",
    image: "https://salemskbiryani.com/hero_biryani.png",
    logo: "https://salemskbiryani.com/hero_biryani.png",
    priceRange: "₹₹",
    servesCuisine: ["Indian", "Biryani", "South Indian", "Tamil Nadu Cuisine"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "D.No: 247/1, Trichy Main Road, 5, Seerangan Street Corner, Sanjeevarayanpet, SBI Bank Opposite DADAGAPATTI",
      addressLocality: "Salem",
      addressRegion: "Tamil Nadu",
      postalCode: "636006",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 11.6643,
      longitude: 78.146,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "11:00",
        closes: "23:00",
      },
    ],
    hasMenu: {
      "@type": "Menu",
      hasMenuSection: [
        {
          "@type": "MenuSection",
          name: "Biryani",
          hasMenuItem: [
            {
              "@type": "MenuItem",
              name: "Chicken Biryani",
              description: "Authentic Salem-style chicken dum biryani with Seeraga Samba rice",
            },
            {
              "@type": "MenuItem",
              name: "Mutton Biryani (Dum)",
              description: "Slow-cooked mutton dum biryani with premium spices",
            },
            {
              "@type": "MenuItem",
              name: "Mutton Biryani (Seeraga Samba)",
              description: "Traditional Salem recipe with finest Seeraga Samba rice",
            },
          ],
        },
        {
          "@type": "MenuSection",
          name: "Fried Rice",
          hasMenuItem: [
            { "@type": "MenuItem", name: "Chicken Fried Rice" },
            { "@type": "MenuItem", name: "Egg Fried Rice" },
            { "@type": "MenuItem", name: "Veg Fried Rice" },
          ],
        },
        {
          "@type": "MenuSection",
          name: "Starters",
          hasMenuItem: [
            { "@type": "MenuItem", name: "Chilly Chicken" },
            { "@type": "MenuItem", name: "Garlic Chicken" },
          ],
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.6",
      reviewCount: "2500",
      bestRating: "5",
    },
    sameAs: [],
    potentialAction: {
      "@type": "OrderAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.swiggy.com/restaurants/salem-sk-biryani",
        actionPlatform: "https://schema.org/DesktopWebPlatform",
      },
      deliveryMethod: ["http://purl.org/goodrelations/v1#DeliveryModeOwnFleet"],
    },
  };

  // FAQ Schema — targets "People Also Ask" boxes on Google
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best biryani restaurant in Salem?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Salem SK Biryani is widely regarded as the best biryani restaurant in Salem, Tamil Nadu. Known for authentic Seeraga Samba dum biryani with 40+ signature spices, slow-cooked for 12 hours. 100% Halal certified. Open daily 11 AM to 11 PM.",
        },
      },
      {
        "@type": "Question",
        name: "What are the opening hours of Salem SK Biryani?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Salem SK Biryani is open every day from 11:00 AM (morning) to 11:00 PM (night).",
        },
      },
      {
        "@type": "Question",
        name: "How to order from Salem SK Biryani?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can order from Salem SK Biryani via Swiggy or Zomato for home delivery. You can also call +91 9444478695 for takeaway orders or visit the restaurant at 123A, New Bus Stand Rd, Salem City Center.",
        },
      },
      {
        "@type": "Question",
        name: "Is Salem SK Biryani a Halal restaurant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Salem SK Biryani is a 100% Halal certified restaurant. All meat used is sourced from certified Halal suppliers.",
        },
      },
      {
        "@type": "Question",
        name: "What dishes does Salem SK Biryani serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Salem SK Biryani serves authentic Seeraga Samba biryani (chicken and mutton), dum biryani, chicken fried rice, egg fried rice, veg fried rice, chilly chicken, garlic chicken, and more. They are famous for their 1+1 biryani deals available 365 days.",
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Salem" />
        <meta name="geo.position" content="11.6643;78.146" />
        <meta name="ICBM" content="11.6643, 78.146" />
        <link rel="canonical" href="https://salemskbiryani.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
