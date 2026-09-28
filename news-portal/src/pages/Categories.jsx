import { Link } from "react-router-dom";
import "./Categories.css";

const categories = [
{
name: "World",
slug: "world",
description:
"International affairs, global developments and stories from around the world.",
},
{
name: "Technology",
slug: "technology",
description:
"Technology, artificial intelligence, digital innovation and the future of computing.",
},
{
name: "Business",
slug: "business",
description:
"Markets, companies, finance, entrepreneurship and the global economy.",
},
{
name: "Sports",
slug: "sports",
description:
"Sports news, athletes, competitions and major sporting events.",
},
  
{
name: "Music",
slug: "music",
description:
"Artists, music, culture and the stories behind the sounds shaping popular culture.",
},

{
name: "Climate",
slug: "climate",
description:
"Climate, environment, sustainability and the future of our planet.",
},
];

function Categories() {
return (
<main className="categories-page">

<section className="categories-hero">
<div className="container">
<span className="categories-kicker">
Nepal Darpan / NEWS CATEGORIES
</span>

<h1>Explore Our Coverage</h1>

<p>
Discover news and stories organized by topic. Select a category
to explore the latest headlines and reports.
</p>
</div>
</section>

<section className="categories-section">
<div className="container">

<div className="categories-heading">
<span className="categories-kicker">ALL CATEGORIES</span>

<h2>What are you interested in?</h2>

<p>
Browse our coverage across world affairs, technology, business,
sports, science and climate.
</p>
</div>

<div className="categories-grid">

{categories.map((category, index) => (
<Link
to={`/category/${category.slug}`}
className="category-card"
key={category.slug}
>
<div className="category-card-top">
<span className="category-number">
{String(index + 1).padStart(2, "0")}
</span>

<span className="category-arrow">↗</span>
</div>

<h2>{category.name}</h2>

<p>{category.description}</p>

<span className="category-link">
Explore {category.name} →
</span>
</Link>
))}
          
</div>
</div>
</section>

<section className="categories-editorial">
<div className="container categories-editorial-grid">

<div>
<span className="categories-kicker">
Nepal Darpan NEWSROOM
</span>

<h2>
One newsroom.
<br />
Many perspectives.
</h2>
</div>

<div>
<p>
From international developments and business to technology,
sports, science and climate, Nepal Darpan brings together stories
from different areas of modern life.
</p>

<p>
Select a category above to explore stories focused on the
subjects that matter most to you.
</p>

<Link to="/latest" className="latest-link">
View Latest News →
</Link>
</div>

</div>
</section>

<section className="categories-cta">
<div className="container">

<span className="categories-kicker">
STAY INFORMED
</span>

<h2>Follow the stories that matter.</h2>

<p>
Explore Nepal Darpan coverage and stay connected with the latest
developments across our news categories.
</p>

<Link to="/latest" className="categories-cta-button">
View Latest Stories
</Link>

</div>
</section>

</main>
);
}

export default Categories;