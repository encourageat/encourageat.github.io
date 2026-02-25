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
        <p><strong>Weekdays (IST):</strong> 9:00 AM – 11:30 PM (1-hour sessions)</p>
        <p><strong>Saturday (IST):</strong> 7:00 AM – 5:00 PM (Saturday only 2-hour sessions)</p>
        <p><strong>UK Equivalent Time:</strong></p>
        <p>Weekdays: 3:30 AM – 6:00 PM (UK Time)</p>
        <p>Saturday: 1:30 AM – 11:30 AM (UK Time)</p>
        <p><strong>Mode of Instruction:</strong> Online</p>
      </div>

      <div className="containertr">

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
                <p><strong>India:</strong> ₹5,000 INR</p>
                <p><strong>Outside India:</strong> USD $80</p>
                <p><strong>Duration:</strong> 10 to 15 hours</p>
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

              <h4>Session 1 – Introduction to Auth0</h4>
              <ul>
                <li>Auth0 Architecture</li>
                <li>Tenant, Applications & APIs</li>
                <li>Universal Login</li>
              </ul>

              <h4>Session 2 – Authentication with Auth0</h4>
              <ul>
                <li>Authorization Code Flow</li>
                <li>ID Token vs Access Token</li>
                <li>Refresh Tokens</li>
              </ul>

              <h4>Session 3 – Application Integration</h4>
              <ul>
                <li>SPA Integration</li>
                <li>Backend API Protection</li>
                <li>RBAC in Auth0</li>
              </ul>

              <h4>Session 4 – Advanced Features</h4>
              <ul>
                <li>Social Login</li>
                <li>Enterprise Connections</li>
                <li>MFA & Passwordless</li>
              </ul>

              <h4>Session 5 – Extensibility</h4>
              <ul>
                <li>Rules & Actions</li>
                <li>Custom Claims</li>
              </ul>

              <div className="pricing">
                <h4>Pricing</h4>
                <p><strong>India:</strong> ₹7,000 INR</p>
                <p><strong>Outside India:</strong> USD $110</p>
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

              <h4>Session 1 – Introduction & Setup</h4>
              <ul>
                <li>IAM Overview</li>
                <li>SSO, OAuth 2.0, OIDC, JWT</li>
                <li>Install Keycloak with Docker</li>
                <li>PostgreSQL Integration</li>
              </ul>

              <h4>Session 2 – Applications & Federation</h4>
              <ul>
                <li>SPA & Backend Integration</li>
                <li>MFA</li>
                <li>LDAP Federation</li>
              </ul>

              <h4>Session 3 – Customization & Deployment</h4>
              <ul>
                <li>Custom Authentication Flows</li>
                <li>SPI Development</li>
                <li>NGINX Load Balancing</li>
              </ul>

              <h4>Session 4 – Advanced Integration & Observability</h4>
              <ul>
                <li>SAML</li>
                <li>IDP Brokering</li>
                <li>Prometheus Observability</li>
              </ul>

              <h4>Session 5 – Configuration as Code</h4>
              <ul>
                <li>Realm Import/Export</li>
                <li>Terraform Automation</li>
              </ul>

              <div className="pricing">
                <h4>Pricing</h4>
                <p><strong>India:</strong> ₹8,500 INR</p>
                <p><strong>Outside India:</strong> USD $135</p>
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