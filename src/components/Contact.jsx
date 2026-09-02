import "./Contact.css";

import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container reveal">
        <p className="section-subtitle">04 / SAY HELLO</p>

        <h2 className="section-title">Have an internship in mind?</h2>

        <p className="contact-description">
          I’m open to learning, contributing, and meeting teams building
          meaningful products. Let’s start a conversation.
        </p>

        <div className="contact-content">
          {/* Email */}
          <a href="mailto:oho.poster@gmail.com" className="contact-card">
            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <div>
              <h3>Email</h3>
              <p>oho.poster@gmail.com</p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/posterbabor"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              <FaGithub />
            </div>

            <div>
              <h3>GitHub</h3>
              <p>View my projects and code</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              <FaLinkedin />
            </div>

            <div>
              <h3>LinkedIn</h3>
              <p>Connect with me professionally</p>
            </div>
          </a>
        </div>

        <a href="mailto:oho.poster@gmail.com" className="contact-button">
          <FaPaperPlane />
          Send Me an Email
        </a>
      </div>
    </section>
  );
}

export default Contact;
