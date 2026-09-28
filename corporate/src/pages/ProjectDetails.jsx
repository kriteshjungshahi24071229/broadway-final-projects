import { Link, useParams } from "react-router-dom";
import "./ProjectDetails.css";

const projects = {
novapay: {
category: "FINTECH",
title: "NovaPay",
subtitle: "Digital Banking Platform",
image: "/images/projects/NovaPay.jpg",
description:
"NovaPay is a conceptual digital banking platform designed to simplify financial experiences and make everyday payments more accessible.",
technology: "React / Node.js / Cloud",
},

medicore: {
category: "HEALTHCARE",
title: "MediCore",
subtitle: "Healthcare Management System",
image: "/images/projects/MediCore.jpg",
description:
"MediCore is a conceptual healthcare platform designed to help providers manage digital services, patient information and operational workflows.",
technology: "React / Python / Cloud",
},

  "synapse-ai": {
category: "ARTIFICIAL INTELLIGENCE",
title: "Synapse AI",
subtitle: "Intelligent Business Platform",
image: "/images/projects/SynapseAI.jpg",
description:
"Synapse AI is a conceptual intelligent platform designed to automate complex business workflows and help teams make better decisions.",
technology: "Python / Machine Learning / AI",
},
};

export default function ProjectDetails() {
const { projectId } = useParams();

const project = projects[projectId];

if (!project) {
return (
<main className="project-details-page">
<h1>Project Not Found</h1>

<Link to="/projects">
Back to Projects
</Link>
</main>
);
}

return (
<main className="project-details-page">

<section className="project-details-hero">

<div className="project-details-content">

<p className="page-label">
{project.category}
</p>

<h1>
{project.title}
</h1>

<p className="project-details-subtitle">
{project.subtitle}
</p>

</div>

<div className="project-details-image">

<img
src={project.image}
alt={project.title}
/>

</div>

</section>

<section className="project-details-info">

<div>

<p className="page-label">
CASE STUDY
</p>

<h2>
Building digital
<br />
<span>impact.</span>
</h2>

</div>

<div className="project-details-text">

<p>
{project.description}
</p>

<p>
Our approach combines technology,
thoughtful design and scalable
engineering to create a solution
built around real-world needs.
</p>

<div className="project-technology">

<span>TECHNOLOGY</span>

<strong>
{project.technology}
</strong>

</div>

</div>

</section>

<section className="project-details-cta">

<p className="page-label">
HAVE A SIMILAR IDEA?
</p>

<h2>
Let's build
<br />
<span>your solution.</span>
</h2>

<Link to="/team">
Talk to Vantrex Team ↗
</Link>

</section>

</main>
);
}