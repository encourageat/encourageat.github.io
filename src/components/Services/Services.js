import './Services.css'
import PageHeader from '../../components/PageHeader/PageHeader'
import pinkflower from '../../img/pinkflower.jpg'
import beatch from '../../img/beatch.jpg'
import Footer from '../../components/Footer/Footer'

const Services = () => {
    return (
        <div className="Services"> 
        <div>
            <PageHeader title={'Welcome..'}/>
        </div>      
        <div className="Servicesdetails">
        <p>
        <h2>Services..</h2>
        Offers freelance development, consulting and online training.<br/><br/> Training is  on Identity and Access Management- IAM with focus on Keycloak.
        To know more on it click <a href="/#/training/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}> here.</a>

        <br/><br/>Other services include foundational training on Java and Spring Boot.<br/>
        <br/>Hourly rate - US $10 (Rs 800 within India)<br/>
        <br/>
        For more details, please contact in the below email <br/>
        <br/>Email: encourageat@gmail.com
        </p>
        <img src={beatch} alt="beatch image"></img>
        </div>
        <Footer/>
        </div>
      );    
}
export default Services;