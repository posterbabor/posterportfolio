import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "React.js",
      icon: <FaReact />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <p className="section-subtitle">02 / TOOLKIT</p>

        <h2 className="section-title">Tools I use to build</h2>

        <p className="skills-description">
          A practical foundation across interface development, collaboration,
          and shipping small projects from idea to browser.
        </p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card reveal" key={skill.name}>
              <div className="skill-icon">{skill.icon}</div>

              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
