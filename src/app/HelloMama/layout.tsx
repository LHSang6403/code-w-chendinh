import { GeistSans } from "geist/font/sans";
import "../globals.css";
import Link from "next/link";
import Footer from "./Components/Footer";

export const metadata = {
  title: "Hello Mama",
  description: "The fastest way to build apps with Next.js and Supabase.",
  keywords: "next.js, supabase, starter kit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`light ${GeistSans.className}`}
      style={{ colorScheme: "light" }}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground">
        <div className="mx-auto mt-4 flex h-fit w-full flex-wrap justify-center gap-4 text-xl">
          <Link href="/HelloMama/daili">Đại lí</Link>
          <Link href="/HelloMama/lienhe">Liên hệ</Link>
          <Link href="/HelloMama/tintuc">Tin tức</Link>
          <Link href="/HelloMama/giohang">Giỏ hàng</Link>
          <Link href="/HelloMama/thuvien">Thư viện</Link>
        </div>
        <main className="flex w-screen flex-col items-center overflow-hidden px-28 xl:px-3">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
