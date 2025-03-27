import './Services.css'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import PageHeader from '../../components/PageHeader/PageHeader'

const Services = () => {
    return (
        <div> 
        <header>
            <PageHeader title={'Services..'}/>
        </header>
        <div className="container">
        <section className="homesection" style={{ 
            backgroundImage: `url(images/freelance-development.jpg)`
            }}>
            <div className="card">
                <h2>Freelance Development</h2>
                <p>Offering software development services in Java, Identity & Access Management and cloud solutions. Providing high-quality, scalable applications tailored to client needs.</p>
            </div>
        </section>
        <section className="homesection" style={{ 
            backgroundImage: `url('images/consulting.jpg')` 
            }}>
            <div className="card">
                <h2>Consulting</h2>
                <p>Helping businesses implement IAM solutions, and improve security infrastructure with expert guidance.</p>
            </div>
        </section>

        <section className="homesection" style={{ 
            backgroundImage: `url('images/teaching.jpg')` 
            }}>    
            <div className="card">
                <h2>Training</h2>
                <p>Providing online training sessions on IAM,Keycloak,Java, and software development best practices, tailored for professionals and organizations.</p>
            </div>
        </section>
        </div>
        <Footer/>     
        </div>
      );    
}
export default Services;
