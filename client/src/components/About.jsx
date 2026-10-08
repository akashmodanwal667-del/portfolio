import "./About.css";

function About({ skills }) {
    return (
        <section className="section" id="about">
            <div className="container about-inner">
                <div className="about-main">
                    <h2 className="section-title">About Me</h2>
                    <p className="about-text">
                        I am a passionate MERN Stack Developer with a strong foundation
                        in web development. I enjoy creating dynamic and responsive web
                        applications that provide seamless user experiences.
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Download Resume
                    </a>
                </div>

                <ul className="about-facts">
                    <li>
                        <span className="fact-label">Location</span>
                        <span>Varanasi, India</span>
                    </li>
                    <li>
                        <span className="fact-label">Email</span>
                        <a href="mailto:akashmodanwal667@example.com">
                            akashmodanwal667@example.com
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default About;