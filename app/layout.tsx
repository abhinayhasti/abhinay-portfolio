import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { personal } from "@/app/data/social";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// TODO: swap for a real custom domain if you buy one later — for now this
// matches the live Vercel deployment.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://abhinay-portfolio-five.vercel.app";

const title = "Abhinay Hasti | Senior DevOps & Cloud Platform Engineer";
const description =
  "Portfolio of Abhinay Hasti — Senior DevOps & Cloud Platform Engineer with 9 years designing Kubernetes platforms, CI/CD automation, and cloud-native infrastructure across AWS and Azure.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Abhinay Hasti",
  },
  description,
  keywords: [
    "Abhinay Hasti",
    "DevOps Engineer",
    "Cloud Platform Engineer",
    "Kubernetes",
    "AWS",
    "Azure",
    "Terraform",
    "CI/CD",
    "Site Reliability Engineer",
  ],
  authors: [{ name: personal.name }],
  creator: personal.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: `${personal.name} — Portfolio`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: personal.role,
  email: personal.email,
  url: siteUrl,
  sameAs: [personal.github, personal.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.variable, "font-sans")}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
