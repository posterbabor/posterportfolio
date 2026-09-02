import "./Hero.css";
import profileImage from "../assets/profile.png";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content reveal">
        <p className="hero-greeting">AVAILABLE FOR INTERNSHIP · 2026</p>

        <h1 className="hero-name">Kanakarn Sriphen</h1>

        <h2 className="hero-title">Frontend developer in the making</h2>

        <p className="hero-description">
          I build thoughtful, responsive interfaces with React.js and a strong
          eye for detail. Currently looking for an internship where I can learn
          from a real product team and contribute from day one.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            See my work
          </a>

          <a href="#contact" className="btn btn-secondary">
            Let’s connect
          </a>
        </div>
      </div>

      <div className="hero-image-container reveal">
        <img src={profileImage} alt="Kanakarn Sriphen" className="hero-image" />

        {/* decorative floating shape */}
        <div
          className="float-shape animated"
          style={{
            width: 220,
            height: 220,
            right: -40,
            top: -40,
            background:
              "radial-gradient(circle at 20% 20%, rgba(255,57,85,0.22), transparent 30%)",
          }}
        />
      </div>

      {/* right-side decorative column (fills the empty area) */}
      <div className="hero-decor" aria-hidden="true">
        <div
          className="float-shape large animated"
          style={{
            right: 48,
            top: 28,
            background:
              "radial-gradient(circle at 30% 30%, rgba(197,40,58,0.16), transparent 35%)",
          }}
        />

        <div
          className="float-shape medium animated"
          style={{
            right: 120,
            top: "40%",
            background:
              "radial-gradient(circle at 40% 40%, rgba(255,57,85,0.12), transparent 35%)",
          }}
        />

        <div
          className="float-shape small animated"
          style={{
            right: 200,
            top: "68%",
            background:
              "radial-gradient(circle at 50% 50%, rgba(197,40,58,0.08), transparent 35%)",
          }}
        />

        <div className="stat-column">
          <div className="stat-badge">Available • Internship 2026</div>
          <div className="stat-badge">Preferred: React · JavaScript</div>
          <div className="stat-badge">Focus: UI / UX · Responsive</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
