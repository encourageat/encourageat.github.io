import "./Home.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Home = () => {

    return (

        <div className="home">

            {/* Hero Section */}

            <section className="hero">

                <div className="hero-left">

                    <h1>
                        Identity & Access Management Solutions
                    </h1>

                    <p className="hero-subtitle">

                        Helping organizations design, implement and modernize
                        secure Identity & Access Management (IAM) solutions
                        across cloud, hybrid and on-premises environments.

                    </p>

                    <p>

                        Specialized in <strong>Keycloak</strong>,
                        OAuth 2.0,
                        OpenID Connect (OIDC),
                        SAML,
                        SCIM,
                        Multi-Factor Authentication (MFA),
                        Identity Federation,
                        Single Sign-On (SSO),
                        Kubernetes,
                        Docker,
                        Terraform and enterprise identity integrations.

                    </p>

                    <div className="hero-buttons">

                        <Link to="/contact" className="primary-btn">
                            Get in Touch
                        </Link>

                        <Link to="/iam-training" className="secondary-btn">
                            IAM Training
                        </Link>

                    </div>

                </div>

                <div className="hero-right">

                    <div className="contact-card">

                        <h2>Contact</h2>

                        <p>

                            <strong>Email</strong>

                            <br />

                            <a href="mailto:encourageat@gmail.com">
                                encourageat@gmail.com
                            </a>

                        </p>

                        <p>

                            <strong>LinkedIn</strong>

                            <br />

                            <a
                                href="https://www.linkedin.com/in/george-v-thomas-79487887/"
                                target="_blank"
                                rel="noopener noreferrer">

                                George V. Thomas

                            </a>

                        </p>

                        <p>

                            Available for

                        </p>

                        <ul>

                            <li>IAM Consulting</li>

                            <li>Keycloak Consulting</li>

                            <li>Architecture Reviews</li>

                            <li>Enterprise SSO</li>

                            <li>Freelance Projects</li>

                            <li>Corporate Training</li>

                        </ul>

                    </div>

                </div>

            </section>

            {/* Services */}

            <section className="services">

                <h2>Services</h2>

                <div className="service-grid">

                    <div className="service-card">

                        <h3>IAM Architecture</h3>

                        <p>

                            Enterprise IAM architecture, design reviews,
                            cloud migration and security best practices.

                        </p>

                    </div>

                    <div className="service-card">

                        <h3>Keycloak Consulting</h3>

                        <p>

                            Installation, customization, SPI development,
                            themes, clustering and production deployments.

                        </p>

                    </div>

                    <div className="service-card">

                        <h3>Identity Integrations</h3>

                        <p>

                            OAuth2, OIDC, SAML, SCIM,
                            Active Directory,
                            LDAP,
                            Okta,
                            Auth0,
                            Microsoft Entra ID,
                            SiteMinder and enterprise applications.

                        </p>

                    </div>

                    <div className="service-card">

                        <h3>Cloud & DevOps</h3>

                        <p>

                            Docker,
                            Kubernetes,
                            Helm,
                            Terraform,
                            Azure,
                            AWS,
                            CI/CD and observability.

                        </p>

                    </div>

                </div>

            </section>

            {/* Why Me */}

            <section className="why-me">

                <h2>Why Work With Me?</h2>

                <ul>

                    <li>23+ years of software development experience</li>

                    <li>Identity & Access Management specialist</li>

                    <li>Strong expertise in Keycloak</li>

                    <li>Cloud and on-premises deployments</li>

                    <li>Freelance and contract consulting</li>

                    <li>Corporate and individual mentoring</li>

                </ul>

            </section>

            <Footer />

        </div>

    );

}

export default Home;