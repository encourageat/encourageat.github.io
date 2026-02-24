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
               <p>Please contact me at the following email id for your training requirements with name of the course you wnat to enroll and the desired time:<br/> <br/>encourageat@gmail.com <br/>
               <br/>For consulting requirements also you can use the above email. <br></br>Consulting charge is hourly based with slots of 30 minutes or 1 hour</p>

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