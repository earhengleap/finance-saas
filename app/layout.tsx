import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { QueryProvider } from "@/providers/query-provider";
import { SheetProvider } from "@/providers/sheet-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://infinance.vercel.app"),
  title: {
    template: "%s | InFinance",
    default: "InFinance",
  },
  authors: {
    name: "Ear Hengleap",
  },
  description:
    "InFinance is a platform that allows you to easily create and manage financial transactions.",
  openGraph: {
    title: "InFinance",
    description:
      "Create with InFinance using Hono, Neon, Clerk and Next.js",
    url: "https://brilliant-ai.vercel.app",
    images: "",
    type: "website",
  },
  keywords: [
    "InFinance",
    "Ear Hengleap",
    "Prisma",
    "Stripe",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <QueryProvider>
            <SheetProvider />
            <Toaster />
            {children}
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
