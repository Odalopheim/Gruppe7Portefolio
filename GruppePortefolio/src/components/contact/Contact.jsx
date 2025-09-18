import React from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Ta kontakt</h2>
      <p>Lurer du på noe? Ta gjerne kontakt!</p>

      <div className="contact-links">
        <a href="mailto:odalo@uia.no" className="contact-icon" title="Send e-post">
          <MdEmail size={32} />
        </a>
        <span className="contact-text">odalo@uia.no</span>
        <a href="https://www.linkedin.com/in/odalundeopheim/" target="_blank" rel="noopener noreferrer" className="contact-icon" title="LinkedIn">
          <BiLogoLinkedin size={32} />
        </a>
        <span className="contact-text">odalundeopheim</span>
      </div>
    </section>
  );
}

export default Contact;