import { Link, useParams } from "react-router-dom";
import tours from "../data/tours";
import "./TourDetails.css";

function TourDetails() {
const { tourId } = useParams();

const tour = tours.find(
(item) => item.id.toString() === tourId
);

if (!tour) {
return (
<main className="tour-not-found">
<h1>Tour not found</h1>
<Link to="/tours">← Back to Tours</Link>
</main>
);
}

return (
<main className="tour-details">

<section className="tour-detail-image">
<img src={tour.image} alt={tour.title} />
</section>

<section className="tour-detail-content">
<div className="container">

<span>{tour.location}</span>

<h1>{tour.title}</h1>

<div className="detail-meta">
<div>
<small>Duration</small>
<strong>{tour.duration}</strong>
</div>

<div>
<small>Starting From</small>
<strong>{tour.price}</strong>
</div>
</div>

<p className="detail-description">
{tour.description}
</p>

<h2>Journey Highlights</h2>

<div className="highlights-grid">
{tour.highlights.map((highlight) => (
<div key={highlight}>
<span>✓</span>
{highlight}
</div>
))}
</div>

<Link to="/contact" className="primary-button detail-button">
Plan This Journey
</Link>

</div>
</section>

</main>
);
}

export default TourDetails;