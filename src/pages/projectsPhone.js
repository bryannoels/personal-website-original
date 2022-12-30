import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { projectsInPhone } from './constants';
import './style.css';

export default function ProjectsPhone() {
  const [offset, setOffset ] = useState(0);
  const vheight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  useEffect(() =>{
      const handleScroll = event => {
        console.log(window.scrollY);
        setOffset(window.scrollY);
      }
      window.addEventListener('scroll',handleScroll);
      return () => {
        window.removeEventListener('scroll',handleScroll);
      };
  },[]);
  return (
    <div className="App">
      <header className = {offset >= 1.2*vheight ? 'scroll projects-page-phone' : 'noscroll projects-page-phone'}>
        <div className = "projects-page-box-phone" >
          <p className = "projects-page-title-phone">Projects</p>
          <Carousel> 
            {projectsInPhone.map(project =>(
                <Carousel.Item >
                    <div className="project-cards-phone">
                    <div className="project-card-phone">
                        <a href = {project.url} target = "_blank" rel = "noreferrer">
                           <img src = {project.image} alt = {project.title} className="project-card-image-phone"/>
                        </a>
                        <div className="project-card-description-phone">
                          <a href = {project.url} className="project-card-text-phone" target = "_blank" rel = "noreferrer">{project.title}</a>
                        </div>
                    </div>
                    </div>
                </Carousel.Item>
            ))}
          </Carousel>    
        </div>
      </header>
    </div>
  );
}