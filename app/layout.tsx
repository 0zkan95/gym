import type { Metadata } from "next";
import { DM_Sans, Montserrat } from "next/font/google";
import "./globals.css";



const montserrat = Montserrat({
  subsets: ["latin"], // Specify subsets you need
  weight: [ '700'], // Specify weights you need
  style: ['normal'], // Specify styles you need
  variable: "--font-montserrat", // Define CSS variable name
  display: 'swap', // Optional: Defines font-display behavior
});


const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ['400', '700'], 
  style: ['normal', 'italic'],
  variable: "--font-dm-sans", 
  display: 'swap',
});

export const metadata: Metadata = {
  title: "EVOGYM",
  description: "Transform yourself next generation!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${dm_sans.variable}`}>
        {children}
      </body>
    </html>
  );
}
