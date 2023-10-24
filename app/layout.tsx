import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { ReduxProvider } from "@/redux/provider";
import { neobrutalism } from "@clerk/themes";
import { Analytics } from "@vercel/analytics/react";

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
    <ClerkProvider
      appearance={{
        elements: {
          baseTheme: neobrutalism,
          formButtonPrimary: {
            fontSize: 14,
            textTransform: "none",
            backgroundColor: "#373737",
            "&:hover, &:focus, &:active": {
              backgroundColor: "#636363",
            },
          },
        },
      }}
    >
      <html lang="en">
        <body>
          <ReduxProvider>
            <header>
              <Navbar />
            </header>
            <main>
              {children}
              <Analytics />
            </main>
            <footer>
              <Footer />
            </footer>
          </ReduxProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
