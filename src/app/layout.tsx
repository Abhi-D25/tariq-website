import type { Metadata } from "next";
import "./globals.css";
import { ModalProvider } from "../context/ModalContext";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-warmwhite text-charcoal">
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
