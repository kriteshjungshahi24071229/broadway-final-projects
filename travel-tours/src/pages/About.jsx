import { Link } from "react-router-dom";
import "./About.css";

function About() {
return (
<main className="travel-about">

<section className="page-hero">
<div className="container">
<span>ABOUT US</span>

<h1>Travel with purpose.</h1>

<p>
We believe travel should connect people with places, cultures
and experiences that stay with them long after the journey ends.
</p>
</div>
</section>

<section className="about-story">
<div className="container about-grid">

<div>
<span className="travel-kicker">OUR STORY</span>

<h2>
More than a trip.
<br />
A real experience.
</h2>
</div>

<div>
<p>
Himalaya Horizons is a Nepal-focused travel company created
around a simple idea: explore the country beyond the usual
tourist routes.
</p>

<p>
From Himalayan trekking and cultural journeys to peaceful
escapes, our goal is to help travelers experience Nepal in
an authentic and meaningful way.
</p>

<p>
Every journey is designed with comfort, local experiences
and responsible travel in mind.
</p>
</div>

</div>
</section>

<section className="values-section">
<div className="container">

<div className="values-heading">
<span className="travel-kicker">WHAT WE VALUE</span>
<h2>Travel done differently.</h2>
</div>

<div className="values-grid">

<article>
<strong>01</strong>
<h3>Authentic</h3>
<p>
We focus on genuine local experiences and meaningful
connections with the places we visit.
</p>
</article>

<article>
<strong>02</strong>
<h3>Responsible</h3>
<p>
We believe tourism should respect local communities,
culture and the environment.
</p>
</article>

<article>
<strong>03</strong>
<h3>Personal</h3>
<p>
Every traveler is different, so we design experiences
around different interests and ambitions.
</p>
</article>

</div>

</div>
</section>

<section className="about-cta">
<div className="container">

<span className="travel-kicker">READY TO EXPLORE?</span>

<h2>Your next chapter starts here.</h2>

<Link to="/tours" className="primary-button">
Explore Our Tours
</Link>

</div>
</section>

</main>
);
}

export default About;