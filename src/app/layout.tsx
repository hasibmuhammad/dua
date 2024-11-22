import TanstackQueryProvider from "@/providers/TanstackQueryProvider";
import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import DuaProvider from "@/providers/DuaProvider";

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "Dua & Ruqyah",
  description: "All Duas Collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-bgPrimary`}
      >
        <main className="max-w-full mx-auto px-4 lg:px-10 lg:my-10">
          <TanstackQueryProvider>
            <DuaProvider>
              {children}
            </DuaProvider>
          </TanstackQueryProvider>
        </main>
      </body>
    </html>
  );
}
