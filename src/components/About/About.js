import './About.css'
import PageHeader from '../../components/PageHeader/PageHeader'

import Footer from '../../components/Footer/Footer'

//  <PageHeader title={'About..'}/>
const About = () => {


    return (
        <div> 
        <header>
        <PageHeader title={'About..'}/>
        </header>
        <div className="container">
        <section className="leftsection">
            <div>
                  I’m George V. Thomas, the maintainer of this website. I bring over two decades of experience in the IT industry, having worked in both product-based and service-based multinational organizations in various full-time roles.<br/><br/>

I am passionate about sharing knowledge and designing secure, scalable Identity and Access Management (IAM) and cloud-native solutions. My expertise includes Single Sign-On (SSO), OAuth 2.0, OpenID Connect (OIDC), SAML, and modern authentication and authorization frameworks.<br/><br/>

In the IAM domain, I have nearly 14 years of experience contributing to and enhancing an IAM product at Entrust, Canada, including extensive Level 3 technical support. I currently work with a managed Keycloak IAM provider on a contract role and also have prior IAM consulting experience.<br/><br/>

I offer both one-to-one and group training programs tailored to professionals and organizations.<br/>       
                <br/>For contact details click <a href="/#/contact" style={{ color: 'blue' }}>here</a>
                <br/>

      <br/>
        <br/><br/>

            </div>
        </section>
       

        <section className="rightsection" style={{ 
            backgroundImage: `url(images/about.jpg)`
            }}>
            
        </section>

       
        </div>
        <Footer/>
        </div>
      );    
}
export default About;
