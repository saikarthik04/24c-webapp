import type { Metadata } from "next";
import {Montserrat} from "next/font/google"
import "./globals.css";
import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)
const MontserratFont = Montserrat({
  weight:["400", "500", "900" ,"800", "700"],
  subsets:["latin"],
  preload: true,
  display:"swap",
  style:"normal"
})

export const metadata: Metadata = {
  title: "24° | Luxury Fashion Brand",
  description: "Luxury Fashion Brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" >
      <body
        className={`${MontserratFont.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}