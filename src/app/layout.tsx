import { GeistSans } from "geist/font/sans";
import "./globals.css";
import NavDrawer from "@components/Layout/Drawer/NavDrawer";
import ThemeProvider from "@components/Providers/ThemeProvider";
import ReactQueryProvider from "@components/Providers/ReactQueryProvider";

export const metadata = {
  title: "Next.js Starter Kit",
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
        {/* <ThemeProvider> */}
        <ReactQueryProvider>
          <main className="mx-auto flex min-h-screen w-auto max-w-[2200px] flex-col items-center overflow-hidden">
            {children}
            {/* <NavDrawer /> */}
          </main>
        </ReactQueryProvider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
