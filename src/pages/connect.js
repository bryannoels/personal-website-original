import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './style.css';

export default function MainPage() {
  const [offset, setOffset ] = useState(0);
  const vheight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  const vwidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
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
      <header className = {offset >= (vwidth>900?2.55:1.5)*vheight ? 'scroll connect-page' : 'noscroll connect-page'}>
        <p className = "connect-page-title">
          Let's Connect!
        </p>
        <div className = "connect-page-logos">
            <a href = "https://www.linkedin.com/in/bryannoelsalindeho/" target = "_blank" rel = "noreferrer">
                <FontAwesomeIcon icon={faLinkedin} color="white" className = "connect-page-logo"/>
            </a>
            <a href = "https://github.com/bryannoels" target = "_blank" rel = "noreferrer">
                <FontAwesomeIcon icon={faSquareGithub} color="white" className = "connect-page-logo"/>
            </a>
            <a href = "mailto:BSALINDE001@e.ntu.edu.sg" target = "_blank" rel = "noreferrer">
                <FontAwesomeIcon icon={faEnvelope} color="white" className = "connect-page-logo"/>
            </a>
        </div>
      </header>
    </div>
  );
}