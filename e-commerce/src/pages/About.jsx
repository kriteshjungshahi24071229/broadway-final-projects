import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
return (
<main className="about-page">

<section className="about-hero">
<div className="about-hero-content">
<p className="about-label">ABOUT TECHSPREE</p>

<h1>
Technology
<br />
Made <span>Simple.</span>
</h1>

<p>
TechSpree is a modern e-commerce platform
dedicated to bringing useful and reliable
technology products together in one place.
</p>
</div>

<div className="about-hero-card">
<img
src="/images/techspreelogo.png"
alt="TechSpree Logo"
className="about-main-logo"
/>

<span>Technology for Everyday Life.</span>
</div>
</section>

<section className="about-story">
<div className="about-story-content">
<p className="about-label">WHO WE ARE</p>

<h2>
A simpler way to
<span> shop technology.</span>
</h2>

<p>
TechSpree is a technology-focused online
shopping platform created to make discovering
and purchasing modern electronics easier.
</p>

<p>
From laptops and smartphones to audio devices
and smart wearables, our goal is to bring useful
technology products together in one convenient
place.
</p>
</div>

<div className="about-stat-card">
<div className="about-stat">
<strong>16+</strong>
<span>Products</span>
</div>

<div className="about-stat">
<strong>4</strong>
<span>Categories</span>
</div>

<div className="about-stat">
<strong>24/7</strong>
<span>Online Shopping</span>
</div>
</div>
</section>

<section className="about-mission">
<div className="about-mission-inner">
<p className="about-label">OUR MISSION</p>

<h2>
Making technology
<br />
<span>easier to discover.</span>
</h2>

<p>
We aim to provide a simple, convenient and
enjoyable online shopping experience where
customers can explore technology products
without unnecessary complexity.
</p>
</div>
</section>

<section className="about-values">
<div className="about-values-heading">
<p className="about-label">WHAT MATTERS TO US</p>

<h2>Why Choose TechSpree?</h2>
</div>

<div className="values-grid">
<div className="value-card">
<div className="value-icon">✓</div>

<h3>Quality Products</h3>

<p>
Discover carefully selected technology
products for everyday needs.
</p>
</div>

<div className="value-card">
<div className="value-icon">⚡</div>

<h3>Simple Experience</h3>

<p>
Browse categories, compare products and
shop with a straightforward experience.
</p>
</div>

<div className="value-card">
<div className="value-icon">💡</div>

<h3>Modern Technology</h3>

<p>
Explore current devices and technology
designed for modern lifestyles.
</p>
</div>
</div>
</section>

<section className="about-final-cta">
<h2>Ready to explore TechSpree?</h2>

<p>Find your next technology upgrade today.</p>

<Link to="/shop">
<button>Explore Products →</button>
</Link>
</section>
</main>
);
}