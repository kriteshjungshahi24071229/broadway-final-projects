import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
return (
<header className="navbar">
<div className="container navbar-container">
<Link to="/" className="news-logo">
<span className="logo-main">Nepal</span>
<span className="logo-number">Darpan</span>
</Link>

<nav className="nav-links">
<NavLink to="/" end>
Home
</NavLink>

<NavLink to="/latest">
Latest
</NavLink>

<NavLink to="/categories">
Categories
</NavLink>

<NavLink to="/about">
About
</NavLink>

<NavLink to="/contact">
Contact
</NavLink>
</nav>

<div className="nav-right">
<span className="live-dot"></span>
<span>LIVE</span>
</div>
</div>
</header>
);
}