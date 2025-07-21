import './Blog.css'
import PageHeader from '../../components/PageHeader/PageHeader'
import Footer from '../../components/Footer/Footer'

const Blog = () => {
    return (
        <div> 
        <header>
        <PageHeader title={'Blog..'}/>
        </header>
        <div className="container">
        <section className="leftsection">
               <p>For services please contact in the below email.<br/> encourageat@gmail.com</p>
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
export default Blog;