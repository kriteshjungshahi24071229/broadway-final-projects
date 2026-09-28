import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
return (
<footer className="travel-footer">

<div className="container footer-grid">

<div>
<div className="footer-logo">
HIMALAYA
<span>HORIZONS</span>
</div>

<p>
Explore Nepal through unforgettable journeys, authentic
experiences and carefully designed adventures.
</p>
</div>

<div>
<h3>Explore</h3>

<Link to="/destinations">Destinations</Link>
<Link to="/tours">Tours</Link>
<Link to="/about">About Us</Link>
</div>

<div>
<h3>Contact</h3>

<p>Kathmandu, Nepal</p>
<p>+977 9820381444</p>
<p>kriteshshahi10@gmail.com</p>
</div>

</div>

<div className="footer-bottom">
<div className="container">
© 2026 Himalaya Horizons. All rights reserved.
</div>
</div>

</footer>
);
}

export default Footer;