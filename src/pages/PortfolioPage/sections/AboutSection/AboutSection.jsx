import './AboutSection.css';

const AboutSection = ({ sectionRef }) => {
    
    return (
        <section className='portfolio-section dark-mode' id='about-section' ref={sectionRef}>
            <h2 className='section-title about-section-title'>About me</h2>
            <p className='section-description' id='about-section-description'>
                Hi, I'm Callum, a 20 year old self-taught Software Developer 
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
                <div className='about-section-skill' id='about-skill-python'>
                    <i class="devicon-python-plain"></i>
                </div>
            </div>

            <h3 className='section-title about-section-subtitle'>Frameworks + Libraries</h3>

            <h3 className='section-title about-section-subtitle'>Other Technologies</h3>

        </section>
    );
};

export default AboutSection;