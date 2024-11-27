import './HomeSection.css';

const HomeSection = ({ sectionRef }) => {
    
    return (
        <section className='portfolio-section light-mode' id='home-section' ref={sectionRef}>
            <div id='home-section-content'>
                <h1 className='section-title' id='home-section-title'>Hi, I'm Callum Burgoyne 👋</h1>  

                <div id='home-section-socials-wrapper'>
                    <a href='https://github.com/CallumB04' target='_blank'>
                        <i className='home-section-socials fab fa-github'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/callum-burgoyne-1b411a324' target='_blank'>
                        <i className='home-section-socials fab fa-linkedin'></i>
                    </a>
                    <a href='https://instagram.com/calbgyn' target='_blank'>
                        <i className='home-section-socials fab fa-instagram'></i>
                    </a>
                    <a href='mailto:burgoynecallum04@gmail.com' target='_blank'>
                        <i className='home-section-socials fa fa-envelope'></i>
                    </a>
                </div>     
            </div>
        </section>
    );
};

export default HomeSection;