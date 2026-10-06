import "./Navbar.css";

function About() {
  return (
    <section className="section" id="about">
      <div className="container about-inner">

        {/* Left Side */}
        <div className="about-main">
          <h2 className="section-title">About Me</h2>

          <p className="about-text">
            I am a passionate MERN Stack Developer with a strong foundation
            in web development. I enjoy creating dynamic and responsive web
            applications that provide seamless user experiences. My expertise
            lies in building full-stack applications using MongoDB, Express.js,
            React, and Node.js. I am constantly learning and exploring new
            technologies to enhance my skills and stay up-to-date with industry
            trends.
          </p>

          <a
            href="#contact"
            className="btn btn-primary"
          >
            Download Resume
          </a>
        </div>

        {/* Right Side */}
        <ul className="about-facts">

          <li>
            <span className="fact-label">Location</span>
            <span>Varanasi, India</span>
          </li>

          <li>
            <span className="fact-label">Email</span>
            <a href="mailto:akashmodanwal@example.com">
              akashmodanwal@example.com
            </a>
          </li>

          <li>
            <span className="fact-label">GitHub</span>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              github.com/akashmodanwal
            </a>
          </li>

          <li>
            <span className="fact-label">LinkedIn</span>
            <a
              href="https://linkedin.com/in/akashmodanwal"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/akashmodanwal
            </a>
          </li>

        </ul>

      </div>
    </section>
  );
}

export default About;
