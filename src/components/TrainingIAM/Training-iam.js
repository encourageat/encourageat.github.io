import { useState } from 'react'
import './Training-iam.css'
import PageHeader from '../../components/PageHeader/PageHeader'
import Footer from '../../components/Footer/Footer'
import { Link } from "react-router-dom";

const TrainingIAM = () => {

  const [openCourse, setOpenCourse] = useState(null)

  const toggleCourse = (course) => {
    setOpenCourse(openCourse === course ? null : course)
  }

  return (
    <div className="iam-training-programs">

      <PageHeader title={'IAM & Keycloak Training'} />
            {/* ===== Consulting & Development ===== */}

      <div className="iam-training">
        <h1 className="select-note">Hands-On Keycloak & IAM Training Programs</h1>

        <p className="select-note"><strong>Select below for details:</strong></p>

        {/* ================= IAM Beginner ================= */}
        <section className="course-card">
          <div className="course-header" onClick={() => toggleCourse('iam')}>
            <h2>IAM – Beginner (generic IAM fundamentals)</h2>
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

              <div display="false" className="pricing">
                <h4>Pricing</h4>
                <p><strong>India:</strong> ₹4500 INR</p>
                <p><strong>Outside India:</strong> USD $79</p>
                <p><strong>Duration:</strong> 6 hours</p>
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
        {/* ================= Keycloak IAM Beginner ================= */}
        <section className="course-card">
          <div className="course-header" onClick={() => toggleCourse('kcBeginner')}>
            <h2>Keycloak IAM – Beginner</h2>
            <span>{openCourse === 'kcBeginner' ? '−' : '+'}</span>
          </div>

          {openCourse === 'kcBeginner' && (
            <div className="course-content">

              <h4>Session 1 – IAM Fundamentals & Keycloak Introduction</h4>
              <ul>
                <li>Introduction to IAM</li>
                <li>OAuth 2.0, OIDC, JWT, SAML and SSO</li>
                <li>Keycloak Overview</li>
                <li>Realms, Clients, Users and Roles</li>
                <li>Standalone Keycloak Installation</li>
              </ul>

              <h4>Session 2 – Keycloak Installation & OAuth Foundations</h4>
              <ul>
                <li>Keycloak with Docker</li>
                <li>PostgreSQL Integration</li>
                <li>OAuth 2.0 Grant Types</li>
                <li>Client Credentials Flow using curl</li>
                <li>Accessing Admin REST APIs</li>
              </ul>

              <h4>Session 3 – OIDC Flows & Token Management</h4>
              <ul>
                <li>Authorization Code Flow</li>
                <li>Authorization Code with PKCE</li>
                <li>Scopes and Claims</li>
                <li>Access, ID and Refresh Tokens</li>
                <li>Protocol Mappers</li>
                <li>JWT Token Validation</li>
              </ul>

              <h4>Session 4 – Authentication Flows & MFA</h4>
              <ul>
                <li>Authentication Flows</li>
                <li>MFA Configuration</li>
                <li>Custom Authentication Flows</li>
                <li>OIDC Flow Demonstrations</li>
              </ul>

              <h4>Session 5 – Identity Federation & Social Login</h4>
              <ul>
                <li>Social Login</li>
                <li>Identity Provider Integration</li>
                <li>OIDC Identity Brokering</li>
              </ul>

              <div className="pricing">
                <h4>Pricing</h4>
                <p><strong>India:</strong> ₹6,500 INR</p>
                <p><strong>Outside India:</strong> USD $99</p>
                <p><strong>Duration:</strong> 8 hours</p>
              </div>

              <Link to="/contact" className="enroll-btn">
                Enroll Now
              </Link>

            </div>
          )}
        </section>
        {/* ================= Keycloak IAM Intermediate ================= */}
        <section className="course-card">
          <div className="course-header" onClick={() => toggleCourse('kcIntermediate')}>
            <h2>Keycloak IAM – Intermediate</h2>
            <span>{openCourse === 'kcIntermediate' ? '−' : '+'}</span>
          </div>

          {openCourse === 'kcIntermediate' && (
            <div className="course-content">

              <h4>Session 1 – SAML Integration & External Identity Providers</h4>
              <ul>
                <li>SAML-based SSO</li>
                <li>SAML Integration with Keycloak</li>
                <li>Auth0 and Okta as Identity Providers</li>
                <li>Identity Brokering</li>
              </ul>

              <h4>Session 2 – Organizations & Multi-Tenant IAM</h4>
              <ul>
                <li>Organizations Feature</li>
                <li>Multi-tenant IAM Concepts</li>
                <li>Organization-based Access Control</li>
                <li>Passkeys and passwordless authentication</li>
              </ul>

              <h4>Session 3 – User Lifecycle & Provisioning</h4>
              <ul>
                <li>Workflow Demonstrations</li>
                <li>SCIM Overview</li>
                <li>User Provisioning Concepts</li>
                <li>Realm Export and Import</li>
              </ul>

              <h4>Session 4 – High Availability & Load Balancing</h4>
              <ul>
                <li>NGINX Reverse Proxy</li>
                <li>Multiple Keycloak Instances</li>
                <li>Load Balancing</li>
                <li>High Availability Concepts</li>
              </ul>

              <h4>Session 5 – Federation & Enterprise Integration</h4>
              <ul>
                <li>JWT Bearer Grant Flow</li>
                <li>LDAP/AD Federation</li>
                <li>Federation Strategies</li>
                <li>Advanced REST API Usage</li>
              </ul>

              <div className="pricing">
                <h4>Pricing</h4>
                <p><strong>India:</strong> ₹8,500 INR</p>
                <p><strong>Outside India:</strong> USD $149</p>
                <p><strong>Duration:</strong> 12 to 14 hours</p>
              </div>

              <Link to="/contact" className="enroll-btn">
                Enroll Now
              </Link>

            </div>
          )}
        </section> 
        {/* ================= Keycloak IAM Advanced ================= */}
        <section className="course-card">
          <div className="course-header" onClick={() => toggleCourse('kcAdvanced')}>
            <h2>Keycloak IAM – Advanced</h2>
            <span>{openCourse === 'kcAdvanced' ? '−' : '+'}</span>
          </div>

          {openCourse === 'kcAdvanced' && (
            <div className="course-content">

              <h4>Session 1 – Infrastructure as Code with Terraform</h4>
              <ul>
                <li>Terraform Overview</li>
                <li>Infrastructure as Code Concepts</li>
                <li>Managing Keycloak using Terraform</li>
                <li>Automating Realms, Clients and Roles</li>
              </ul>

              <h4>Session 2 – Kubernetes Deployment & Production Architecture</h4>
              <ul>
                <li>Keycloak Deployment in Kubernetes</li>
                <li>Minikube and K3s</li>
                <li>Scaling Strategies</li>
                <li>Secrets Management</li>
              </ul>

              <h4>Session 3 – Observability, Monitoring & Troubleshooting</h4>
              <ul>
                <li>Observability Concepts</li>
                <li>Prometheus and Grafana</li>
                <li>Logging and Monitoring</li>
                <li>Troubleshooting Production Issues</li>
              </ul>

              <div className="pricing">
                <h4>Pricing</h4>
                <p><strong>India:</strong> ₹6,000 INR</p>
                <p><strong>Outside India:</strong> USD $99</p>
                <p><strong>Duration:</strong> 8 hours</p>
                <p>This is an upcoming course. As of now not available.</p>
              </div>

              <Link to="/contact" className="enroll-btn">
                Enroll Now
              </Link>

            </div>
          )}
        </section>
        {/* ================= Auth0 Intermediate ================= */}
        <section className="course-card">
          <div className="course-header" onClick={() => toggleCourse('auth0')}>
            <h2>Auth0 – Intermediate (optional/specialized)</h2>
            <span>{openCourse === 'auth0' ? '−' : '+'}</span>
          </div>

          {openCourse === 'auth0' && (
            <div className="course-content">
              <h4>Session 1 – IAM Fundamentals</h4>
              <ul>
                <li>IAM Concepts</li>
                <li>Authentication and Authorization</li>
                <li>OAuth, OpenID Connect, JWT, SAML, SSO</li>
                <li>Token Structure & Validation</li>
              </ul>
              <h4>Session 2 – Auth0 Fundamentals</h4>
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
                <p><strong>Outside India:</strong> USD $119</p>
                <p><strong>Duration:</strong> 12 hours</p>
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
          "@type": "IAM Training",
          "name": "EncourageAt",
          "url": "https://www.encourageat.com/iam-training",
          "hasCourse": [
            { "@type": "Course", "name": "IAM – Beginner" },
            { "@type": "Course", "name": "Keycloak IAM – Beginner" },
            { "@type": "Course", "name": "Keycloak IAM – Intermediate" },
            { "@type": "Course", "name": "Keycloak IAM – Advanced" },
            { "@type": "Course", "name": "Auth0 – Intermediate" }
          ]
        })}
      </script>
    
      <Footer />
    </div>
  )
}

export default TrainingIAM

/*
   <a className="enroll-btn" href="mailto:encourageat@gmail.com?subject=Enrollment%20-%20IAM%20Beginner">
                Enroll Now
              </a>


<p><strong>UK Equivalent Time:</strong></p>
        <p>Weekdays: 3:30 AM – 6:00 PM (UK Time)</p>
        <p>Saturday: 1:30 AM – 11:30 AM (UK Time)</p>
*/