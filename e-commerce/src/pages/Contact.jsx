import { useState } from "react";
import "./Contact.css";

export default function Contact() {
const [submitted, setSubmitted] = useState(false);

function handleSubmit(event) {
event.preventDefault();
setSubmitted(true);
}

return (
<main className="contact-page">

<section className="contact-hero">

<div>
<p className="contact-label">
GET IN TOUCH
</p>

<h1>
Let's talk
<span> technology.</span>
</h1>

<p>
Have a question about our products or your
order? Send us a message and we'll be happy
to help.
</p>
</div>

</section>

<section className="contact-section">

<div className="contact-info">

<p className="contact-label">
CONTACT TECHSPREE
</p>

<h2>
We'd love to
<span> hear from you.</span>
</h2>

<p className="contact-intro">
Whether you have a question about a product,
your order, or our services, feel free to
contact the TechSpree team.
</p>

<div className="contact-details">

<div className="contact-detail">
<div className="contact-icon">✉</div>

<div>
<h3>Email</h3>
<p>kriteshshahi10@gmail.com</p>
</div>
</div>

<div className="contact-detail">
<div className="contact-icon">☎</div>

<div>
<h3>Phone</h3>
<p>+977 9820381444</p>
</div>
</div>

<div className="contact-detail">
<div className="contact-icon">📍</div>

<div>
<h3>Location</h3>
<p>Biratnagar, Nepal</p>
</div>
</div>

</div>

</div>

<div className="contact-form-card">

{submitted ? (
<div className="contact-success">

<div className="success-icon">
✓
</div>

<h2>Message Sent!</h2>

<p>
Thank you for contacting TechSpree.
We'll get back to you soon.
</p>

<button
onClick={() => setSubmitted(false)}
>
Send Another Message
</button>

</div>
) : (
<>
<p className="contact-label">
SEND A MESSAGE
</p>

<h2>
How can we help?
</h2>

<form onSubmit={handleSubmit}>

<div className="contact-form-row">

<div className="contact-field">
<label>Your Name</label>

<input
type="text"
placeholder="Enter your name"
required
/>
</div>

<div className="contact-field">
<label>Your Email</label>

<input
type="email"
placeholder="Enter your email"
required
/>
</div>

</div>

<div className="contact-field">

<label>Subject</label>

<input
type="text"
placeholder="What is your message about?"
required
/>

</div>

<div className="contact-field">

<label>Your Message</label>

<textarea
placeholder="Write your message here..."
rows="6"
required
></textarea>

</div>

<button
type="submit"
className="contact-submit-btn"
>
Send Message →
</button>

</form>
</>
)}

</div>

</section>

<section className="contact-bottom">

<h2>We're here to help.</h2>

<p>
Explore our products or continue shopping
with TechSpree.
</p>

<div className="contact-bottom-buttons">

<a href="/shop">
<button className="contact-primary-btn">
Shop Products →
</button>
</a>

<a href="/categories">
<button className="contact-secondary-btn">
Browse Categories
</button>
</a>

</div>

</section>

</main>
);
}