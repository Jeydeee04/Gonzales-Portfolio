import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Bebas_Neue } from "next/font/google";
import Navbar from "../components/Navbar";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Jey.Dom",
  description: "John Dominique Gonzales — Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable} ${bebasNeue.variable}`}>
      <body className={`${poppins.className} bg-black text-white`}>
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
