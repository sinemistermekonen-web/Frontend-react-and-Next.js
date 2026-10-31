import Link from "next/link";
import { dishes } from "../lib/dishes";

export default function HomePage() {
  const featured = dishes.slice(0, 3);
  return (
    <main>
      <section className="hero page-container">
        <div className="hero-copy">
          <span className="eyebrow">A taste of Ethiopia</span>
          <h1>Good food.<br /><span>Good mood.</span></h1>
          <p>Discover the flavours you love, from comforting shiro to traditional doro wot. Your next favourite meal is just a few clicks away.</p>
          <Link className="button button-primary" href="/menu">Explore the menu <span aria-hidden="true">→</span></Link>
        </div>
        <div className="hero-art" role="img" aria-label="A selection of Ethiopian dishes">
          <div className="hero-art-inner"><span>እንኳን ደህና መጡ</span><strong>Freshly made.<br />Traditionally loved.</strong><small>ETHIOPIAN FLAVOURS</small></div>
        </div>
      </section>
      <section className="page-container featured-section">
        <div className="section-heading"><div><span className="eyebrow">From our kitchen</span><h2>Popular dishes</h2></div><Link className="text-link" href="/menu">See full menu →</Link></div>
        <div className="dish-grid">{featured.map((dish) => (
          <article className="dish-card" key={dish.id}><span className="eyebrow">{dish.category}</span><h3>{dish.name}</h3><p>{dish.description}</p><strong className="price">{dish.price.toFixed(2)} ETB</strong><Link className="text-link" href={`/menu/${dish.id}`}>Discover dish →</Link></article>
        ))}</div>
      </section>
    </main>
  );
}
