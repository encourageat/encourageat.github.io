import './Home.css'
import PageHeader from '../../components/PageHeader/PageHeader'
import pinkflower from '../../img/pinkflower.jpg'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <div className="Home"> 
        <div>
            <PageHeader title={'Welcome..'}/>
        </div>      
        <div className="Homedetails">
        <p>
        <h2>About..</h2>
        I am George V. Thomas, a graduate engineer with over 23 years of experience with software companies mainly in development. 
        <br/>
        <br/> 
        I'm an experienced Software Architect specializing in Identity and Access Management (IAM) and Java technologies.
        <br/> 
        <br/>
        Domain Experience:<br/> Identity and Access Management, Payment etc.
        <br/>
        <br/>
        Skills:
        <br/>
        Java, Spring Boot, Spring Security, Spring Batch, Spring Data JPA, Spring Cloud, OAuth 2, SAML 2, OpenID Connect, IAM, Keycloak, Docker, Microservices, REST, SOAP, RabbitMQ, CI/CD pipeline, Jenkins,PostgreSQL, LDAP, Microsoft Azure, C++, JavaScript, Okta, React JS, Agile methodologies, Swagger, Git etc.
        
        <br/>
        <br/>Email: encourageat@gmail.com
        </p>
        <img src={pinkflower} alt="pink flower image"></img>
        </div>
        <Footer/>
        </div>
      );    
}
export default Home;