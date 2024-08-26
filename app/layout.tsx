import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";

import { Poppins } from 'next/font/google'
 
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})


export const metadata: Metadata = {
  title: "Rent Lease",
  description: "Website Made by Using Next Js and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar/>
        {children}</body>
    </html>
  );
}
