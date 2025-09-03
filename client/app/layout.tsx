import { Playfair_Display, Inter } from "next/font/google";
import { Suspense } from "react"
import "./globals.css";
import { Header } from "@/components/header";

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: "Book Graveyard",
  description: "Book Graveyard is a book review website run by two passionate readers who share their honest thoughts and insights on the books they love.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" app-version="0.0.6" suppressHydrationWarning>
      <body
        className={`${playfairDisplay.variable} ${inter.variable} antialiased`}
      >
        <Header />
        <main>
          <Suspense fallback={null}>{children}</Suspense>
        </main>
      </body>
    </html>
  );
}
