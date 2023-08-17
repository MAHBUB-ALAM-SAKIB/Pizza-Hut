import { useState } from 'react'
import './App.css';
import Navbar from "./component/navbar/Navbar";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from "./Pages/Home/Home"
import Menu from './Pages/menu/Menu';
import Footer from './component/footer/Footer';
import About from './Pages/about/About';
import Contact from './Pages/contact/Contact';

function App() {
 
return(
  <>
  <div className="App">
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" index element={<Home/>}></Route>
      <Route path="/menu"  index element={<Menu/>}></Route>
      <Route path="/aboutUs"  index element={<About/>}></Route>
      <Route path="/contactUs"  index element={<Contact/>}></Route>
    </Routes>
    <Footer/>
  </Router>
  </div>
  </>
)
 

}

export default App
