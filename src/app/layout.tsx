import type { Metadata } from "next";
import "./globals.css";
import ProgressProviders from "@/providers/ProgressProvider";
import { Toaster } from "@/components/ui/sonner";
import "@mdxeditor/editor/style.css"

export const metadata: Metadata = {
  title: "X-Obese",
  description: "A fitness app",
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-inter antialiased`}>
        <ProgressProviders>
          {children}
          <Toaster position="top-right" richColors closeButton />
        </ProgressProviders>
      </body>
    </html>
  );
}
