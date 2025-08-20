import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Kontakt oss</h2>
      <p>Email: <a href="mailto:gruppe7@example.com">gruppe7@example.com</a></p>
      <div className="button-container">
        <button>Send melding</button>
      </div>
    </section>
  );
}

export default Contact;

