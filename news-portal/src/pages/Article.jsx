import { Link, useParams } from "react-router-dom";
import articles from "../data/articles";
import "./Article.css";

export default function Article() {
const { articleId } = useParams();

const article = articles.find(
(item) => item.id.toString() === articleId
);

if (!article) {
return (
<main className="article-not-found">
<div className="container">
<h1>Article Not Found</h1>
<p>The article you are looking for does not exist.</p>
<Link to="/latest">Back to Latest News →</Link>
</div>
</main>
);
}

const relatedArticles = articles
.filter((item) => item.id !== article.id)
.slice(0, 3);

return (
<main className="article-page">
<article>
<div className="container article-container">
<div className="article-category">{article.category}</div>

<h1>{article.title}</h1>

<p className="article-excerpt">{article.excerpt}</p>

<div className="article-meta">
<span>By {article.author}</span>
<span>•</span>

<span>{article.date}</span>
</div>

<a
href={article.image}
target="_blank"
rel="noopener noreferrer"
className="article-image-link"
>
<img
src={article.image}
alt={article.title}
className="article-main-image"
/>

</a>

<div className="article-body">
{article.content.map((paragraph, index) => (
<p key={index}>{paragraph}</p>
))}
</div>
</div>
</article>

<section className="related-section">
<div className="container">
<div className="section-heading">
<span>Continue Reading</span>
<h2>Related Stories</h2>
</div>

<div className="related-grid">
{relatedArticles.map((related) => (
<Link
to={`/article/${related.id}`}
className="related-card"
key={related.id}
>
<img src={related.image} alt={related.title} />

<div>
<span>{related.category}</span>
<h3>{related.title}</h3>
</div>
</Link>
))}

</div>
</div>
</section>
</main>
);
}