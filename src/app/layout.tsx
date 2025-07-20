import type { Metadata } from "next";
import "./globals.css";
import ProgressProviders from "@/providers/ProgressProvider";
import { Toaster } from "@/components/ui/sonner";

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
      <body className={`font-sans antialiased`}>
        <ProgressProviders>
          {children}
          <Toaster position="top-right" richColors closeButton />
        </ProgressProviders>
      </body>
    </html>
  );
}
