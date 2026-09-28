import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
return (
<header className="navbar">
<div className="container navbar-inner">

<Link to="/" className="travel-logo">
HIMALAYA
<span>HORIZONS</span>
</Link>

<nav className="nav-links">
<NavLink
to="/"
className={({ isActive }) =>
isActive ? "active" : ""
}
>
Home
</NavLink>

<NavLink
to="/destinations"
className={({ isActive }) =>
isActive ? "active" : ""
}
>
Destinations
</NavLink>

<NavLink
to="/tours"
className={({ isActive }) =>
isActive ? "active" : ""
}
>
Tours
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
to="/contact"
className={({ isActive }) =>
isActive ? "active" : ""
}
>
Contact
</NavLink>
</nav>

<Link to="/tours" className="nav-button">
Explore Tours
</Link>

</div>
</header>
);
}

export default Navbar;