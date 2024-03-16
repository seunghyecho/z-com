import { Inter } from "next/font/google";
import "./globals.css";

import NextThemeProvider from "@/lib/providers";
import { MSWComponent } from "@/app/_component/MSXComponent";
import AuthSession from "@/app/_component/AuthSession";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Z. Whats up? / Z",
  description: "Z.com inspired X.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MSWComponent />
        <AuthSession>
          <NextThemeProvider>{children}</NextThemeProvider>
        </AuthSession>
      </body>
    </html>
  );
}
