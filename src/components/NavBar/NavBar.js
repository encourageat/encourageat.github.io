import './NavBar.css'
import Navigation from'./Navigation'
import MobileNavigation from './MobileNavigation'
import PageHeader from '../../components/PageHeader/PageHeader'


const NavBar = () => {
    return (
        <div className="NavBar"> 
            <div className="company-title">EncourageAt</div>
            <Navigation/>
            <MobileNavigation/> 
            <div className="contact-email">
                <img src="images/email.svg" alt="Email" className="email-icon" /> 
                encourageat@gmail.com
            </div>
        </div>
      );    
}
export default NavBar;