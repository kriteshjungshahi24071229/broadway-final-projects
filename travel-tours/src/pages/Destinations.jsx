import { Link } from "react-router-dom";
import tours from "../data/tours";
import "./Destinations.css";

function Destinations() {
const destinations = [
{
name: "Everest Region",
description:
"The legendary home of Mount Everest, Sherpa culture and spectacular Himalayan landscapes.",
image: tours[0].image,
tourId: 1,
},

{
name: "Mustang",
description:
"Explore dramatic mountain landscapes, ancient villages and the unique culture of Nepal's Himalayan region.",
image: tours[1].image,
tourId: 2,
},

{
name: "Kathmandu Valley",
description:
"Discover ancient temples, heritage sites and the vibrant cultural heart of Nepal.",
image: tours[2].image,
tourId: 3,
},

{
name: "Pokhara",
description:
"Experience peaceful lakes, stunning mountain views and unforgettable adventure activities.",
image: tours[3].image,
tourId: 4,
},

{
name: "Illam",
description:
"Explore beautiful tea gardens, green hills and peaceful landscapes in eastern Nepal.",
image: tours[4].image,
tourId: 5,
},

{
name: "Badimalika",
description:
"Discover breathtaking Himalayan landscapes, high-altitude trails and the natural beauty of far-western Nepal.",
image: tours[5].image,
tourId: 6,
},
];

return (
<main className="destinations-page">

<section className="page-hero">
<div className="container">
<span>DESTINATIONS</span>

<h1>Discover Nepal.</h1>

<p>
From Himalayan peaks to ancient cities, explore destinations
shaped by nature, culture and adventure.
</p>
</div>
</section>

<section className="destinations-section">
<div className="container">

<div className="destination-grid">

{destinations.map((destination) => (
<article
className="destination-card"
key={destination.name}
>

<img
src={destination.image}
alt={destination.name}
/>

<div>
<h2>{destination.name}</h2>

<p>{destination.description}</p>

<Link to={`/tour/${destination.tourId}`}>
Explore Destination →
</Link>
</div>

</article>
))}

</div>
</div>
</section>

</main>
);
}

export default Destinations;