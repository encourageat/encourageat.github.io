import './About.css'
import PageHeader from '../../components/PageHeader/PageHeader'
import Footer from '../../components/Footer/Footer'

const About = () => {
    return (
        <div> 
        
            <PageHeader title={'About'} />
            
            <div className="about-container">
                
                <section className="about-left">
                    <div className="about-card">

                        <h2>About Me</h2>

                        <p>
                         Hello, I’m George V. Thomas. I help organizations simplify and secure their digital identity infrastructure. With over 20 years of experience in global tech companies—including 13+ years specialized in product engineering and Level 3 support for Entrust (Canada)—I bring deep expertise in IAM domain.
                        </p>
                        <p>
                            I am an expert in SSO, OAuth 2.0, OIDC, and SAML. Alongside my independent consulting work, I am currently partnered with a premier managed Keycloak provider to deliver specific IAM services.
                        </p>
                        
                        <div className="linkedin-section">
                            <span>LinkedIn profile:</span>
                            <a 
                                href="https://www.linkedin.com/in/george-v-thomas-79487887/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/images/linkedin.png" alt="LinkedIn"/>
                            </a>
                        </div>

                    </div>
                </section>

                <section 
                    className="about-right"
                    style={{ backgroundImage: `url(images/about.jpg)` }}
                >
                </section>

            </div>

            <Footer/>
        </div>
    );    
}

export default About;