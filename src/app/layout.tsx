import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SolanaContextProvider } from "@/provider/ReownAppkitProvider";
import { WalletProvider } from "@/context/WalletContext";

const geistSans = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <SolanaContextProvider>
          <WalletProvider>{children}</WalletProvider>
        </SolanaContextProvider>
      </body>
    </html>
  );
}
