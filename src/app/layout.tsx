import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Passkey",
  description: "Passkey is a password manager that is simple and secure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          ubuntu.className
        )}
      >
        <Toaster />

        <div className="relative h-full w-full bg-background">
          <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          {children}
        </div>
      </body>
    </html>
  );
}
