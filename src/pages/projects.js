import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { projects } from './constants';
import './style.css';

export default function Projects() {
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
      <header className = {offset >= 1.45*vheight ? 'scroll projects-page' : 'noscroll projects-page'}>
        <div className = "projects-page-box" >
          <p className = "projects-page-title">Projects</p>
          <Carousel> 
            {projects.map(item =>(
                <Carousel.Item >
                  <div className="project-cards">
                    {item.component.map(project => (
                        <div className="project-card">
                            <a href = {project.url} target = "_blank" rel = "noreferrer">
                              <img src = {project.image} alt = {project.title} className="project-card-image"/>
                            </a>
                            <div className="project-card-description">
                              <a href = {project.url} className="project-card-text" target = "_blank" rel = "noreferrer">{project.title}</a>
                            </div>
                        </div>
                    ))}
                    </div>
                </Carousel.Item>
            ))}
          </Carousel>    
        </div>
      </header>
    </div>
  );
}