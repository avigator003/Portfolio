import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Resume from './Resume';
import MyWorks from './MyWorks';
import Testimonal from './Testimonal';
import Footer from "./Footer"

function App() {
  return (
    <div className="app">
      
    <Home></Home>
    <About></About>
    <Resume></Resume>
    <MyWorks></MyWorks>
    <Testimonal></Testimonal>
    <Contact></Contact>
    <Footer></Footer>


    </div>
  );
}

export default App;
