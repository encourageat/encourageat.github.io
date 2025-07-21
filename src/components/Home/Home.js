import './Home.css'

import PageHeader from '../../components/PageHeader/PageHeader'

import Footer from '../../components/Footer/Footer'

//  <PageHeader title={'About..'}/>
const Home = () => {


    return (
        <div> 
        <header>
        <PageHeader title={'Keycloak Solutions'}/>
        </header>
        <div className="container">
        <section className="leftsection">
            <div>
               <h1>Keycloak Consultant</h1>
  <p>
    I'm George V. Thomas, an independent Software Consultant with a primary focus on Identity and Access Management (IAM) solutions using <b>Keycloak</b>. 
    I offer services as Keycloak consultant, trainer, and freelance developer with a focus on Identity and Access Management Domain and cloud solutions.
    <br/><br/>
    I will be happy to assist you with IAM solutions on cloud (primary focus on AWS), training or development requirements. 
    <br/><br/>
    For more details on services, please go to the Services menu or click <a href="/#/services" style={{ color: 'blue' }}>here</a>

  </p>
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
export default Home;
