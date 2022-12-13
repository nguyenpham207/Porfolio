import React from "react";
import { Grid,Container,Card } from "semantic-ui-react";
import lux from "../pictures/lux-house.png";
import pet from "../pictures/pet-match.png";
import tea from "../pictures/tea-bar.png";
import "./main.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';


const Projects = () => {

  return (
    
    <div>
        
        
          
    <h1 className="project-head" id="projects">Projects</h1>
    <Container>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
    <MDBCard className="card">
      <MDBCardImage src={lux} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Lux-House</MDBCardTitle>
        <MDBCardText>
        Built backend API using Mongoose and Express and deployed using Heroku and Mongo Atlas. Retrieved information from this API to build a front end React app with full CRUD functionality. 
        </MDBCardText>
        <MDBBtn href='#'>
            <i id="git-click" class="devicon-github-original-wordmark colored"></i>
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard className="card">
      <MDBCardImage src={pet} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Pet-Match</MDBCardTitle>
        <MDBCardText>
        Fully functional coffee shop website with a lot of useful futures. Using Django and Python as backend and React framework for front end.         </MDBCardText>
        <MDBBtn href='#'>
            <i id="git-click" class="devicon-github-original-wordmark colored"></i>
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard className="card">
      <MDBCardImage className="image1" src={tea} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Tea-Bar</MDBCardTitle>
        <MDBCardText>
        Built utilizing Mongoose, Express, and React, and gained fluency in mitigating/resolving merge conflicts and workflow inefficiencies.
        </MDBCardText>
        <MDBBtn href='#'>
            <i id="git-click" class="devicon-github-original-wordmark colored"></i>
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </Container>   

</div>
  );
};

export default Projects;
