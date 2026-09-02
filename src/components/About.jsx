import "./About.css";
import { FaCode, FaLaptopCode, FaGraduationCap } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container reveal">
        <div className="about-header">
          <p className="section-subtitle">01 / PROFILE</p>

          <h2 className="section-title">
            Curious by nature. Precise by practice.
          </h2>
        </div>

        <div className="about-content">
          {/* Left */}
          <div className="about-text">
            <h3>Hi, I’m Kanakarn.</h3>

            <p>
              I’m a frontend-focused student who enjoys turning ideas into
              clear, useful digital experiences.
            </p>

            <p>
              I care about responsive layouts, accessible interactions, and
              clean code. I learn quickly, communicate openly, and enjoy
              improving a product one detail at a time.
            </p>

            <a href="#projects" className="about-button">
              Explore selected work
            </a>
          </div>

          {/* Right */}
          <div className="about-cards">
            <div className="about-card">
              <div className="about-icon">
                <FaCode />
              </div>

              <div>
                <h4>Frontend Development</h4>

                <p>Building responsive and user-friendly web interfaces.</p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-icon">
                <FaLaptopCode />
              </div>

              <div>
                <h4>Web Development</h4>

                <p>
                  Creating web applications and learning modern technologies.
                </p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-icon">
                <FaGraduationCap />
              </div>

              <div>
                <h4>Education</h4>

                <p>
                  Sripatum University
                  <br />
                  Computer Science and Software Development Innovation
                  <br />
                  4th-year student
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
