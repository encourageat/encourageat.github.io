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
    <div className="iam-consulting">

      <PageHeader title={'IAM & SSO Expert - OAuth 2.0, SAML - Keycloak'} />
            {/* ===== Consulting & Development ===== */}
      <div className="consulting-box">

        <h1>Keycloak Consultant & IAM Enterprise Solutions</h1>

        <p>As an expert <strong>IAM & Keycloak Consultant</strong>, I provide end-to-end customization, architecture design, and training services in Identity and Access Management (IAM),
  helping organizations design, implement, and secure modern authentication and authorization systems
  across cloud and on-premises environments.</p>

        <h3>Services Offered</h3>
        <ul>
          <li>IAM Architecture design and review</li>
          <li>Keycloak Consulting</li>
          <li>SSO, MFA, OAuth2/OIDC, SCIM implementations</li>
          <li>Multi-tenant SaaS apps setup</li>
          <li>Integrations Keycloak, Okta, Auth0 & other IDPs and SaaS apps</li>
          <li>Keycloak themes customization</li>
          <li>Custom authentication flows and token customization</li>
          <li>Custom SPI development</li>
          <li>CI/CD and Infrastructure as Code (Terraform)</li>
          <li>Corporate & Individual IAM Training. More details <a href="/iam-training" style={{ color: 'blue' }}>here.</a></li>
        </ul>

        <h3>Engagement Model</h3>
        <ul>
          <li>Freelance consulting</li>
          <li>Architecture design and reviews</li>
          <li>Short-term & Long-term projects</li>
          <li>SSO integrations</li>
          <li>Mentoring, Corporate Training</li>
          
        </ul>

        <Link to="/contact" className="enroll-btn">
          Get in Touch
        </Link>

      </div>
    
      <Footer />
    </div>
  )
}

export default Training

/*
   <a className="enroll-btn" href="mailto:encourageat@gmail.com?subject=Enrollment%20-%20IAM%20Beginner">
                Enroll Now
              </a>


<p><strong>UK Equivalent Time:</strong></p>
        <p>Weekdays: 3:30 AM – 6:00 PM (UK Time)</p>
        <p>Saturday: 1:30 AM – 11:30 AM (UK Time)</p>
*/