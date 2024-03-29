import type {Metadata} from "next";

import "./globals.css";

import {Inter as FontSans} from "next/font/google";

import {cn} from "@/lib/utils";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Personal finance app",
  description: "Generated by create next app",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen flex flex-col bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
