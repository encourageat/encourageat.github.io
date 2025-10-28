import './NavBar.css'

import './NavBar.css';

const NavLinks = (props) => {
    return ( 
        <div>    
        <ul>
            <li onClick = {() =>props.isMobile && props.closeMobileMenu()}>
                <a href="/">Home</a>
            </li>
            <li onClick = {() =>props.isMobile && props.closeMobileMenu()}>
                <a href="/#/about">About</a>
            </li>
            <li onClick = {() =>props.isMobile && props.closeMobileMenu()}>
                <a href="/#/Training">Training</a>
            </li>
            <li onClick = {() =>props.isMobile && props.closeMobileMenu()}>
                <a href="/#/Blog">Blog</a>
            </li>
             <li onClick = {() =>props.isMobile && props.closeMobileMenu()}>
                <a href="/#/contact">Contact</a>
            </li>
        </ul>            </div>
        
      );    
}
export default NavLinks;

/*

 <li onClick = {() =>props.isMobile && props.closeMobileMenu()}>
                <a href="/#/about">About</a>
            </li>

                       <li onClick = {() =>props.isMobile && props.closeMobileMenu()}>
                <a href="/#/services">Services</a>
            </li>

/*


const NavLinks = (props) => {
    return ( 
        <div>    
        <ul>
            <li onClick = {() =>props.isMobile && props.closeMobileMenu()}>
                <a href="/">Home</a>
            </li>
            <li onClick = {() =>props.isMobile && props.closeMobileMenu()}>
                <a href="/about">About</a>
            </li>
            <li onClick = {() =>props.isMobile && props.closeMobileMenu()}>
                <a href="/services">Services</a>
            </li>
            <li onClick = {() =>props.isMobile && props.closeMobileMenu()}>
                <a href="/training">Training</a>
            </li>
            <li onClick = {() =>props.isMobile && props.closeMobileMenu()}>
                <a href="/blog">Blog</a>
            </li>
             <li onClick = {() =>props.isMobile && props.closeMobileMenu()}>
                <a href="/contact">Contact</a>
            </li>
        </ul>            </div>
        
      );    
}
export default NavLinks;
*/
