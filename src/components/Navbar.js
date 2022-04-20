import React from 'react';
import './Navbar.css';

function Navbar() {

  // const []

  return (
    <nav className="navbar navbar-expand-lg justify-content-between ">
      <h2 className='mx-4'>James Lee</h2>
      <ul className='nav'>
        <li className='nav-item'><a href="#about" className=''>About</a></li>
        <li className='nav-item'><a href="#projects" className=''>Projects</a></li>
        <li className='nav-item'><a href="#contact" className=''>Contact Me</a></li>
        <li className='nav-item'><a href="#resume" className=''>Resume</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
