import { Comfortaa, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

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
  title: "SG Education - Premium Pre-School & Early Budding Center",
  description: "Welcome to SG Education and SG Early Budding, Hosur. Inspired by Kidzee's playful layout, we blend Ancient Bharath Culture (ANBC) with Modern Corporate standards to nurture tomorrow's leaders.",
  keywords: "SG Education, SG Early Budding, pre-school Hosur, kidzee style school, play school Hosur, Hosur primary education, ANBC CPC curriculum",
  icons: {
    icon: "/sg-education/SG%20logo.webp",
    shortcut: "/sg-education/SG%20logo.webp",
    apple: "/sg-education/SG%20logo.webp",
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

