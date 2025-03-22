import './About.css'
import PageHeader from '../../components/PageHeader/PageHeader'
import pinkflower from '../../img/pinkflower.jpg'
import flowerswhite from '../../img/flowerswhite.jpg'
import maldives from '../../img/maldives.jpg'
import Footer from '../../components/Footer/Footer'


const About = () => {


    return (
        <div className="Home"> 
        <div>
            <PageHeader title={'About..'}/>
        </div>      
        <div className="Homedetails">
        <p>
       
        I'm George V. Thomas an experienced Software Developer specializing in Identity and Access Management (IAM) and Java technologies. I have over 23 years of experience in Software companies.
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
        <img src={maldives} alt="maldives image"></img>
        </div>
        <Footer/>
        </div>
      );    
}
export default About;
/*
      <div>
            <PageHeader title={'About..'}/>
        </div>
        */