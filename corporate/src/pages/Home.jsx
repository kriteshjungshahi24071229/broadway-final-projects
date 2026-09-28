import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
return (
<main className="home">

<section className="hero">

<div className="hero-content">

<p className="hero-label">
VANTREX TECHNOLOGIES
</p>

<h1>
We Engineer
<br />
<span>What's Next.</span>
</h1>

<p className="hero-description">
We build intelligent digital solutions that help
businesses move faster, operate smarter and
create what's next.
</p>

<div className="hero-buttons">

<Link
to="/services"
className="hero-primary-btn"
>
Explore Services
<span>↗</span>
</Link>

<Link
to="/projects"
className="hero-secondary-btn"
>
View Our Work
</Link>

</div>

</div>

<div className="hero-visual">

<div className="hero-grid"></div>

<div className="hero-circle hero-circle-one"></div>

<div className="hero-circle hero-circle-two"></div>

<div className="hero-tech-card">
<span>V</span>
<p>VANTREX</p>
<small>
TECHNOLOGY / INNOVATION
</small>
</div>

</div>

</section>

<section className="stats-section">

<div className="stat">
<strong>50+</strong>
<span>Projects Delivered</span>
</div>

<div className="stat">
<strong>20+</strong>
<span>Technology Experts</span>
</div>

<div className="stat">
<strong>12</strong>
<span>Countries Reached</span>
</div>

<div className="stat">
<strong>90%</strong>
<span>Client Satisfaction</span>
</div>

</section>

<section className="home-services">

<div className="home-services-header">

<div>

<p className="page-label">
WHAT WE DO
</p>

<h2>
Technology
<br />
<span>without limits.</span>
</h2>

</div>

<div className="home-services-intro">

<p>
From software engineering to artificial
intelligence, we build technology that
helps ambitious businesses move forward.
</p>

<Link to="/services">
Explore all services ↗
</Link>

</div>

</div>

<Link
to="/services"
className="home-services-image"
>

<img
src="/images/services-tech.jpg"
alt="Vantrex technology services"
/>

<div className="home-services-image-overlay">

<span>
VANTREX
</span>

<strong>
ENGINEERING
<br />
THE FUTURE
</strong>

</div>

</Link>

<div className="home-services-grid">


<Link
to="/services"
className="home-service-card"
>

<div className="home-service-image">

<img
src="/images/software-development.jpg"
alt="Software development"
/>

</div>

<div className="home-service-content">

<span>01</span>

<h3>
Software
<br />
Development
</h3>

<p>
Scalable software built around
real business needs.
</p>

<strong>↗</strong>

</div>

</Link>

<Link
to="/services"
className="home-service-card"
>

<div className="home-service-image">

<img
src="/images/web-development.jpg"
alt="Web and app development"
/>

</div>

<div className="home-service-content">

<span>02</span>

<h3>
Web & App
<br />
Development
</h3>

<p>
Fast, modern digital experiences
for every platform.
</p>

<strong>↗</strong>

</div>

</Link>

<Link
to="/services"
className="home-service-card"
>

<div className="home-service-image">

<img
src="/images/artificial-intelligence.jpg"
alt="Artificial intelligence technology"
/>

</div>

<div className="home-service-content">

<span>03</span>

<h3>
Artificial
<br />
Intelligence
</h3>

<p>
Intelligent systems designed
to automate and improve.
</p>

<strong>↗</strong>

</div>

</Link>

<Link
to="/services"
className="home-service-card"
>

<div className="home-service-image">

<img
src="/images/cloud-security.jpg"
alt="Cloud and cybersecurity"
/>

</div>

<div className="home-service-content">

<span>04</span>

<h3>
Cloud &
<br />
Cybersecurity
</h3>

<p>
Secure infrastructure built
for modern businesses.
</p>

<strong>↗</strong>

</div>

</Link>

</div>

</section>

<section className="about-preview">

<Link
to="/about"
className="about-visual"
>

<div className="about-big-text">
V
</div>

</Link>

<div className="about-content">

<p className="section-label">
WHO WE ARE
</p>

<h2>
Technology is
<br />
only powerful when
<span> it moves people.</span>
</h2>

<p>
Vantrex Technologies is a digital technology
company focused on building innovative solutions
for modern businesses.
</p>

<p>
We combine technology, creativity and strategic
thinking to transform complex challenges into
powerful digital experiences.
</p>

<Link
to="/about"
className="text-link"
>
Discover Vantrex →
</Link>

</div>

</section>

<section className="projects-preview">

<div className="section-heading">

<p className="section-label">
SELECTED WORK
</p>

<h2>
Ideas into
<br />
<span>impact.</span>
</h2>

</div>

<div className="projects-grid">

<Link
to="/projects"
className="project-card project-one"
>

<img
src="/images/projects/NovaPay.jpg"
alt="NovaPay digital banking platform"
/>

<div className="project-overlay">

<span>FINTECH</span>

<h3>NovaPay</h3>

<p>Digital Banking Platform</p>

</div>

</Link>

<Link
to="/projects"
className="project-card project-two"
>

<img
src="/images/projects/MediCore.jpg"
alt="MediCore healthcare platform"
/>

<div className="project-overlay">

<span>HEALTHCARE</span>

<h3>MediCore</h3>

<p>Healthcare Management System</p>

</div>

</Link>

<Link
to="/projects"
className="project-card project-three"
>

<img
src="/images/projects/SynapseAI.jpg"
alt="Synapse AI intelligent platform"
/>

<div className="project-overlay">

<span>AI TECHNOLOGY</span>

<h3>Synapse AI</h3>

<p>Intelligent Business Platform</p>

</div>

</Link>

</div>


<div className="projects-button">

<Link to="/projects">
View All Projects →
</Link>

</div>

</section>


<section className="home-cta">

<p className="section-label">
HAVE AN IDEA?
</p>

<h2>
Let's build
<br />
something <span>remarkable.</span>
</h2>

<Link to="/contact">
Start a Conversation ↗
</Link>

</section>

</main>
);
}