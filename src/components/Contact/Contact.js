import './Contact.css'
import PageHeader from '../../components/PageHeader/PageHeader'
import Footer from '../../components/Footer/Footer'

const Contact = () => {
    return (
        <div> 
        <header>
        <PageHeader title={'Contact..'}/>
        </header>
        <div className="container">
        <section className="leftsection">
               <p>For services or any type of business collaboration, please contact me at the email below:<br/> <br/>encourageat@gmail.com <br/>
               <br/>Upon receiving your email, I will set up a free 15-minute call at a mutually convenient time to understand your requirements, and we can proceed further accordingly. <br></br>For training requirements, I can conduct the training at a mutually convenient time.</p>

        <br/>  
        </section>
        <section className="rightsection" style={{ 
            backgroundImage: `url(images/pinkflower.jpg)`
            }}>
            
        </section>
        </div>
        <Footer/>
        </div>
      );   
}
export default Contact;