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
                
                I'm George V. Thomas, currently working as a Freelance Consultant on a Keycloak implementation project on AWS.
                
                <br/><br/>I have over two decades of IT experience and previously served in product and service-based MNCs in various full-time roles.<br/>

                 <br/>I have a passion for designing and implementing IAM and cloud-native solutions, with extensive experience in SSO, OAuth, OpenID Connect, SAML, among others. 
                <br/><br/>In the IAM domain, I have over 13 years of experience in enhancing an IAM product of Entrust, Canada (Entrust GetAccess)
                <br/><br/>
                Please contact me for your business requirements. <br/>For contact details click <a href="/#/contact" style={{ color: 'blue' }}>here</a>
                <br/><br/>I am open to full time or long term contract roles also.

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
