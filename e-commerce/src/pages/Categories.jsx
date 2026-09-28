import { Link } from "react-router-dom";
import "./Categories.css";

export default function Categories() {
const categories = [
{
icon: "💻",
name: "Laptops",
description:
"Powerful laptops for gaming, study, work and professional use.",
count: "4 Products",
link: "/shop?category=Laptops",
},
{
icon: "📱",
name: "Smartphones",
description:
"Modern smartphones with powerful performance, cameras and displays.",
count: "4 Products",
link: "/shop?category=Smartphones",
},
{
icon: "🎧",
name: "Audio",
description:
"Wireless earbuds, headphones and audio accessories for every lifestyle.",
count: "4 Products",
link: "/shop?category=Audio",
},
{
icon: "⌚",
name: "Smart Wear",
description:
"Smartwatches and wearable technology to keep you connected.",
count: "4 Products",
link: "/shop?category=Smart Wear",
},
];

return (
<main className="categories-page">

<section className="categories-hero">
<div className="categories-hero-content">
<p className="categories-label">TECHSPREE COLLECTION</p>

<h1>
Shop by
<span> Category.</span>
</h1>

<p>
Explore our range of technology products,
carefully organized to help you find exactly
what you need.
</p>
</div>
</section>

<section className="categories-section">

<div className="categories-heading">
<p className="categories-label">EXPLORE PRODUCTS</p>

<h2>Find What You're Looking For</h2>

<p>
Browse our product categories and discover
technology made for everyday life.
</p>
</div>

<div className="categories-grid">

{categories.map((category) => (
<div className="category-large-card" key={category.name}>

<div className="category-large-icon">
{category.icon}
</div>

<div className="category-card-content">

<span className="category-product-count">
{category.count}
</span>

<h3>{category.name}</h3>

<p>{category.description}</p>

<Link to={category.link}>
<button className="category-view-btn">
View {category.name}
<span>→</span>
</button>
</Link>

</div>

</div>
))}

</div>

</section>

<section className="categories-cta">

<div>
<p className="categories-label">TECHSPREE SHOP</p>

<h2>
Can't decide what you need?
</h2>

<p>
Explore our complete collection and discover
your next technology upgrade.
</p>
</div>

<Link to="/shop">
<button className="category-shop-btn">
View All Products →
</button>
</Link>

</section>

</main>
);
}