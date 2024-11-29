import './AboutSection.css';

const AboutSection = ({ sectionRef }) => {

    // storing skills in 2D arrays, <skill, hover text, devicon class>
    // automatically maps to JSX in respective sections
    // for non devicon icons, arrays with have length of 2 <skill/hover text, img url>
    const skillsLanguages = [
        ["python", "python", "python"], 
        ["html", "html", "html5"], 
        ["css", "css", "css3"],
        ["cpp", "c\+\+", "cplusplus"],
        ["js", "javascript", "javascript"]];
    const skillsFworksAndLibs = [
        ["react", "react", "react"],
        ["sfml", "SFML.svg"]
    ];
    const skillsOther = [
        ["git", "git", "git"],
        ["linux", "linux", "linux"],
        ["docker", "docker", "docker"],
        ["sass", "sass", "sass"]
    ];
    
    return (
        <section className='portfolio-section dark-mode' id='about-section' ref={sectionRef}>
            <h2 className='section-title about-section-title'>About me</h2>
            <p className='section-description' id='about-section-description'>
                Hi, I'm Callum, a <strong>20 year old</strong> self-taught Software Developer 
                from <strong>Kent, United Kingdom</strong>. I'm passionate about creating 
                efficient software, with experience in <strong>Web Development</strong>
                , <strong>Game Development</strong>, and <strong>Backend Systems</strong>. 
                I'm currently seeking a <strong>Level 4 Apprenticeship</strong> in any 
                area of Software Development, and eager to bring my skills and passion 
                for learning to a collaborative work environment!
            </p>

            <h2 className='section-title about-section-title'>Tech Stack</h2>

            <h3 className='section-title about-section-subtitle'>Languages</h3>
            <div className='about-section-skills-wrapper'>
                {skillsLanguages.map((skill) => {
                    return skill.length === 3 ? (
                        <div key={skill[0]} className='about-section-skill' id={`about-skill-${skill[0]}`}>
                            <i className={`devicon-${skill[2]}-plain`}></i>
                            <style>{`
                                #about-skill-${skill[0]}::after {
                                    content: "${skill[1]}";
                                }`}
                            </style>
                        </div>
                    )
                    : (
                        <div key={skill[0]} className='about-section-skill non-devicon-skill' id={`about-skill-${skill[0]}`}>
                            <img src={`../../../../assets/skill-icons/${skill[1]}`} className='non-devicon-icon' />
                            <style>{`
                                #about-skill-${skill[0]}::after {
                                    content: "${skill[0]}";
                                }`}
                            </style>
                        </div>
                    )
                } )}
            </div>

            <h3 className='section-title about-section-subtitle'>Frameworks + Libraries</h3>
            <div className='about-section-skills-wrapper'>
                {skillsFworksAndLibs.map((skill) => {
                    return skill.length === 3 ? (
                        <div key={skill[0]} className='about-section-skill' id={`about-skill-${skill[0]}`}>
                            <i className={`devicon-${skill[2]}-plain`}></i>
                            <style>{`
                                #about-skill-${skill[0]}::after {
                                    content: "${skill[1]}";
                                }`}
                            </style>
                        </div>
                    )
                    : (
                        <div key={skill[0]} className='about-section-skill non-devicon-skill' id={`about-skill-${skill[0]}`}>
                            <img src={`/assets/skill-icons/${skill[1]}`} className='non-devicon-icon' />
                            <style>{`
                                #about-skill-${skill[0]}::after {
                                    content: "${skill[0]}";
                                }`}
                            </style>
                        </div>
                    )
                } )}
            </div>

            <h3 className='section-title about-section-subtitle'>Other Technologies</h3>
            <div className='about-section-skills-wrapper'>
                {skillsOther.map((skill) => {
                    return skill.length === 3 ? (
                        <div key={skill[0]} className='about-section-skill' id={`about-skill-${skill[0]}`}>
                            <i className={`devicon-${skill[2]}-plain`}></i>
                            <style>{`
                                #about-skill-${skill[0]}::after {
                                    content: "${skill[1]}";
                                }`}
                            </style>
                        </div>
                    )
                    : (
                        <div key={skill[0]} className='about-section-skill non-devicon-skill' id={`about-skill-${skill[0]}`}>
                            <img src={`../../../../assets/skill-icons/${skill[1]}`} className='non-devicon-icon' />
                            <style>{`
                                #about-skill-${skill[0]}::after {
                                    content: "${skill[0]}";
                                }`}
                            </style>
                        </div>
                    )
                } )}
            </div>

        </section>
    );
};

export default AboutSection;