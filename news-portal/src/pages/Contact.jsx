import "./Contact.css";

function Contact() {
return (
<main className="contact-page">
<section className="contact-hero">
<div className="container">
<span className="contact-label">GET IN TOUCH</span>
<h1>Contact Nepal Darpan</h1>
<p>
Have a news tip, media inquiry, feedback, or general question?
Our newsroom would like to hear from you.
</p>
</div>
</section>

<section className="contact-section">
<div className="container contact-grid">

<div className="contact-info">
<span className="section-kicker">Nepal Darpan NEWSROOM</span>
<h2>We’re here to listen.</h2>
<p>
Nepal Darpan welcomes information, story suggestions, corrections,
feedback, and professional media inquiries.
</p>

<div className="contact-item">
<h3>Newsroom</h3>
<p>kriteshshahi10@gmail.com</p>
</div>

<div className="contact-item">
<h3>General Inquiries</h3>
<p>+977 9820381444</p>
</div>

<div className="contact-item">
<h3>Office</h3>
<p>Biratnagar, Nepal</p>
</div>
</div>

<div className="contact-form-box">
<h2>Send us a message</h2>

<form>
<div className="form-row">
<div className="form-group">
<label htmlFor="name">Full Name</label>
<input
id="name"
type="text"
placeholder="Your name"
/>
</div>

<div className="form-group">
<label htmlFor="email">Email Address</label>
<input
id="email"
type="email"
placeholder=".com"
/>
</div>
</div>

<div className="form-group">
<label htmlFor="subject">Subject</label>
<input
id="subject"
type="text"
placeholder="What is your message about?"
/>
</div>

<div className="form-group">
<label htmlFor="message">Message</label>
<textarea
id="message"
rows="7"
placeholder="Write your message..."
></textarea>
</div>

<button type="submit" className="contact-submit">
Send Message
</button>
</form>
</div>

</div>
</section>
</main>
);
}

export default Contact;