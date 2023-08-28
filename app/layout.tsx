import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bodyfont = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title:
    "Kalarric: Your Fashion Oasis for Men's & Women's Clothing and Accessories!",
  description:
    "Welcome to Kalarric, the ultimate fashion destination where style meets substance! Unveil a curated selection of the finest men's and women's clothing and accessories, handpicked to elevate your fashion game. Dive into a world of trends and timeless pieces, all waiting for you to explore and make your own. Get ready to unleash your inner fashionista at Kalarric!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={bodyfont.className}>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
