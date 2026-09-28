import { Link } from "react-router-dom";
import tours from "../data/tours";
import "./Home.css";

function Home() {
const featuredTours = tours.slice(0, 3);

return (
<main>

<section className="travel-hero">
<div className="travel-hero-overlay">
<div className="container travel-hero-content">

<span>DISCOVER NEPAL</span>

<h1>
Explore Beyond
<br />
the Ordinary.
</h1>

<p>
Discover the mountains, culture and unforgettable experiences
of Nepal with journeys designed for curious travelers.
</p>

<div className="hero-buttons">
<Link to="/tours" className="primary-button">
Explore Tours
</Link>

<Link to="/destinations" className="secondary-button">
Discover Destinations
</Link>
</div>

</div>
</div>
</section>

<section className="intro-section">
<div className="container intro-grid">

<div>
<span className="travel-kicker">HIMALAYA HORIZONS</span>

<h2>
Your journey begins
<br />
here.
</h2>
</div>

<div>
<p>
From Himalayan trails and ancient temples to peaceful lakes
and vibrant cities, Nepal offers experiences unlike anywhere
else.
</p>

<p>
We create carefully planned journeys that connect travelers
with the landscapes, people and culture of the country.
</p>

<Link to="/about" className="text-link">
Discover Our Story →
</Link>
</div>

</div>
</section>

<section className="featured-section">
<div className="container">

<div className="section-title-row">
<div>
<span className="travel-kicker">FEATURED JOURNEYS</span>
<h2>Choose your adventure.</h2>
</div>

<Link to="/tours" className="text-link">
View All Tours →
</Link>
</div>

<div className="tour-grid">

{featuredTours.map((tour) => (
<article className="tour-card" key={tour.id}>

<img src={tour.image} alt={tour.title} />

<div className="tour-card-content">

<span>{tour.location}</span>

<h3>{tour.title}</h3>

<p>{tour.description}</p>

<div className="tour-card-bottom">
<strong>{tour.duration}</strong>

<Link to={`/tour/${tour.id}`}>
Explore →
</Link>
</div>

</div>

</article>
))}

</div>

</div>
</section>

<section className="home-cta">
<div className="container">

<span className="travel-kicker">YOUR NEXT ADVENTURE</span>

<h2>
The mountains are
<br />
waiting.
</h2>

<p>
Start planning a journey that you'll remember for a lifetime.
</p>

<Link to="/contact" className="primary-button">
Plan My Trip
</Link>

</div>
</section>

</main>
);
}

export default Home;