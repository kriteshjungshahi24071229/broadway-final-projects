import { Link, useParams } from "react-router-dom";
import articles from "../data/articles";
import "./CategoryNews.css";

function CategoryNews() {
const { categoryName } = useParams();

const formattedCategory =
categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

const categoryArticles = articles.filter(
(article) => article.category.toLowerCase() === categoryName.toLowerCase()
);

return (
<main className="category-news-page">

<section className="category-news-hero">
<div className="container">
<span className="category-news-kicker">Nepal Darpan / CATEGORY</span>

<h1>{formattedCategory}</h1>

<p>
Latest {formattedCategory.toLowerCase()} stories, updates and
developments from Nepal Darpan.
</p>
</div>
</section>

<section className="category-news-section">
<div className="container">

{categoryArticles.length > 0 ? (
<div className="category-news-grid">

{categoryArticles.map((article) => (
<article className="category-news-card" key={article.id}>

<img
src={article.image}
alt={article.title}
/>

<div className="category-news-content">

<span className="article-category">
{article.category}
</span>

<h2>{article.title}</h2>

<p>{article.excerpt}</p>

<div className="article-meta">
<span>{article.author}</span>
<span>{article.date}</span>
</div>

<Link
to={`/article/${article.id}`}
className="read-article"
>
Read Story →
</Link>

</div>
</article>

))}

</div>
) : (
<div className="no-category-news">
<h2>No stories available</h2>
<p>
There are currently no stories in this category.
</p>

<Link to="/categories">
← Back to Categories
</Link>
</div>
)}

</div>
</section>

</main>
);
}

export default CategoryNews;