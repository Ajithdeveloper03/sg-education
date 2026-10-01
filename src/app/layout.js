import { Comfortaa, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Script from "next/script";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-comfortaa",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});

export const metadata = {
  title: "Best Preschool & Play School in Hosur | SG Early Budding",
  description: "Looking for the best preschool in Hosur? SG Early Budding offers toddler care to primary schooling blending ANBC values with modern learning. Enquire now!",
  keywords: "best preschool in hosur, play school in hosur, nursery admission hosur, kindergarten in gokul nagar hosur, primary school in hosur, toddler care hosur, early childhood education hosur, best playschool near me hosur, anbc curriculum hosur",
  alternates: {
    canonical: "https://sgeducations.in/"
  },
  icons: {
    icon: "/favicon.webp?v=2",
    shortcut: "/favicon.webp?v=2",
    apple: "/favicon.webp?v=2",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${comfortaa.variable} ${quicksand.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-LN0H8FE8XT" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-LN0H8FE8XT');
          `}
        </Script>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}

