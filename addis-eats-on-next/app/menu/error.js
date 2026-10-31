"use client";
export default function MenuError({ reset }) {
  return <main className="page-container content-page" role="alert"><div className="empty-state"><h1>We could not load the menu.</h1><p>Please try again.</p><button className="button button-primary" type="button" onClick={() => reset()}>Try again</button></div></main>;
}
