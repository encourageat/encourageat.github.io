import { useState } from 'react'
import './Training.css'
import PageHeader from '../../components/PageHeader/PageHeader'
import Footer from '../../components/Footer/Footer'
import { Link } from "react-router-dom";

const Training = () => {

  const [openCourse, setOpenCourse] = useState(null)

  const toggleCourse = (course) => {
    setOpenCourse(openCourse === course ? null : course)
  }

  return (
    <div className="Training">

      <PageHeader title={'IAM & Keycloak Training Programs'} />

      {/* ===== Training Timing ===== */}
      <div className="timing-box">
        <h3>Training Timings</h3>
        <p><strong>Weekdays (IST):</strong> 9:00 AM – 11:30 PM (1- to 2-hour sessions)</p>
        <p><strong>Saturday (IST):</strong> 7:00 AM – 5:00 PM (Saturday only 2-hour sessions)</p>
        <p><strong>UK Equivalent Time:</strong></p>
        <p>Weekdays: 3:30 AM – 6:00 PM (UK Time)</p>
        <p>Saturday: 1:30 AM – 11:30 AM (UK Time)</p>
        <p><strong>Mode of Instruction:</strong> Online</p>
      </div>

      <div className="containertr">
        <p className="select-note"><strong>Select below for details:</strong></p>

        {/* ================= IAM Beginner ================= */}
        <section className="course-card">
          <div className="course-header" onClick={() => toggleCourse('iam')}>
            <h2>IAM – Beginner</h2>
            <span>{openCourse === 'iam' ? '−' : '+'}</span>
          </div>

          {openCourse === 'iam' && (
            <div className="course-content">

              <h4>Session 1 – Introduction to IAM</h4>
              <ul>
                <li>What is Identity?</li>
                <li>What is Access Management?</li>
                <li>Why IAM is Important</li>
                <li>Real-world IAM Use Cases</li>
              </ul>

              <h4>Session 2 – Authentication Fundamentals</h4>
              <ul>
                <li>Password-Based Authentication</li>
                <li>Multi-Factor Authentication (MFA)</li>
                <li>Biometric Authentication</li>
                <li>Single Sign-On (SSO)</li>
              </ul>

              <h4>Session 3 – Authorization Concepts</h4>
              <ul>
                <li>Role-Based Access Control (RBAC)</li>
                <li>Attribute-Based Access Control (ABAC)</li>
                <li>Principle of Least Privilege</li>
              </ul>

              <h4>Session 4 – IAM Protocols Overview</h4>
              <ul>
                <li>OAuth 2.0</li>
                <li>OpenID Connect (OIDC)</li>
                <li>SAML</li>
                <li>JWT</li>
              </ul>

              <h4>Session 5 – User Lifecycle Management</h4>
              <ul>
                <li>User Provisioning & De-Provisioning</li>
                <li>Password Policies</li>
                <li>Account Lockout Policies</li>
              </ul>

              <h4>Session 6 – IAM in Real-World Systems</h4>
              <ul>
                <li>IAM in Cloud Platforms</li>
                <li>Enterprise IAM</li>
                <li>Centralized Identity Systems</li>
                <li>Zero Trust Overview</li>
              </ul>

              <div className="pricing">
                <h4>Pricing</h4>
                <p><strong>India:</strong> ₹3,500 INR</p>
                <p><strong>Outside India:</strong> USD $65</p>
                <p><strong>Duration:</strong> 7 to 8 hours</p>
              </div>

              <Link 
                to="/contact" 
                className="enroll-btn"
              >
                Enroll Now
              </Link>

            </div>
          )}
        </section>


        {/* ================= Auth0 Intermediate ================= */}
        <section className="course-card">
          <div className="course-header" onClick={() => toggleCourse('auth0')}>
            <h2>Auth0 – Intermediate</h2>
            <span>{openCourse === 'auth0' ? '−' : '+'}</span>
          </div>

          {openCourse === 'auth0' && (
            <div className="course-content">
              <h4>Session 1 – IAM fundamentals</h4>
              <ul>
                <li>IAM Concepts</li>
                <li>Authentication and Authorization</li>
                <li>OAuth, OpenID Connect, JWT, SAML, SSO</li>
                <li>Token Structure & Validation</li>
              </ul>
              <h4>Session 2 – Auth0 fundamentals</h4>
              <ul>
                <li>Auth0 Architecture</li>
                <li>Tenant, Applications & APIs</li>
                <li>Connections - DB, Social, Enterprise</li>
                <li>Universal Login</li>
                <li>Auth0 Dashboard Walkthrough</li>
              </ul>

              <h4>Session 3 – Authentication Flows</h4>
              <ul>
                <li>Authorization Code + PKCE</li>
                <li>Client Credentials Flow</li>
                <li>ID Token vs Access Token</li>
                <li>Refresh Tokens</li>
              </ul>

              <h4>Session 4 – Application Integration</h4>
              <ul>
                <li>SPA Integration</li>
                <li>Backend API Protection</li>
                <li>RBAC in Auth0</li>
                <li>Session Management & Logout</li>
                <li>SSO Behavior</li>
              </ul>

              <h4>Session 5 – Identity Federation & Security</h4>
              <ul>
                <li>Social Login</li>
                <li>Enterprise Connections - SAML/OIDC</li>
                <li>SAML integrations with Okta or Keycloak</li>
                <li>MFA & Passkeys</li>
                <li>Security Best Practices</li>
              </ul>

              <h4>Session 6 – Extensibility</h4>
              <ul>
                <li>Actions & Triggers</li>
                <li>Custom Claims</li>
                <li>Hooks into Authentication Flow</li>
                <li>Real-world Customization Use Cases</li>
              </ul>
              <h4>Session 7 – DevOps & Automation</h4>
              <ul>
                <li>Auth0 Terraform Provider</li>
                <li>Deploy CLI</li>
                <li>CI/CD with GitHub Actions</li>
                <li>Environment Promotion Strategy</li>
                <li>Secrets Management</li>
              </ul>
              <h4>Session 8 – Observability and Troubleshooting</h4>
              <ul>
                <li>Logs & Monitoring</li>
                <li>Debugging Authentication Issues</li>
                <li>Token Inspection</li>
              </ul>
              <h4>Session 9 – Capstone Project</h4>
              <ul>
                <li>Building a production grade multi-app setup</li>
                <li>Full CI/CD Pipeline</li>
              </ul>

              <div className="pricing">
                <h4>Pricing</h4>
                <p><strong>India:</strong> ₹7,000 INR</p>
                <p><strong>Outside India:</strong> USD $110</p>
                <p><strong>Additional IAM Beginner Alumni Discount: ₹2,500 ($25)</strong></p>
                <p><strong>Duration:</strong> 15 to 20 hours</p>
              </div>

              <Link 
                    to="/contact" 
                    className="enroll-btn"
                  >
                    Enroll Now
              </Link>


            </div>
          )}
        </section>


        {/* ================= Keycloak Advanced ================= */}
        <section className="course-card">
          <div className="course-header" onClick={() => toggleCourse('keycloak')}>
            <h2>Keycloak – Advanced</h2>
            <span>{openCourse === 'keycloak' ? '−' : '+'}</span>
          </div>

          {openCourse === 'keycloak' && (
            <div className="course-content">

              <h4>Session 1 – IAM fundamentals & Keycloak Setup</h4>
              <ul>
                <li>IAM Overview</li>
                <li>OAuth, OIDC, JWT, SAML, SSO</li>
                <li>Keycloak overview</li>
                <li>Realms, Clients, Users, Roles</li>
                <li>Install Keycloak</li>
                <li>PostgreSQL Integration</li>
              </ul>

              <h4>Session 2 – Applications Integration</h4>
              <ul>
                <li>SPA Integration- PKCE</li>
                <li>Backend- Confidential clients</li>
                <li>Token handling & security</li>
                <li>Client Scopes and Roles</li>
                <li>LDAP Federation</li>
              </ul>
              <h4>Session 3 – Identity Federation & Security</h4>
              <ul>
                <li>LDAP/AD integration</li>
                <li>User Federation Strategies</li>
                <li>MFA and passkeys</li>
                <li>Security best practices</li>
              </ul>
              <h4>Session 4 – Customization & Extensibility</h4>
              <ul>
                <li>Custom Authentication Flows</li>
                <li>Token Customization</li>
                <li>Custom SPI Developement</li>
                <li>SCIM and Third-party extensions</li>
              </ul>
              <h4>Session 5 – Deployment & Scaling</h4>
              <ul>
                <li>Reverse Proxy with NGINX</li>
                <li>Docker & Kubernetes Deployment</li>
                <li>High Availability & Scaling Strategies</li>
              </ul>

              <h4>Session 6 – Advanced IAM & Observability</h4>
              <ul>
                <li>IDP Brokering: OIDC/SAML</li>
                <li>Social login, SAML and OIDC login with Auth0 or Okta</li>
                <li>Organization</li>
                <l>Themes</l>
                <li>Prometheus, Grafana Monitoring</li>
                <li>Logging & Troubleshooting</li>
              </ul>

              <h4>Session 7 – Configuration as Code & Automation</h4>
              <ul>
                <li>Realm Import/Export</li>
                <li>Terraform with Keycloak</li>
                <li>CI/CD with GitHub Actions</li>
                <li>Secrets Management Best Practices</li>
              </ul>
              <h4>Session 8 – Capstone Project</h4>
              <ul>
                <li>Building a production grade multi-app setup</li>
              </ul>

              <div className="pricing">
                <h4>Pricing</h4>
                <p><strong>India:</strong> ₹9,000 INR</p>
                <p><strong>Outside India:</strong> USD $140</p>
                <p><strong>Additional IAM Beginner Alumni Discount: ₹2500 ($25)</strong></p>
                <p><strong>Duration:</strong> 20 to 25 hours</p>
              </div>

              <Link 
                    to="/contact" 
                    className="enroll-btn"
                  >
                    Enroll Now
              </Link>


            </div>
          )}
        </section>
        

      </div>

      {/* ===== SEO Structured Data ===== */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "EncourageAt",
          "url": "https://www.encourageat.com",
          "hasCourse": [
            { "@type": "Course", "name": "IAM – Beginner" },
            { "@type": "Course", "name": "Auth0 – Intermediate" },
            { "@type": "Course", "name": "Keycloak – Advanced" }
          ]
        })}
      </script>
    

      <Footer />
    </div>
  )
}

export default Training

/*
   <a className="enroll-btn" href="mailto:encourageat@gmail.com?subject=Enrollment%20-%20IAM%20Beginner">
                Enroll Now
              </a>
*/