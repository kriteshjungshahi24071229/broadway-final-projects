import { Link } from "react-router-dom";
import "../Home.css";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
return (
<main className="home">

<section className="hero">
<div className="hero-content">
<p className="hero-small">WELCOME TO TECHSPREE</p>

<h1>
Technology for
<br />
<span>Everyday Life.</span>
</h1>

<p className="hero-description">
Discover the latest electronics, smart devices
and accessories at TechSpree.
</p>

<div className="hero-buttons">
<Link to="/shop">
<button className="primary-btn">
Shop Now
</button>
</Link>

<Link to="/categories">
<button className="secondary-btn">
Explore Categories
</button>
</Link>
</div>
</div>

<div className="hero-visual">
<div className="hero-glow"></div>

<div className="hero-product-card">
<span className="hero-product-label">
TECHSPREE
</span>

<img
src={products[0].image}
alt={products[0].name}
/>
</div>

<div className="floating-card floating-card-one">
⚡ Latest Technology
</div>

<div className="floating-card floating-card-two">
 ✓ Quality Products
</div>
</div>
</section>

<section className="home-intro">
<p className="section-label">
 WHY TECHSPREE
</p>

<h2>
Everything you need.
<br />
All in one place.
</h2>

<p>
From powerful laptops and smartphones to premium
audio devices and smart wearables, TechSpree
brings modern technology closer to you.
</p>
</section>

<section className="featured-products">
<div className="section-heading">
<p className="section-label">
TECHSPREE SHOP
</p>

<h2>Featured Products</h2>

<p className="section-description">
Explore our latest products across every TechSpree
category.
</p>
</div>

<div className="product-container">
{products
.filter(
(product, index, allProducts) =>
index ===
allProducts.findIndex(
(item) =>
item.category === product.category
)
)
.slice(0, 4)
.map((product) => (
<ProductCard
key={product.id}
product={product}
/>
))}
</div>

<div
style={{
textAlign: "center",
marginTop: "40px",
}}
>
<Link to="/shop">
<button className="primary-btn">
View All Products →
</button>
</Link>
</div>
</section>

<section className="categories">
<div className="section-heading">
<p className="section-label">
SHOP BY CATEGORY
</p>

<h2>Find What You Need</h2>
</div>

<div className="category-container">
<Link
to="/shop?category=Laptops"
className="category-card"
>
<div className="category-icon">
💻
</div>

<h3>Laptops</h3>

<p>
Powerful laptops for work and entertainment.
</p>
</Link>

<Link
to="/shop?category=Smartphones"
className="category-card"
>
<div className="category-icon">
📱
</div>

<h3>Smartphones</h3>

<p>
Modern smartphones for everyday life.
</p>
</Link>

<Link
to="/shop?category=Audio"
className="category-card"
>
<div className="category-icon">
🎧
</div>

<h3>Audio</h3>

<p>
Headphones, earbuds and more.
</p>
</Link>

<Link
to="/shop?category=Smart Wear"
className="category-card"
>
<div className="category-icon">
⌚
</div>

<h3>Smart Wear</h3>

<p>
Smart watches and wearable technology.
</p>
</Link>
</div>
</section>

<section className="home-about">
<div className="about-content">
<p className="section-label">
ABOUT TECHSPREE
</p>

<h2>
Technology made
<br />
<span>simple.</span>
</h2>

<p>
TechSpree is your destination for modern
electronics, smart devices and technology
accessories.
</p>

<Link to="/about">
<button className="about-btn">
Learn More →
</button>
</Link>
</div>

<div className="about-visual">
<img
src="/images/techspreelogo.png"
alt="TechSpree Logo"
className="home-about-logo"
/>
</div>
</section>

<section className="home-cta">
<h2>
Ready to upgrade your technology?
</h2>

<p>
Discover your next device today.
</p>

<Link to="/shop">
<button className="primary-btn">
Explore Products
</button>
</Link>
</section>

</main>
);
}