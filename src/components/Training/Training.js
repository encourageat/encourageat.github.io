import './Training.css'
import PageHeader from '../../components/PageHeader/PageHeader'
import pinkflower from '../../img/pinkflower.jpg'
import bird from '../../img/bird.jpg'
import Footer from '../../components/Footer/Footer'

const Training = () => {
    return (
        <div className="Training"> 
        <div>
            <PageHeader title={'Training Details..'}/>
        </div>      
        <div className="Trainingdetails">
        <p>
        <h2>Course Details</h2> <h2>Identity and Access Management with main focus on Keycloak</h2>
       Part -1  <br/>
       Pre-requisite: none <br/>
       Topics in brief:
        <br/>What is IAM?<br/>Single Sign-On(SSO)<br/>
        Encryption, Hashing and Encoding, <br/>
        SAML 2, OAuth 2 and OpenID Connect in detail <br/>
        Multifactor authentication <br/>
        Conditional authentication<br/>
        JWT Token, Digital Signature. <br/>
        4 A's of IAM, RBAC and ABAC<br/>
        Practical Session
        <br/>
        Part -1 Duration - 6 hours
        <br/> <br/>
        Part -2 (advanced level) <br/>
        For more details, time slots and to enroll please contact in the mail id encourageat@gmail.com
        </p>
        <img src={bird} alt="bird image"></img>
        </div>
        <Footer/>
        </div>
      );    
}
export default Training;