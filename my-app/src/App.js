import React from 'react';
import "./index.css";
import Main from './components/mainPage';
import Skill from './components/skills';
import {useNavigate} from 'react-router-dom'
import {FrontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Projects from './components/project';
import Skills from './components/skills';

function App() {
  return (
  <div className='background2'>
    <Main/>
    <Projects/>
    <Skills/>
  </div>
  );
}

export default App;
