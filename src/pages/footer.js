import React, { useEffect, useState } from 'react';
import './style.css';

export default function Footer() {
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
      <header className = {offset >= (vwidth>900?3.1:1.68)*vheight ? 'scroll footer-page' : 'noscroll footer-page'}>
        <p>&#169; Bryan Noel Salindeho 2022</p>
      </header>
    </div>
  );
}