import React from "react";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import "./main.css";
import profile from "../pictures/sean-profile.png"
import {about} from "../porfolio";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';






const Main = () => {

const {name, role, resume, description, github, linkedin}= about
    // const navigate = useNavigate()

    return (
    
    <div id="home" className="background2">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
        <div>
        <h3 className="edit_name2">
        <ui className="nav-bar1"><a href="#home">SeanP</a></ui>
        <ui className="nav-bar"><a href="#projects">Projects</a></ui>
        <ui className="nav-bar"><a href="#skills">Skills</a></ui>
        
        </h3>    
        </div>      
                <h1 className="main-name"> Hello World , I am <span className="edit_name">{name}</span></h1>
                 <img id="main-picture" src= {profile} alt = "my image"></img>
                <h2 className="role">{role}</h2>
                <p id= "brand" > {description}</p>
        
        <div className="info">
            <a className="box" href = {resume}>
                <span type= 'button' className="btn-outline">Resume</span>
            </a>
            <a className= "git" href = {github}>
                <GitHubIcon className="git2"/>
            </a>
            <a href = {linkedin}>
                <LinkedInIcon/>
            </a>

        </div>

    </div>
    )
  }
export default Main