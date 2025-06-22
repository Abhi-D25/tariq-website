import type { Metadata } from "next";
import { Inter, Poppins } from 'next/font/google';
import "./globals.css";
import { ModalProvider } from "../context/ModalContext";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "FloorNDesign | Cedar Park's Premier Tile & Remodeling Company",
  description: "Transform your home with premium tile, kitchen, and bathroom renovations in Cedar Park, TX. Modern, visual-first design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-warmwhite text-charcoal`}>
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
