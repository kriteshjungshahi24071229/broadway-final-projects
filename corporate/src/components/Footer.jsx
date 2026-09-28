import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
return (
<footer className="footer">

<div className="footer-main">

<div className="footer-brand">

<Link to="/" className="footer-logo">
VANTREX<span>.</span>
</Link>

<p>
Technology. Engineered to Advance.
</p>

<span className="footer-location">
Biratnagar, Nepal
</span>

</div>

<div className="footer-column">

<h4>EXPLORE</h4>

<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/services">Services</Link>
<Link to="/projects">Projects</Link>
<Link to="/team">Team</Link>

</div>

<div className="footer-column">

<h4>SERVICES</h4>

<span>Software Development</span>
<span>Artificial Intelligence</span>
<span>Cloud Solutions</span>
<span>Cybersecurity</span>
<span>Digital Transformation</span>

</div>

<div className="footer-column">

<h4>CONTACT</h4>

<span>kriteshshahi10@gmail.com</span>
<span>+977 9820381444</span>

<Link to="/contact" className="footer-talk">
Let's Talk ↗
</Link>

</div>

</div>


<div className="footer-bottom">

<p>
© 2026 Vantrex Technologies. All rights reserved.
</p>

<div className="footer-bottom-links">
<span>Privacy Policy</span>
<span>Terms of Use</span>
</div>

<a href="#top" className="back-top">
Back to top ↑
</a>

</div>

</footer>
  );
}