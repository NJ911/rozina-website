import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rozina's Beauty Services | Premium Beauty Salon in Richmond, BC",
  description:
    "Experience luxury beauty services at Rozina's Beauty Services Inc. in Richmond, BC. Expert bridal makeup, hair styling, laser treatments, facials, and more. Book your appointment today!",
  keywords:
    "beauty salon, bridal makeup, hair styling, laser hair removal, facial treatments, Richmond BC, Rozina beauty",
  openGraph: {
    title: "Rozina's Beauty Services | Premium Beauty Salon",
    description:
      "Experience luxury beauty services in Richmond, BC. Expert bridal makeup, hair styling, and advanced skin treatments.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
