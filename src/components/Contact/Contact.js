import './Contact.css'
import PageHeader from '../../components/PageHeader/PageHeader'
import pinkflower from '../../img/pinkflower.jpg'
import maldives from '../../img/maldives.jpg'
import Footer from '../../components/Footer/Footer'

const Contact = () => {
    return (
        <div> 
        <header>
        <PageHeader title={'Contact..'}/>
        </header>
        <div className="container">
        <section className="leftsection">
               <p>For services please contact in the below email.<br/> encourageat@gmail.com</p>
        <br/>  
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
export default Contact;