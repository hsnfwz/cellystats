import "./globals.css";

export const metadata = {
  title: "CellyStats",
  description: "Search any NHL player and visualize their statistics using tables and charts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="mx-4 my-8">{children}</body>
    </html>
  );
}
