import './Contact.css'
import PageHeader from '../../components/PageHeader/PageHeader'
import pinkflower from '../../img/pinkflower.jpg'
import maldives from '../../img/maldives.jpg'
import Footer from '../../components/Footer/Footer'

const Contact = () => {
    return (
        <div className="Contact"> 
        <div>
            <PageHeader title={'Contact Details..'}/>
        </div>
        <div className="Contactdetails">
        <p>
            Email: 
            <br/>
            encourageat@gmail.com
        </p>
        <img src={pinkflower} alt="pinkflower image"></img>
        </div>
        <Footer/>
        </div>
      );   
}
export default Contact;