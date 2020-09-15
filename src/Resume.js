import React from 'react'
import "./Resume.css"
import { LinearProgress } from '@material-ui/core';

function Resume() {
    return (
        <div className="resume" id="resume">
            <div className="education">
                <div className="education__title">
            <h2>Education </h2>
            <h1></h1>
            </div>

            <div className="education__details">
                <h1>Indira Gandhi Engineering College</h1>
                <p>B.Tech in Information Technology</p>
                <p>Graduated on 2021</p>
            </div>
            </div>
            <hr style={{width:"900px",borderTop:"1px solid #E8E8E8"}}/>
            <div className="education">
                <div className="education__title">
            <h2>Trainings </h2>
            <h1></h1>
            </div>

            <div className="education__details">
                <h1>Java Training</h1>
                <p>Infotech Private Limited</p>
                <p>Duration (2 Months)</p>
                <h1>Spring And Hibernate Training</h1>
                <p>Universal Private Limited</p>
                <p>Duration (2 Months)</p>
            </div>
            </div>
            <hr style={{width:"900px",borderTop:"1px solid #E8E8E8"}}/>
         
            <div className="education">
                <div className="education__title">
            <h2>Skills </h2>
            <h1 style={{width: "60px"}}></h1>
            </div>

            <div className="education__details">
                 <h1 style={{fontSize:"20px"}}>Java</h1>
                 <LinearProgress variant="determinate" value={80} style={{height:"40px",width:"800px"}} color="primary"/>
                 <h1 style={{fontSize:"20px"}}>Spring MVC Framework</h1>
                 <LinearProgress variant="determinate" value={80} style={{height:"40px",width:"800px"}} color="primary"/>
                 <h1 style={{fontSize:"20px"}}>Spring Boot</h1>
                 <LinearProgress variant="determinate" value={80} style={{height:"40px",width:"800px"}} color="primary"/>
                 <h1 style={{fontSize:"20px"}}>Hibernate</h1>
                 <LinearProgress variant="determinate" value={70} style={{height:"40px",width:"800px"}} color="primary"/>
                 <h1 style={{fontSize:"20px"}}>React Js</h1>
                 <LinearProgress variant="determinate" value={30} style={{height:"40px",width:"800px"}} color="primary"/>
                 
                 </div>
            </div>
        </div>
    )
}

export default Resume
