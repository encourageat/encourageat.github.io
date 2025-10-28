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
<p><h2>IAM Training</h2>

<h3>Keycloak</h3>

<p><strong>Target audience:</strong> Anyone interested in the Identity and Access Management (IAM) domain and Keycloak. Programming knowledge is preferred for some of the practical sessions <em>(Training session is conducted in English)</em></p>

<h4>Session 1 – Introduction &amp; Setup</h4>

<h5>Topics</h5>
<ul>
  <li>Introduction to Identity and Access Management (IAM)</li>
  <li>Overview of Keycloak and comparison with other IAM products in the market</li>
  <li>Understanding Single Sign-On (SSO)</li>
  <li>OAuth 2.0, OpenID Connect (OIDC), and JWT – overview of different grant types and when to use each</li>
</ul>

<h5>Practicals</h5>
<ul>
  <li>Install Keycloak using a Docker image</li>
  <li>Understanding multi-tenancy in Keycloak
    <ul>
      <li>Realms</li>
      <li>Organizations</li>
    </ul>
  </li>
  <li>Hands-on with the Keycloak Admin Console</li>
  <li>Connect Keycloak to a PostgreSQL database using Docker (with data persistence enabled)</li>
  <li>Install and configure pgAdmin</li>
  <li>Create realms, users, roles, and groups</li>
  <li>Create an OIDC client for a backend application</li>
  <li>Configure and access the backend application using Keycloak authentication</li>
</ul>

<h4>Session 2 – Applications, Authentication, and Federation</h4>

<h5>Topics &amp; Practicals</h5>
<ul>
  <li>Create an OIDC client for a Single Page Application (SPA)</li>
  <li>Configure and access the SPA with Keycloak authentication</li>
  <li>Understanding browser cookies and authentication flow</li>
  <li>Enable Multi-Factor Authentication (MFA)</li>
  <li>Explore Keycloak database schema using pgAdmin</li>
  <li>User Federation: Connect Keycloak to an LDAP directory and log in using LDAP user credentials</li>
</ul>

<h4>Session 3 – Customization and Deployment</h4>

<h5>Topics &amp; Practicals</h5>
<ul>
  <li>Customize Keycloak authentication flows</li>
  <li>Develop a custom Service Provider Interface (SPI) and integrate it with Keycloak</li>
  <li>Install and configure NGINX as a load balancer</li>
  <li>Assign a custom domain for Keycloak</li>
  <li>Host multiple Keycloak instances behind an NGINX load balancer</li>
  <li>Review Keycloak database sessions related to <code>jdbc_ping</code></li>
</ul>

<h4>Session 4 – Advanced Integration &amp; Observability</h4>

<h5>Topics &amp; Practicals</h5>
<ul>
  <li>Overview of SAML protocol</li>
  <li>Identity Provider (IDP) Brokering: Connect Keycloak with external IDPs</li>
  <li>Configure social logins using OIDC</li>
  <li><strong>Observability:</strong>
    <ul>
      <li>Enable and explore Keycloak observability features</li>
      <li>Demonstration of Keycloak running on Minikube with Prometheus scraping enabled</li>
    </ul>
  </li>
</ul>

<h4>Session 5 – Configuring Keycloak</h4>

<h5>Topics Covered</h5>
<ul>
  <li><strong>Realm Import and Export:</strong> Learn how to export existing Keycloak realm configurations and import them into another environment for easy replication or backup.</li>
  <li><strong>Configuration as Code with Terraform:</strong> Understand how to manage Keycloak configurations declaratively using Terraform — enabling version control, automation, and reproducible environment setups.</li>
</ul>

<h4>Takeaway</h4>
<p>By the end of this training, participants will gain a strong practical foundation in Keycloak — enabling them to confidently explore, configure, and extend its capabilities for real-world IAM use cases.</p>

<h4>Pre-requisites</h4>
<p>Docker must be installed on the participant’s laptop or PC.</p>

<hr/>

<p><strong>Contact:</strong> encourageat@gmail.com</p>
<p>Please mention your country of residence when reaching out.</p>
</p>
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

/*
<p><strong>Training Fee:</strong><br/>
Within India: ₹9000 INR<br/>
Outside India: USD $140 (for individuals)
</p>
*/