import logo from './logo.svg';
import './App.css';
import { Route ,Link, Routes} from "react-router-dom";
//import { Routes, Route } from 'react-router-dom'  
//import { BrowserRouter as Router, Routes , Route, useParams } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import Services from './components/Services/Services'
import Training from './components/Training/Training'
import About from './components/About/About'



const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
          <Route path='/services' element={<Services/>} />
          <Route path='/training' element={<Training/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path="/about" exact element={<About/>}/>
          <Route path="/" exact element={<Services/>}/>
      </Routes>
    </div>
  );
}


export default App;
