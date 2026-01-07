import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.meshmight.ca'),
  title: {
    default: "MeshMight - Premium Abrasive Scuff Pads | Consistent Cut. Every Time.",
    template: "%s | MeshMight"
  },
  description: "Premium abrasives with consistent quality and value. Canadian-designed scuff pads engineered for North American workflows. Silicon Carbide abrasives with superior conformability. Available on Amazon.",
  keywords: [
    "abrasive pads",
    "scuff pads",
    "mesh pads",
    "abrasives",
    "woodworking",
    "finishing",
    "sanding pads",
    "non-woven abrasives",
    "silicon carbide",
    "Canadian abrasives",
    "MeshMight",
    "premium abrasives",
    "aluminum oxide",
    "conformable pads",
    "sandpaper alternative"
  ],
  authors: [{ name: "MeshMight" }],
  creator: "MeshMight",
  publisher: "MeshMight",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.meshmight.ca",
    siteName: "MeshMight",
    title: "MeshMight - Consistent Cut. Every Time.",
    description: "Premium abrasives with consistent quality and value. Canadian-designed scuff pads engineered for North American workflows.",
    images: [
      {
        url: "/MeshMight_Gear_Logo.png",
        width: 1200,
        height: 630,
        alt: "MeshMight Logo - Premium Abrasives",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MeshMight - Consistent Cut. Every Time.",
    description: "Premium abrasives with consistent quality and value. Canadian-designed scuff pads.",
    images: ["/MeshMight_Gear_Logo.png"],
    creator: "@meshmight",
  },
  alternates: {
    canonical: "https://www.meshmight.ca",
  },
  category: "Industrial Supplies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MeshMight",
    "url": "https://www.meshmight.ca",
    "logo": "https://www.meshmight.ca/MeshMight_Gear_Logo.png",
    "description": "Premium abrasives with consistent quality and value. Canadian-designed scuff pads engineered for North American workflows.",
    "foundingLocation": {
      "@type": "Country",
      "name": "Canada"
    },
    "sameAs": [
      "https://www.amazon.com/stores/MeshMight20longerlasting/page/A585DAD1-A98D-42B9-9ACF-B907D22A5FEB"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MeshMight",
    "url": "https://www.meshmight.ca",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.meshmight.ca/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const productSchema1 = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "MeshMight Flex - 6-Pack Scuff Pads",
    "description": "Flexible scuff pads engineered with superior conformability for North American workflows",
    "brand": {
      "@type": "Brand",
      "name": "MeshMight"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.amazon.com/MeshMight-Flex-6-Pack-Scuff-Pads/dp/B0FP8MB1WF",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Amazon"
      }
    },
    "image": "https://www.meshmight.ca/flex.gif"
  };

  const productSchema2 = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "MeshMight Regular - Non-Woven Abrasive Pads",
    "description": "Non-woven aluminum oxide and silicon carbide abrasive pads for woodworking and finishing",
    "brand": {
      "@type": "Brand",
      "name": "MeshMight"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.amazon.com/MeshMight-Non-Woven-Aluminum-Abrasive-Scouring/dp/B0DYHWKZQ2",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Amazon"
      }
    },
    "image": "https://www.meshmight.ca/regular.gif"
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema1) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema2) }}
        />
        <main className="antialiased">
        <Navbar/>
          {children}
        </main>
      </body>
    </html>
  );
}
