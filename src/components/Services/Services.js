import './Services.css'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import PageHeader from '../../components/PageHeader/PageHeader'

const Services = () => {
    return (
        <div> 
        
            <PageHeader title={'Services'}/>
    
        <div className="container">
        <section className="homesection" style={{ 
            backgroundImage: `url('images/consulting.jpg')` 
            }}>
            <div className="card">
                <h2>IAM Consulting</h2>
                <p>Helping businesses implement Identity and Access Management (IAM) solutions on the cloud, on-premise and improve their security infrastructure with expert guidance, including IAM Architecture design and review, assistance with SSO, authentication, authorization, MFA and custom solutions tailored for each business use case.</p>
            </div>
        </section>
         <section className="homesection" style={{ 
            backgroundImage: `url('images/teaching.jpg')` 
            }}>    
            <div className="card">
                <h2>IAM Training</h2>
                <p>Providing online training workshop on IAM fundamentals,Keycloak & Auth0 covering SSO, OAuth 2, OpenID Connect, SAML, user federation, customization, MFA, social login, identity brokering and many more. For more details click <a href="/" style={{ color: 'blue' }}>here</a></p>
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
