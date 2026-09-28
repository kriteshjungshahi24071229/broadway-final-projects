import { Link } from "react-router-dom";
import "./About.css";

function About() {
return (
<main className="about-page">

<section className="about-hero">
<div className="container">
<span className="about-kicker">ABOUT Nepal Darpan</span>

<h1>
News that keeps you
<br />
informed.
</h1>

<p>
Nepal Darpan is a modern digital news platform focused on delivering
clear, timely and accessible journalism across the stories that
matter.
</p>
</div>
</section>

<section className="about-story">
        
<div className="container about-story-grid">

<div>
<span className="about-kicker">OUR NEWSROOM</span>

<h2>Independent thinking. Clear reporting.</h2>

<p>
Nepal Darpan was created around a simple idea: news should be easy to
understand, relevant and presented with context.
</p>

<p>  
Our coverage spans technology, world affairs, business, sports,
science, climate and culture. We aim to bring readers the
information they need while keeping reporting accessible to a
modern digital audience.
</p>

<p>
As a digital-first publication, PULSE24 combines traditional
newsroom principles with a modern approach to presenting news
across digital platforms.
</p>
</div>

<div className="about-story-visual">
<div className="visual-content">
<span>Nepal Darpan</span>
<strong>NEWSROOM</strong>
<small>NEWS. NOW. EVERYWHERE.</small>
</div>
</div>

</div>
</section>

<section className="editorial-section">
<div className="container">

<div className="section-heading">
<span className="about-kicker">EDITORIAL PRINCIPLES</span>
<h2>How we approach news</h2>
</div>

<div className="editorial-grid">

<article>
<span className="principle-number">01</span>
<h3>Accuracy</h3>
<p>
Information should be carefully checked and presented
responsibly before it reaches our audience.
</p>
</article>

<article>
<span className="principle-number">02</span>
<h3>Clarity</h3>
<p>
Complex developments should be explained in language that
readers can understand without unnecessary complexity.
</p>
</article>

<article>
<span className="principle-number">03</span>
<h3>Context</h3>
<p>
Important stories deserve background and context so readers
can better understand why they matter.
</p>
</article>

<article>
<span className="principle-number">04</span>
<h3>Accountability</h3>
<p>
Corrections and feedback are an important part of maintaining
trust between a newsroom and its audience.
</p>
</article>

</div>
</div>
</section>

<section className="coverage-section">
<div className="container">

<div className="section-heading">
<span className="about-kicker">OUR COVERAGE</span>
<h2>Stories across the world</h2>
</div>

<div className="coverage-list">

<Link to="/category/world">
<strong>WORLD</strong>
<span>
International developments and global affairs
</span>
</Link>

<Link to="/category/technology">
<strong>TECHNOLOGY</strong>
<span>
Innovation, artificial intelligence and digital culture
</span>
</Link>

<Link to="/category/business">
<strong>BUSINESS</strong>
<span>
Markets, companies and the changing economy
</span>
</Link>

<Link to="/category/sports">
<strong>SPORTS</strong>
<span>
Competition, athletes and sporting events
</span>
</Link>

<Link to="/category/music">
<strong>MUSIC</strong>
<span>
Artists, music, culture and the stories shaping popular culture
</span>
</Link>

<Link to="/category/climate">
<strong>CLIMATE</strong>
<span>
Environment, sustainability and resilience
</span>
</Link>

</div>

</div>
</section>

<section className="accuracy-section">
<div className="container accuracy-box">

<div>
<span className="about-kicker">
ACCURACY & CORRECTIONS
</span>

<h2>Getting the story right matters.</h2>
</div>

<p>
Journalism is an ongoing process. When an error is identified,
responsible news organizations should acknowledge and correct it.
Nepal Darpan is committed to maintaining clear standards for accuracy,
transparency and responsible reporting.
</p>

</div>
</section>

<section className="about-final">
<div className="container">

<span className="about-kicker">Nepal Darpan</span>

<h2>News. Now. Everywhere.</h2>

<p>    
A modern digital newsroom built around information, context and
responsible reporting.
</p>

</div>
</section>

</main>
);
}

export default About;