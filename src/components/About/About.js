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
                            I’m <strong>George V. Thomas</strong>, the maintainer of this website. 
                            I bring over two decades of experience in the IT industry, having worked 
                            in both product-based and service-based multinational organizations.
                        </p>

                        <p>
                            I specialize in designing secure, scalable Identity and Access Management (IAM) 
                            and cloud-native solutions. My expertise includes SSO, OAuth 2.0, OpenID Connect (OIDC), 
                            SAML, and modern authentication frameworks.
                        </p>

                        <p>
                            I have nearly 14 years of experience contributing to IAM products at Entrust, Canada, 
                            including Level 3 technical support. Currently, I work with a managed Keycloak IAM provider 
                            on a contract role for certain IAM assignments.   
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