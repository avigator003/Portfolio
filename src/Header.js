import React, { useState, useEffect } from 'react'
import './Header.css'

import AnchorLink from 'react-anchor-link-smooth-scroll'

function Header() {
const [color,setColor]=useState("")
const[disp,setDisplay]=useState("")
const[link,setLink]=useState("#F05F07")

     const listenScrollEvent = e => {
        if (window.scrollY >650) {
          setColor("#313131")
        } else {
            setColor("")
        }
        
        if (window.scrollY >30 && window.scrollY <650) {
            setDisplay("none")
        }
            else{
                setDisplay("inline")
                }


    }
    
    useEffect(()=>{
         window.addEventListener("scroll",listenScrollEvent)
    },[])
      
    return (
        <div className="header">
            <div className="header__container" style={{backgroundColor:color,display:disp}}>
             <ul className="header__details" >
             <li><AnchorLink href="#home"  className="link" ><a href="#home">Home</a></AnchorLink></li>
             <li><AnchorLink href="#about"   className="link"><a href="#about">About</a></AnchorLink></li>
             <li><AnchorLink href="#resume"   className="link"><a href="#resume"> Resume</a></AnchorLink></li>
             <li><AnchorLink href="#works"   className="link"><a href="#works">Works</a></AnchorLink></li>
             <li><AnchorLink href="#testimonals"  className="link"><a href="#testimonals">Testimonals</a></AnchorLink></li>
             <li><AnchorLink href="#contact"   className="link"><a href="#contact">Contact</a></AnchorLink></li>
             </ul>
             </div>

        </div>
    )
}

export default Header
