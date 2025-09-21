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
               <p>Some of my blogs are available at <a href="https://medium.com/@encourageat" style={{ color: 'blue' }}>this</a> medium account. Please note that its an external site<br/></p>
        <br/>  
        </section>
        <section className="rightsection" style={{ 
            backgroundImage: `url(images/blog.jpg)`
            }}>
            
        </section>
        </div>
        <Footer/>
        </div>
      );   
}
export default Blog;