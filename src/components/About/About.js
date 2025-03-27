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
                
                I'm George V. Thomas, an experienced Software Developer specializing in Identity and Access Management (IAM) and Java technologies. I have over 23 years of experience in Software companies mainly in development.
                <br/> <br/>
        Domain Experience:<br/> Identity and Access Management, Payment etc.
        <br/><br/>

            </div>
        </section>
       

        <section className="rightsection" style={{ 
            backgroundImage: `url(images/freelance-development.jpg)`
            }}>
            
        </section>

       
        </div>
        <Footer/>
        </div>
      );    
}
export default About;
