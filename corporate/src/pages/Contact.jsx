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

<p className="page-label">GET IN TOUCH</p>

<h1>
Let's build
<br />
something <span>remarkable.</span>
</h1>

<p>
Have an idea, challenge or project in mind?
Tell us about it and let's explore what's possible.
</p>

</section>

<section className="contact-section">

<div className="contact-info">

<p className="page-label">CONTACT VANTREX</p>

<h2>
Start a
<br />
<span>conversation.</span>
</h2>

<p className="contact-description">
Whether you're looking to build a new digital
product, modernize an existing system or explore
emerging technology, our team is ready to talk.
</p>

<div className="contact-details">

<div className="contact-detail">
<span className="contact-detail-number">01</span>

<div>
<small>Email</small>
<p>kriteshshahi10@gmail.com</p>
</div>
</div>

<div className="contact-detail">
<span className="contact-detail-number">02</span>

<div>
<small>Phone</small>
<p>+977 9820381444</p>
</div>
</div>

<div className="contact-detail">
<span className="contact-detail-number">03</span>

<div>
<small>Location</small>
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

<p className="page-label">
MESSAGE RECEIVED
</p>

<h2>
Thanks for
<br />
reaching out.
</h2>

<p>
Your message has been received.
The Vantrex team will get back to you soon.
</p>

<button
onClick={() => setSubmitted(false)}
>
Send Another Message
</button>

</div>

) : (

<form onSubmit={handleSubmit}>

<p className="page-label">
SEND A MESSAGE
</p>

<h2>
Tell us about
<br />
your <span>project.</span>
</h2>

<div className="contact-row">

<div className="contact-field">
<label>Your Name</label>

<input
type="text"
placeholder="Enter your name"
required
/>
</div>

<div className="contact-field">
<label>Email Address</label>

<input
type="email"
placeholder="Enter your email"
required
/>
</div>

</div>

<div className="contact-field">

<label>Company</label>

<input
type="text"
placeholder="Your company name"
/>

</div>

<div className="contact-field">

<label>What can we help with?</label>

<select required>

<option value="">
Select a service
</option>

<option>
Software Development
</option>

<option>
Web & App Development
</option>

<option>
Artificial Intelligence
</option>

<option>
Cloud Solutions
</option>

<option>
Cybersecurity
</option>

<option>
Digital Transformation
</option>

</select>

</div>

<div className="contact-field">

<label>Tell us about your project</label>

<textarea
rows="6"
placeholder="Describe your idea or challenge..."
required
></textarea>

</div>

<button
type="submit"
className="contact-submit"
>
Send Message <span>↗</span>
</button>

</form>

)}

</div>

</section>


<section className="contact-bottom">

<p className="page-label">
VANTREX TECHNOLOGIES
</p>

<h2>
Technology has no
<br />
<span>finish line.</span>
</h2>

</section>

</main>

);
}