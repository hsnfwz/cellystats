import "./globals.css";

import Link from "next/link";

export const metadata = {
  title: "CellyStats",
  description: "Search, view, and compare NHL player statistics through tables and charts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col relative w-full gap-8">
        <nav className="z-50 flex sticky top-0 w-full bg-white px-4 border-b border-neutral-200">
          <div className="w-full max-w-screen-lg flex m-auto text-xs gap-8">
            <Link className="py-4 hover:border-black border-b-2 border-transparent font-bold" href="/">Celly<span className="text-[#93a3ad]">Stats</span></Link>
            <Link className="py-4 hover:border-black border-b-2 border-transparent" href="/compare">Compare Players</Link>
            <Link className="py-4 hover:border-black border-b-2 border-transparent" href="/search">Search Players</Link>
          </div>
        </nav>
        <main className="px-4">
          {children}
        </main>
      </body>
    </html>
  );
}
