import './HomeSection.css';

const HomeSection = ({ sectionRef }) => {
    
    return (
        <section className='portfolio-section light-mode' id='home-section' ref={sectionRef}>
            <div id='home-section-content'>
                <h1 className='section-title' id='home-section-title'>Hi, I'm Callum Burgoyne 👋</h1>          
            </div>
        </section>
    );
};

export default HomeSection;