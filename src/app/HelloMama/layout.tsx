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
        <ul className="mt-4 flex w-full flex-row justify-center gap-4 text-xl">
          <li>
            <Link href="/HelloMama/daili">Đại lí</Link>
          </li>
          <li>
            <Link href="/HelloMama/lienhe">Liên hệ</Link>
          </li>
          <li>
            <Link href="/HelloMama/tintuc">Tin tức</Link>
          </li>
          <li>
            <Link href="/HelloMama/giohang">Giỏ hàng</Link>
          </li>
        </ul>
        <main className="mx-auto flex min-h-screen w-screen max-w-[2200px] flex-col items-center overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
