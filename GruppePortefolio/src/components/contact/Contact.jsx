import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Ta kontakt</h2>
      <p>Lurer du på noe? Ta gjerne kontakt!</p>

      <form 
        className="contact-form"
        action="https://formspree.io/f/xrbarjey"
        method="POST"
      >
        <input type="text" name="fornavn" placeholder="Fornavn" required />
        <input type="text" name="etternavn" placeholder="Etternavn" required />
        <input type="email" name="email" placeholder="E-post" required />
        <textarea name="melding" placeholder="Din melding" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;

