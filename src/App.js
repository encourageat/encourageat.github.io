import logo from './logo.svg';
import './App.css';

//Newly added 
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import { Route ,Link, Routes} from "react-router-dom";
import Services from './components/Services/Services'
 
//import { BrowserRouter as Router, Routes , Route, useParams } from 'react-router-dom';-old commented


import NavBar from './components/NavBar/NavBar'



import Contact from './components/Contact/Contact'
import Training from './components/Training/Training'

import About from './components/About/About'
import Blog from './components/Blog/Blog'
import Home from './components/Home/Home'

function App() {
  return (
    <BrowserRouter basename="/">
      <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/training' element={<Training/>} />
        <Route path='/blog' element={<Blog/>} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

/*
const App = () => {
  return (
     <div>
      <NavBar></NavBar>
      <Routes>
      <Route path="/about" exact element={<About/>}/>
      <Route path='/contact' element={<Contact/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/Training' element={<Training/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path="/" exact element={<Home/>}/>
      </Routes>
    </div>
  );
}

*/


export default App;
