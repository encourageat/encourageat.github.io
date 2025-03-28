import './Training.css'
import PageHeader from '../../components/PageHeader/PageHeader'
import Footer from '../../components/Footer/Footer'

const Training = () => {
    return (
        <div className="Training"> 
        <div>
            <PageHeader title={'Training Details..'}/>
        </div>      
        <div className="containertr">
        <section 
  className="lefttrsection" 
  
> 
        <p>
        <h2>Course Details</h2><h2>Part 1</h2> <h2>Identity and Access Management - (IAM) from basics</h2>
        IAM Training Outline (Identity & Access Management)<br/>
Introduction to IAM<br/>
What is Identity and Access Management (IAM)?<br/>
Why IAM is critical for security and compliance<br/>
Key IAM challenges and best practices<br/><br/>

IAM Core Concepts<br/>
Identification, Authentication, Authorization (IAA) model<br/>
<br/>
Authentication Methods:
<br/>
Password-based authentication
<br/>
Multi-Factor Authentication (MFA)
<br/>
Biometrics, Smart Cards, and Certificates
<br/>
Authorization Models:
<br/>
Role-Based Access Control (RBAC)
<br/>
Attribute-Based Access Control (ABAC)
<br/>
Policy-Based Access Control (PBAC)
<br/>
Single Sign-On (SSO) & Federation
<br/>
What is SSO and how it works
<br/>
<br/>
Identity Federation with SAML, OIDC<br/>
Common OIDC grant types and common SAML bindings<br/>
Encoding, Encryption and Hashing<br/>
JWT token - opaque and non opaque tokend<br/>
Digital signature<dr/>
<br/>
IAM in Cloud & Enterprise Security<br/>
Zero Trust Security Model<br/>

Privileged Access Management (PAM)<br/>
<br/>

IAM Implementation with Keycloak<br/>
Introduction to IAM in Keycloak<br/>

Setting up a basic IAM system using <br/>

Hands-on Labs / Demos <br/>
Lab 1: Setting up basic IAM policies<br/>
Lab 2: Configuring OAuth 2.0 and OpenID Connect<br/>
Lab 3: Enabling MFA for users<br/>
</p>  
</section> 
<section 
  className="righttrsection" 
 
> 
<p>Part 2 - IAM using Keycloak in more depth<br/><br/>
For details and to enroll, please send email to encourageat@gmail.com</p> <br/>
</section>
<section 
  className="righttrsection" 
  style={{ backgroundColor: "white" }}
> 
<p></p> 
</section>
         
        </div>
        <Footer/>
        </div>
      );    
}
export default Training;