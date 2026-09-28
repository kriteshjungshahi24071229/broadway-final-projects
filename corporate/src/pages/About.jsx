import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
return (
<main className="about-page">


<section className="about-hero">

<p className="page-label">
ABOUT VANTREX
</p>

<h1>
We build technology
<br />
that <span>moves forward.</span>
</h1>

<p className="about-hero-text">
Vantrex Technologies is a digital technology
company focused on creating intelligent solutions
for modern businesses.
</p>

</section>

<section className="about-story">

<Link
to="/about"
className="about-story-visual"
>
<img
src="/images/about-team.jpg"
alt="Vantrex technology team"
/>
</Link>

<div className="about-story-content">

<p className="page-label">
WHO WE ARE
</p>

<h2>
Technology.
<br />
Strategy.
<br />
<span>Impact.</span>
</h2>

<p>
We believe technology should do more than
simply function. It should solve problems,
create opportunities and help businesses
move forward.
</p>

<p>
Our team combines software engineering,
design, artificial intelligence and strategic
thinking to create digital products that make
a measurable difference.
</p>

</div>

</section>

<section className="about-values">

<div className="about-values-heading">

<p className="page-label">
OUR APPROACH
</p>

<h2>
Built around
<br />
<span>what matters.</span>
</h2>

</div>


<div className="values-grid">

<div className="value-card">

<div className="value-image">

<img
src="/images/innovation.jpg"
alt="Innovation and technology"
/>

</div>

<div className="value-content">

<span>01</span>

<h3>
Innovation
</h3>

<p>
We explore new technologies and ideas
to create smarter digital solutions.
</p>

</div>

</div>

<div className="value-card">

<div className="value-image">

<img
src="/images/precision.jpg"
alt="Precision in software engineering"
/>

</div>

<div className="value-content">

<span>02</span>

<h3>
Precision
</h3>

<p>
We focus on quality, performance and
attention to every important detail.
</p>

</div>

</div>

<div className="value-card">

<div className="value-image">

<img
src="/images/partnership.jpg"
alt="Technology team partnership"
/>

</div>

<div className="value-content">

<span>03</span>

<h3>
Partnership
</h3>

<p>
We work closely with our clients to
turn their goals into meaningful results.
</p>

</div>

</div>

</div>

</section>

<section className="about-cta">

<p className="page-label">
WORK WITH US
</p>

<h2>
Have a challenge?
<br />
<span>Let's solve it.</span>
</h2>

<Link to="/contact">
Talk to Vantrex ↗
</Link>

</section>

</main>
);
}