import type { Metadata } from 'next'
import { Roboto } from "next/font/google";
import "./globals.css";

const inter = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "triethoc",
  description: "DECH MO CAI TRUONG NAY",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
