import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Ta kontakt</h2>
      <p>Lurer du på noe? Ta gjerne kontakt!</p>

      <form className="contact-form">
        <input type="text" placeholder="Fornavn" required />
        <input type="text" placeholder="Etternavn" required />
        <input type="email" placeholder="E-post" required />
        <textarea placeholder="Din melding" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;

