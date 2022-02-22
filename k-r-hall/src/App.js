import React, { Component } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  
  render(){

    return (
      <Router>
    <div className="App">
     
      
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Portfolio" element={<Portfolio/>} />
        <Route path="/Contact" element={<Contact/>} />
        
      </Routes>
      <Footer />
      
    </div>
    </Router>
    );
  }
  
}

export default App;
    

    
      
      
