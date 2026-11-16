import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="wrap">
      <div className="page-head">
        <p className="mono" style={{ color: "var(--purple)", marginBottom: "0.8rem" }}>~/404: no such file or directory</p>
        <h1>This page is not here</h1>
        <p className="lede">The link may be old, or the address has a typo. These are the pages most people look for:</p>
      </div>
      <div className="grid-3">
        <Link href="/books/az-104" className="card"><h3>AZ-104 Field Guide</h3><p>The Azure Administrator study guide, free sample and labs.</p><span className="foot">Open the book page</span></Link>
        <Link href="/books/git" className="card"><h3>Git / GitHub Study Guide</h3><p>Learn Git, prepare for GH-900, free sample and labs.</p><span className="foot">Open the book page</span></Link>
        <Link href="/learn" className="card"><h3>Learn for free</h3><p>Lessons, notes, quizzes and hands-on labs.</p><span className="foot">Go to Learn</span></Link>
      </div>
      <div className="btn-row" style={{ marginTop: "2rem" }}>
        <Link href="/" className="btn btn-primary">Back to the home page</Link>
      </div>
    </div>
  );
}
