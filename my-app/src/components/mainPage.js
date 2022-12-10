import React from "react";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import {useNavigate, Container} from 'react-router-dom'
import "./main.css";
import profile from "../sean-profile.png"

const Main = () => {

    // const navigate = useNavigate()

    return (
        <>
        <img className="main-picture" src= {profile} alt = "my image"></img>
        <h1 className="main-name">Sean Pham</h1>
        <div id="menu-line-div">
						<div id='ul-menu-line-div'>
							<button className='home-button' >Home</button>
							<button class='list-buttons' >Project</button>
							<button class='list-buttons' >Contact</button>
							<button class='list-buttons' >Resume</button>
						</div>
		</div>
        <div>
            <p className= "brand" >I am a former Graphic Designers student and Wine retailer who now works as a FullStack developer. 
                I have experience in those areas that provided me a strong skillset for customer service and teamwork. These skillsets allowed me to adapt to many difference environment.
            </p>
        </div>
      </>
    )
  }
export default Main