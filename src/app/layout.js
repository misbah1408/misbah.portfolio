import { DM_Sans } from "next/font/google";
import "./globals.scss";
import { Analytics } from "@vercel/analytics/next";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  // variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Misbah | Web Developer & UI/UX Designer Portfolio",
  description:
    "Portfolio of Misbah — A creative Web Developer & UI/UX Designer specializing in React, JavaScript, and responsive modern web experiences.",
  keywords: [
    "Misbah",
    "Web Developer",
    "Front-end Developer",
    "React Developer",
    "UI/UX Designer",
    "JavaScript",
    "Portfolio",
    "Freelancer",
  ],
  authors: [{ name: "Misbah" }],
  creator: "Misbah",
  robots: "index, follow",
  metadataBase: new URL("https://www.misbah.biz"),
  alternates: {
    canonical: "https://www.misbah.biz/",
  },
  openGraph: {
    title: "Misbah | Web Developer & UI/UX Designer",
    description:
      "Explore my portfolio featuring custom web development, React projects, and modern UI/UX designs.",
    url: "https://www.misbah.biz/",
    siteName: "Misbah Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Misbah Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Misbah | Web Developer & Designer",
    description: "Explore my work in Web Development, React, and UI/UX Design!",
    images: ["/og.png"],
    creator: "@misbah1408",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "92KToEmEa_yF2seZksjcsGu7aXPZS3L9__JzmeEXsgY",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="/assets/profile1.webp"
          imageSrcSet="/assets/profile1.webp"
          imageSizes="(max-width: 768px) 280px, (max-width: 1024px) 400px, 500px"
          fetchPriority="high"
        />

        <script type="application/ld+json" suppressHydrationWarning>
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Misbah",
              "jobTitle": "Web Developer & UI/UX Designer",
              "url": "https://www.misbah.biz",
              "sameAs": [
                "https://github.com/misbah1408",
                "https://linkedin.com/in/mohammed-misba"
              ]
            }
          `}
        </script>
      </head>

      <body className={`${dmSans.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
