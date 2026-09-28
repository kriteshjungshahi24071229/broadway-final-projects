import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
return (
<nav className="navbar">
<div className="navbar-container">

<Link to="/" className="navbar-logo">
VANTREX<span>.</span>
</Link>

<div className="nav-links">

<NavLink
to="/"
className={({ isActive }) =>
isActive ? "active" : ""
}
>
Home
</NavLink>

<NavLink
to="/about"
className={({ isActive }) =>
isActive ? "active" : ""
}
>
About
</NavLink>

<NavLink
to="/services"
className={({ isActive }) =>
isActive ? "active" : ""
}
>
Services
</NavLink>

<NavLink
to="/projects"
className={({ isActive }) =>
isActive ? "active" : ""
}
>
Projects
</NavLink>

<NavLink
to="/team"
className={({ isActive }) =>
isActive ? "active" : ""
}
>
Team
</NavLink>

</div>

<Link to="/contact" className="nav-contact">
Let's Talk <span>↗</span>
</Link>

</div>
</nav>
);
}