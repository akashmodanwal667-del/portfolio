import "./Skills.css";

function Skills({ skills }) {
    const categories = ["Frontend", "Backend", "Tools"];
    return (
        <section className="section skills" id="skills">
            <h2 className="section-title">Skills</h2>
            <p className="section-subtitle">
                The languages, frameworks, and tools I use to build projects.
            </p>
            <div className="skills-grid">
                {categories.map((category) => (
                    <div className="skill-group" key={category}>
                        <h3>{category}</h3>
                        <div className="skill-list">
                            {skills
                                .filter((skill) => skill.category === category)
                                .map((skill) => (
                                    <span className="skill-chip" key={skill._id}>
                                        {skill.name}
                                    </span>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;