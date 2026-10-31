import Link from "next/link";
export default function NotFound() {
  return <main className="page-container content-page"><div className="empty-state"><span className="eyebrow">404 error</span><h1>Page not found</h1><p>The page you are looking for does not exist.</p><Link className="button button-primary" href="/">Return home</Link></div></main>;
}
