import { Link } from "react-router-dom";
import "./Projects.css";

const projects = [
{
number: "01",
category: "FINTECH",
title: "NovaPay",
description:
"A modern digital banking platform designed to simplify financial experiences and make everyday payments more accessible.",
technology: "React / Node.js / Cloud",
image: "/images/projects/NovaPay.jpg",
},

{
number: "02",
category: "HEALTHCARE",
title: "MediCore",
description:
"A connected healthcare platform helping providers manage digital services, patient information and operational workflows.",
technology: "React / Python / Cloud",
image: "/images/projects/MediCore.jpg",
},

{
number: "03",
category: "ARTIFICIAL INTELLIGENCE",
title: "Synapse AI",
description:
"An intelligent platform built to automate complex business workflows and help teams make better decisions.",
technology: "Python / Machine Learning / AI",
image: "/images/projects/SynapseAI.jpg",
},

{
number: "04",
category: "E-COMMERCE",
title: "Orbit Commerce",
description:
"A scalable commerce platform designed to deliver a fast, flexible and modern digital shopping experience.",
technology: "React / Node.js / Cloud",
image: "/images/projects/OrbitCommerce.jpg",
},
];

export default function Projects() {
return (
<main className="projects-page">

<section className="projects-hero">

<p className="page-label">
SELECTED WORK
</p>

<h1>
Ideas into
<br />
<span>impact.</span>
</h1>

<p className="projects-hero-text">
Explore some of the digital products and
technology solutions created by Vantrex.
</p>

</section>

<section className="projects-list">

{projects.map((project) => (

<article
className="project-case"
key={project.number}
>

<div className="project-number">
{project.number}
</div>

<div className="project-visual">

<img
src={project.image}
alt={`${project.title} project`}
/>

<div className="project-visual-label">
VANTREX / {project.category}
</div>

</div>

<div className="project-case-content">

<p className="project-category">
{project.category}
</p>

<h2>
{project.title}
</h2>

<p className="project-description">
{project.description}
</p>

<p className="project-tech">
{project.technology}
</p>

<button className="project-link">
View Case Study ↗
</button>

</div>

</article>

))}

</section>

<section className="projects-cta">

<p className="page-label">
YOUR PROJECT COULD BE NEXT
</p>

<h2>
Have an idea?
<br />
<span>Let's make it real.</span>
</h2>

<Link to="/contact">
Start a Project ↗
</Link>

</section>

</main>

);
}