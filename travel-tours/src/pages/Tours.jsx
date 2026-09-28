import { Link } from "react-router-dom";
import tours from "../data/tours";
import "./Tours.css";

function Tours() {
return (
<main className="tours-page">

<section className="page-hero">
<div className="container">
<span>OUR JOURNEYS</span>

<h1>Find your adventure.</h1>

<p>
Explore carefully designed travel experiences across Nepal.
</p>
</div>
</section>

<section className="tours-section">
<div className="container">

<div className="all-tours-grid">

{tours.map((tour) => (
<article className="full-tour-card" key={tour.id}>

<img src={tour.image} alt={tour.title} />

<div className="full-tour-content">

<span>{tour.location}</span>

<h2>{tour.title}</h2>

<p>{tour.description}</p>

<div className="tour-info">
<strong>{tour.duration}</strong>
<strong>{tour.price}</strong>
</div>

<Link to={`/tour/${tour.id}`}>
View Tour →
</Link>

</div>

</article>
))}

</div>

</div>
</section>

</main>
);
}

export default Tours;