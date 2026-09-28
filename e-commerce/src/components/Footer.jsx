import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
return (
<footer className="footer">
<div className="footer-content">

<div className="footer-brand">
<img
src="/images/techspreelogo.png"
alt="TechSpree Logo"
/>

<p>
Your destination for modern technology, 
electronics and smart devices.
</p>
</div>

<div className="footer-section">
<h3>Quick Links</h3>
<Link to="/">Home</Link>
<Link to="/shop">Shop</Link>
<Link to="/categories">Categories</Link>
<Link to="/about">About Us</Link>
<Link to="/contact">Contact</Link>
</div>

<div className="footer-section">
<h3>Categories</h3>
<Link to="/shop?category=Laptops">Laptops</Link>
<Link to="/shop?category=Smartphones">
Smartphones
</Link>
<Link to="/shop?category=Audio">Audio</Link>
<Link to="/shop?category=Smart Wear">
Smart Wear
</Link>
</div>

<div className="footer-section">
<h3>Contact</h3>
<p>Email: support@techspree.com</p>
<p>Phone: +977 9800000000</p>
<p>Kathmandu, Nepal</p>
</div>

</div>

<div className="footer-bottom">
<p>© 2026 TechSpree. All rights reserved.</p>
</div>
</footer>
);
}