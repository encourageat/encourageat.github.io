import logo from './logo.svg';
import './App.css';
import { Route ,Link, Routes} from "react-router-dom";
import Services from './components/Services/Services'
//import { Routes, Route } from 'react-router-dom'  
//import { BrowserRouter as Router, Routes , Route, useParams } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar'
/*
import Home from './components/Home/Home'
import Blog from './components/Blog/Blog'
*/

import Contact from './components/Contact/Contact'
//import Training from './components/Training/Training'

import About from './components/About/About'


const App = () => {
  return (
     <div>
      <NavBar></NavBar>
      <Routes>
      <Route path="/about" exact element={<About/>}/>
      <Route path='/contact' element={<Contact/>} />
          <Route path="/" exact element={<Services/>}/>
      </Routes>
    </div>
  );
}


/*

 <NavBar/>
          <Route path='/services' element={<Services/>} />
          <Route path='/training' element={<Training/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path="/about" exact element={<About/>}/>
          */

export default App;
