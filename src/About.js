import React from 'react'
import './About.css'
import {Avatar} from '@material-ui/core'
function About() {
    return (
        <div className="about" id="about">
            <div className="about__left">
          <Avatar style={{height:"130px",width:"130px",position:"sticky",marginLeft:"130px"}}></Avatar>
            </div>
            <div className="about__right">
                <div className="about__section">
              <h1>About Me</h1>
              <p>My Name is Akshat Lakshkar.I am a Java Developer.Currently I'm pusuing my</p>
              <p>B.Tech from I.G.E.C College,Sagar. </p>
              </div>
              <div className="contact__details">
                  <div className="contact__left">
               <h1>Contact Details</h1>
               <p>746,Chota Bazzar,</p>
               <p>Ghas-Mandi</p>
               <p>Gwalior-3</p>
               <p>akshatlakshkar.3@gmail.com</p>
               </div>
               <div className="contact__right">
               <i class="fa fa-download" aria-hidden="true"></i>  Download Resume
               </div>
              </div>
            </div>
        </div>
    )
}

export default About
