import { useState } from "react";
import "./Contact.css";

function Contact() {
const [formSubmitted, setFormSubmitted] = useState(false);

const [formData, setFormData] = useState({
name: "",
email: "",
destination: "",
message: "",
});

const destinations = [
"Everest Base Camp Trek",
"Mustang Adventure",
"Kathmandu Heritage Tour",
"Pokhara Escape",
"Illam: Eastern Nepal",
"Badimalika: Far West Nepal",
];

const handleChange = (event) => {
const { name, value } = event.target;

setFormData({
...formData,
[name]: value,
});
};

const handleSubmit = (event) => {
event.preventDefault();

setFormSubmitted(true);
};

return (
<main className="travel-contact">

<section className="page-hero">
<div className="container">
<span>CONTACT</span>

<h1>Let's plan your journey.</h1>

<p>
Tell us where you want to go and we'll help you turn the idea
into an unforgettable experience.
</p>
</div>
</section>

<section className="contact-section">
<div className="container contact-grid">

<div className="contact-info">

<span className="travel-kicker">
GET IN TOUCH
</span>

<h2>Start planning your adventure.</h2>

<p>
Whether you're dreaming about the Himalayas, exploring
Nepal's heritage or looking for a relaxing escape, we'd
love to hear from you.
</p>

<div className="contact-item">
<strong>Office</strong>
<p>Biratnagar, Nepal</p>
</div>

<div className="contact-item">
<strong>Email</strong>
<p>kriteshshahi10@gmail.com</p>
</div>

<div className="contact-item">
<strong>Phone</strong>
<p>+977 9820381444</p>
</div>

</div>

<div className="contact-form">

{!formSubmitted ? (
<>
<h2>Send an inquiry</h2>

<form onSubmit={handleSubmit}>

<div className="form-row">

<div>
<label>Name</label>

<input
type="text"
name="name"
value={formData.name}
onChange={handleChange}
placeholder="Your name"
required
/>
</div>

<div>
<label>Email</label>

<input
type="email"
name="email"
value={formData.email}
onChange={handleChange}
placeholder="you@example.com"
required
/>
</div>

</div>

<label>Destination</label>

<select
name="destination"
value={formData.destination}
onChange={handleChange}
required
>
<option value="">
Select a destination
</option>

{destinations.map((destination) => (
<option
key={destination}
value={destination}
>
{destination}
</option>
))}
</select>

<label>Message</label>

<textarea
name="message"
rows="7"
value={formData.message}
onChange={handleChange}
placeholder="Tell us about your trip..."
required
></textarea>

<button type="submit">
Send Inquiry
</button>

</form>
</>
) : (
<div className="inquiry-success">

<div className="success-icon">
✓
</div>

<h2>Inquiry Sent Successfully!</h2>

<p>
Thank you for contacting Himalaya Horizons.
We have received your travel inquiry.
</p>

<div className="inquiry-details">

<div>
<strong>Name</strong>
<span>{formData.name}</span>
</div>

<div>
<strong>Destination</strong>
<span>{formData.destination}</span>
</div>

<div>
<strong>Email</strong>
<span>{formData.email}</span>
</div>

</div>

<p className="success-message">
Our travel team will contact you shortly to discuss
your journey.
</p>

<button
type="button"
onClick={() => setFormSubmitted(false)}
>
Send Another Inquiry
</button>

</div>
)}

</div>

</div>
</section>

</main>
);
}

export default Contact;