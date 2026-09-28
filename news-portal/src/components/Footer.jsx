import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
return (
<footer className="footer">
<div className="container footer-grid">
<div className="footer-brand">
<Link to="/" className="footer-logo">
Nepal<span>Darpan</span>
</Link>

<p>
News. Now. Everywhere. Independent digital journalism covering the
stories, ideas and technology shaping the modern world.
</p>
</div>

<div className="footer-column">
<h4>Explore</h4>
<Link to="/">Home</Link>
<Link to="/latest">Latest News</Link>
<Link to="/categories">Categories</Link>
</div>

<div className="footer-column">
<h4>Company</h4>
<Link to="/about">About Us</Link>
<Link to="/contact">Contact</Link>
</div>

<div className="footer-column">
<h4>Follow</h4>
<a href="#!">Facebook</a>
<a href="#!">Instagram</a>
<a href="#!">X / Twitter</a>
<a href="#!">YouTube</a>
</div>
</div>

<div className="container footer-bottom">
<p>© 2026 Nepal Darpan. All rights reserved.</p>
<p>News. Now. Everywhere.</p>
</div>
</footer>
);
}