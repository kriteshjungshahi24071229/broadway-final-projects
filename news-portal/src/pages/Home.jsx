import { Link } from "react-router-dom";
import articles from "../data/articles";
import "./Home.css";

export default function Home() {
const heroArticle = articles[0];

const topStories = articles.slice(1, 4);
const latestStories = articles.slice(4, 8);

return (
<main>
<section className="home-hero">
<div className="container hero-grid">
<div className="hero-content">
<span className="category-label">TOP STORY</span>

<h1>{heroArticle.title}</h1>

<p>{heroArticle.excerpt}</p>

<div className="hero-meta">
<span>{heroArticle.author}</span>
<span>•</span>
<span>{heroArticle.date}</span>
</div>

<Link to={`/article/${heroArticle.id}`} className="read-button">
Read Full Story →
</Link>
</div>

<Link
to={`/article/${heroArticle.id}`}
className="hero-image"
>
<img src={heroArticle.image} alt={heroArticle.title} />
<span>TECHNOLOGY</span>
</Link>
</div>
</section>

<section className="section top-stories">
<div className="container">
<div className="section-heading">
<span>Editor's Picks</span>
<h2>Top Stories</h2>
</div>

<div className="story-grid">
{topStories.map((article) => (
<Link
to={`/article/${article.id}`}
className="story-card"
key={article.id}
>
<div className="story-image">
<img src={article.image} alt={article.title} />
</div>

<div className="story-info">
<span>{article.category}</span>
<h3>{article.title}</h3>
<p>{article.excerpt}</p>
<small>{article.date}</small>
</div>
</Link>
))}
</div>
</div>
</section>

<section className="latest-home">
<div className="container">
<div className="section-heading">
<span>Stay Informed</span>
<h2>Latest News</h2>
</div>

<div className="latest-list">
{latestStories.map((article) => (
<Link
to={`/article/${article.id}`}
className="latest-item"
key={article.id}
>
<img src={article.image} alt={article.title} />

<div>
<span>{article.category}</span>
<h3>{article.title}</h3>
<p>{article.excerpt}</p>
<small>{article.date}</small>
</div>
</Link>
))}
</div>

<div className="center-button">
<Link to="/latest" className="outline-button">
View All News →
</Link>
</div>
</div>
</section>

<section className="section categories-preview">
<div className="container">
<div className="section-heading">
<span>Explore</span>
<h2>News Categories</h2>
</div>

<div className="category-boxes">
<Link to="/categories" className="category-box">
<strong>01</strong>
<h3>World</h3>
<p>Stories from around the globe.</p>
</Link>

<Link to="/categories" className="category-box">
<strong>02</strong>
<h3>Technology</h3>
<p>Innovation shaping tomorrow.</p>
</Link>

<Link to="/categories" className="category-box">
<strong>03</strong>
<h3>Sports</h3>
<p>Performance, competition and athletes.</p>
</Link>

<Link to="/categories" className="category-box">
<strong>04</strong>
<h3>Business</h3>
<p>Markets, companies and the economy.</p>
</Link>
</div>
</div>
</section>

<section className="newsletter">
<div className="container newsletter-content">
<div>
<span>NEPAL DARPAN BRIEF</span>
<h2>Get the news that matters.</h2>
<p>
Subscribe to receive the latest stories and important updates.
</p>
</div>

<form className="newsletter-form">
<input type="email" placeholder="Your email address" />
<button type="submit">Subscribe</button>
</form>
</div>
</section>
</main>
);
}