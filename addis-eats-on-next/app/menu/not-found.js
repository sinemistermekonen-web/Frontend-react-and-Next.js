import Link from "next/link";
export default function MenuNotFound() {
  return <main className="page-container content-page"><div className="empty-state"><h1>Dish not found</h1><p>This dish does not exist in our menu.</p><Link className="button button-primary" href="/menu">Return to the menu</Link></div></main>;
}
