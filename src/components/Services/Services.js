import './Services.css'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import PageHeader from '../../components/PageHeader/PageHeader'

const Services = () => {
    return (
        <div> 
        <header>
            <PageHeader title={'Services..'}/>
        </header>
        <div className="container">
        <section className="homesection" style={{ 
            backgroundImage: `url('images/consulting.jpg')` 
            }}>
            <div className="card">
                <h2>IAM Consulting</h2>
                <p>Helping businesses implement Identity and Access Management (IAM) solutions on the cloud, and improve their security infrastructure with expert guidance, including assistance with SSO, authentication, authorization, and custom solutions tailored for each business use case.</p>
            </div>
        </section>
         <section className="homesection" style={{ 
            backgroundImage: `url('images/teaching.jpg')` 
            }}>    
            <div className="card">
                <h2>IAM Training</h2>
                <p>Providing individual as well as corporate online training sessions on IAM, Auth0 and Keycloak covering IAM from fundamentals, SSO, OAuth, OpenID Connect, SAML, user federation, customization, MFA, social login and more. For more details click <a href="/" style={{ color: 'blue' }}>here</a></p>
            </div>
        </section>
         <section className="homesection" style={{ 
            backgroundImage: `url(images/freelance-development.jpg)`
            }}>
            <div className="card">
                <h2>Freelance Development</h2>
                <p>Offering software development services in Java, Spring Boot, Spring Security, Go, Node.js, and React JS, with a primary focus on Identity & Access Management and cloud solutions. Providing high-quality, scalable applications tailored to clients’ needs.</p>
            </div>
        </section>
        </div>
        <Footer/>     
        </div>
      );    
}
export default Services;
