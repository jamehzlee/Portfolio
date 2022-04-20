import React from 'react';
import './Section.css';
import profile from '../assets/images/profile.png'

function About() {
  return (
    <section id='about' className="row justify-content-center">
      <h2>About Me</h2>
      <div className='row justify-content-center'>
        <div className='col-md-3 '>
          <img src={profile} alt ='Profile' className='img-fluid p-3'></img>
        </div>
        <div className='col-md-6 align-self-center'>
          <p>
          I am a Full Stack Developer who learned the MERN stack at the Rutgers University Coding Bootcamp.
          In just a few months I have already learned so much and am excited for what I will learn for years to come.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
