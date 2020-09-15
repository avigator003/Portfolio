import React from 'react'
import './Home.css'
import Header from './Header'
import AnchorLink from 'react-anchor-link-smooth-scroll'
function Home() {
    return (
        <div  className="home" id="home">
            <Header></Header>
            <div className="myName">
                I 'm Akshat Lakshkar
             </div>
             <div className="details">
                 <p >My Heart Says for Java Development But When I see the Power </p>
                 <p className="second"> of React Js I becoame React Developer at @In my Dreams</p>
                 
                 <p className="first">#avigator003</p>
             </div>
             <div className="social__media">
               <i class="fa fa-facebook"></i>
               <i class="fa fa-linkedin"></i>
               <i class="fa fa-instagram"></i>
               <i class="fa fa-github"></i>
             </div>
             <div className="dropdown">
             <AnchorLink href="#about"><i class="fa fa-angle-down" id="down"></i></AnchorLink>
              </div>
        </div>
    )
}

export default Home
