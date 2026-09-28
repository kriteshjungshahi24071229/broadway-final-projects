import { Link } from "react-router-dom";
import "./Services.css";

const services = [
{
number: "01",
title: "Software Development",
description:
"We build reliable software platforms designed around real business requirements, performance and long-term growth.",
tags: ["Enterprise Software", "APIs", "Custom Platforms"],
image: "/images/software-development.jpg",
alt: "Software development and programming",
},
{
number: "02",
title: "Web & App Development",
description:
"From responsive websites to powerful applications, we create digital experiences that are fast, intuitive and scalable.",
tags: ["Websites", "Mobile Apps", "UI/UX"],
image: "/images/web-development.jpg",
alt: "Web and app development",
},
{
number: "03",
title: "Artificial Intelligence",
description:
"We use intelligent technologies to automate processes, analyze information and create smarter digital products.",
tags: ["Machine Learning", "Automation", "AI Solutions"],
image: "/images/artificial-intelligence.jpg",
alt: "Artificial intelligence technology",
},

{
number: "04",
title: "Cybersecurity",
description:
"Security-focused solutions designed to protect systems, applications and valuable business information.",
tags: ["Security", "Risk Management", "Monitoring"],
image: "/images/cybersecurity.jpg",
alt: "Cybersecurity technology",
},

];

export default function Services() {
return (
<main className="services-page">

<section className="services-hero">

<div className="services-hero-content">

<p className="page-label">
WHAT WE DO
</p>

<h1>
Technology
<br />
<span>that creates.</span>
</h1>

<p className="services-hero-text">
We combine engineering, design and emerging
technology to solve complex business problems
and create meaningful digital experiences.
</p>

</div>

<div className="services-hero-image">

<img
src="/images/services-tech.jpg"
alt="Vantrex technology engineering"
/>

<div className="services-image-label">

<span className="services-logo">
VANTREX<span>.</span>
</span>

<span className="services-logo-text">
ENGINEERING / TECHNOLOGY
</span>

</div>

</div>

</section>

<section className="services-list">

<div className="services-list-header">

<span>
OUR CAPABILITIES
</span>

<span>
06 SERVICES
</span>

</div>


{services.map((service) => (

<article
key={service.number}
>
className="service-row"
       
<div className="service-image">

<img
src={service.image}
alt={service.alt}
/>

<div className="service-image-number">
{service.number}
</div>

</div>

<div className="service-main">

<div className="service-title-row">

<h2>
{service.title}
</h2>

<span className="service-arrow">
↗
</span>

</div>

<p className="service-description">
{service.description}
</p>

<div className="service-tags">

{service.tags.map((tag) => (

<span key={tag}>
{tag}
</span>

))}

</div>

</div>

</article>

))}

</section>

<section className="services-showcase">

<div className="services-showcase-image">

<img
src="/images/about-team.jpg"
alt="Vantrex technology team working together"
/>

</div>

<div className="services-showcase-content">
  
<p className="page-label">
TECHNOLOGY + PEOPLE
</p>

<h2>
Built around
<br />
<span>real problems.</span>
</h2>

<p>
Great technology is not only about code.
It is about understanding people, businesses
and the problems that need to be solved.
</p>

<p>
Our teams bring engineering, design and
strategy together to create technology that
works in the real world.
</p>

</div>

</section>

<section className="process-section">

<div className="process-heading">

<p className="page-label">
HOW WE WORK
</p>

<h2>
From idea
<br />
<span>to execution.</span>
</h2>

</div>

<div className="process-content">
 
<div className="process-image">
<img
src="/images/services-team.jpg"
alt="Vantrex team working together"
/>

<div className="process-image-label">
<span>VANTREX</span>
<small>PEOPLE / TECHNOLOGY / COLLABORATION</small>
</div>

</div>

<div className="process-list">

<div className="process-item">

<div className="process-number">
01
</div>

<div className="process-content-text">

<h3>
Discover
</h3>

<p>
We understand your goals, users and
business challenges before anything is built.
</p>

</div>

<div className="process-arrow">
↗
</div>

</div>

<div className="process-item">

<div className="process-number">
02
</div>

<div className="process-content-text">

<h3>
Design
</h3>

<p>
We create clear experiences and technical
solutions around your specific needs.
</p>

</div>

<div className="process-arrow">
↗
</div>

</div>


<div className="process-item">

<div className="process-number">
03
</div>

<div className="process-content-text">

<h3>
Build
</h3>

<p>
Our engineers turn strategy into reliable,
scalable and high-quality technology.
</p>

</div>

<div className="process-arrow">
↗
</div>

</div>

<div className="process-item">

<div className="process-number">
04
</div>

<div className="process-content-text">

<h3>
Launch
</h3>

<p>
We test, refine and help bring the finished
solution into the real world.
</p>

</div>

<div className="process-arrow">
↗
</div>

</div>

</div>

</div>

</section>

<section className="services-cta">

<p className="page-label">
HAVE A CHALLENGE?
</p>

<h2>
Let's build
<br />
<span>the answer.</span>
</h2>

<Link to="/team">
Talk to Vantrex Team ↗
</Link>

</section>

</main>
);
}