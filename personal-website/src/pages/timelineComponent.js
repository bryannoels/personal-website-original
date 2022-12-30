import React, { useEffect, useState } from 'react';
import './style.css';

export default function TimelineComponent(props) {
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
        <div className="timeline-page-component">
          { props.component.component.map(key=>(
              <div className = {offset >= key.offset*vheight ? 'scroll' : 'noscroll'}>
                <div className = "timeline-page-component-header">
                    <p className = "timeline-page-component-header-title">{vwidth>900?key.title:key.title2}</p>
                    <p className = "timeline-page-component-header-date">{key.date}</p>
                </div>
                <ul className = "timeline-page-component-details">
                    {key.details.map((text,id) => (
                    <li>{key.details[id]}</li>
                    ))}
                </ul>
              </div>
          ))}
      </div>
    );
  }