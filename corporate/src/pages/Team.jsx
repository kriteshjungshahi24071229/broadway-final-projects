import { Link } from "react-router-dom";
import "./Team.css";

const team = [
{
number: "01",
name: "Kritesh Jung Shahi",
role: "Chief Executive Officer",
image: "/images/team/kritesh.jpg",
},
{
number: "02",
name: "India Royale",
role: "Chief Technology Officer",
image: "/images/team/maya.jpg",
},
{
number: "03",
name: "Daniel Cormier",
role: "Head of Engineering",
image: "/images/team/daniel.jpg",
},
{
number: "04",
name: "Tracy Cortez",
role: "Creative Director",
image: "/images/team/sophia.jpg",
},
];

export default function Team() {
return (
<main className="team-page">

<section className="team-hero">

<p className="page-label">
THE PEOPLE BEHIND VANTREX
</p>

<h1>
Built by people.
<br />
<span>Driven by ideas.</span>
</h1>

<p className="team-hero-text">
Our multidisciplinary team brings together
technology, creativity and strategic thinking
to build solutions that make a difference.
</p>

</section>

<section className="team-section">

<div className="team-heading">

<p className="page-label">
OUR TEAM
</p>

<h2>
Meet the
<br />
<span>people.</span>
</h2>

</div>

<div className="team-grid">

{team.map((member) => (

<Link
to="/team"
className="team-card"
key={member.number}
>

<div className="team-photo">

<img
src={member.image}
alt={member.name}
/>

</div>


<div className="team-info">

<div>

<small>
{member.number}
</small>

<h3>
{member.name}
</h3>

<p>
{member.role}
</p>

</div>

<span className="team-arrow">
↗
</span>

</div>

</Link>

))}

</div>

</section>

<section className="culture-section">

<div className="culture-content">

<p className="page-label">
OUR CULTURE
</p>

<h2>
Curious minds.
<br />
<span>Bold thinking.</span>
</h2>

<p>
We believe the best technology comes from
people who are curious enough to question
the obvious and ambitious enough to build
something better.
</p>

<p>
At Vantrex, engineers, designers and
strategists work together to turn difficult
challenges into meaningful opportunities.
</p>

</div>

<div className="culture-box">
<span>V</span>
</div>

</section>

<section className="team-cta">

<p className="page-label">
LET'S CREATE
</p>

<h2>
Have something
<br />
<span>in mind?</span>
</h2>

<Link to="/contact">
Talk to Vantrex ↗
</Link>

</section>

</main>
);
}