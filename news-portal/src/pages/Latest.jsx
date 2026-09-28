import { Link } from "react-router-dom";
import articles from "../data/articles";
import "./Latest.css";

export default function Latest() {
return (
<main className="latest-page">
<section className="page-header">
<div className="container">
<span>STAY INFORMED</span>
<h1>Latest News</h1>
<p>
Explore the latest stories, ideas and developments from around the
world.
</p>
</div>
</section>

<section className="section">
<div className="container">
<div className="featured-latest">
<img src={articles[1].image} alt={articles[1].title} />

<div className="featured-latest-content">
<span>{articles[1].category}</span>
<h2>{articles[1].title}</h2>
<p>{articles[1].excerpt}</p>

<Link to={`/article/${articles[1].id}`}>
Read Story →
</Link>
</div>
</div>

<div className="section-heading latest-heading">
<span>More Stories</span>
<h2>Latest Updates</h2>
</div>

<div className="latest-news-grid">
{articles.map((article) => (
<Link
to={`/article/${article.id}`}
className="latest-news-card"
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
</div>
</section>
</main>
);
}