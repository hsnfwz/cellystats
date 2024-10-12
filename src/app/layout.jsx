import "./globals.css";

import Link from "next/link";

export const metadata = {
  title: "CellyStats",
  description: "Search, view, and compare NHL player statistics through tables and charts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col relative w-full">
        <nav className="z-50 flex sticky top-0 border-b-2 border-b-neutral-200 w-full bg-white">
          <Link className="px-4 py-2 hover:bg-black hover:text-white font-bold" href="/">Celly<span className="text-[#93a3ad]">Stats</span></Link>
          <Link className="px-4 py-2 hover:bg-black hover:text-white" href="/compare">Compare</Link>
          <Link className="px-4 py-2 hover:bg-black hover:text-white" href="/search">Search</Link>
        </nav>
        <main>
          {children}
        </main>
        {/* <footer className="p-4 bg-black text-white text-xs">
          <p>Designed and built by Hussein Fawaz</p>
        </footer> */}
      </body>
    </html>
  );
}
