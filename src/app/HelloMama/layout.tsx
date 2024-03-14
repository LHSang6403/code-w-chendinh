import { GeistSans } from "geist/font/sans";
import "../globals.css";
import Link from "next/link";

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
        <div className="mx-auto mt-4 flex w-fit gap-4 text-xl">
          <Link href="/HelloMama/daili">Đại lí</Link>
          <Link href="/HelloMama/lienhe">Liên hệ</Link>
          <Link href="/HelloMama/tintuc">Tin tức</Link>
          <Link href="/HelloMama/giohang">Giỏ hàng</Link>
        </div>
        <main className="mx-auto flex min-h-screen w-auto flex-col items-center overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
