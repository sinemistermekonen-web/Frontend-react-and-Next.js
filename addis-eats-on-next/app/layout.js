import Link from "next/link";
import { Providers } from "../components/Providers";
import "./globals.css";

export const metadata = {
  title: { default: "Addis Eats", template: "%s | Addis Eats" },
  description: "Discover Ethiopian dishes and order your favourites with Addis Eats.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <header className="site-header">
            <Link href="/" className="site-logo">Addis Eats<span>.</span></Link>
            <nav aria-label="Main navigation">
              <Link href="/">Home</Link>
              <Link href="/menu">Menu</Link>
              <Link href="/cart">Cart</Link>
              <Link href="/checkout">Checkout</Link>
            </nav>
          </header>
          {children}
          <footer className="site-footer">Made with care in Addis Ababa · Addis Eats</footer>
        </Providers>
      </body>
    </html>
  );
}
