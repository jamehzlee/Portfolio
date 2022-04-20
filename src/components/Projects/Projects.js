import React from 'react';
import pokemon from '../../assets/images/pokemon.png';
import rpg from '../../assets/images/rpg.png';
import weather from '../../assets/images/weather.png';
import blog from '../../assets/images/blog.png';
import './Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {Container, Row, Col} from 'react-bootstrap'

function Projects() {
  return (
    <section id='projects' className="">
      <h2>Projects</h2>
      <Container>
        <Row className='justify-content-center p-1'>
          <Col md='5' className='p-0 m-4'>
            <a href='https://jamehzlee.github.io/Pokemon-Data-Finder/'>
              <img src={pokemon} alt='Pokemon' className='img-fluid h-100'></img>
            </a>
          </Col>

          <Col md='5' className='p-0 m-4'>
            <a href='https://bp-rpg-character-database.herokuapp.com/'>
              <img src={rpg} alt='RPG' className='img-fluid h-100'></img>
            </a>
          </Col>
   
          <Col md='5' className='p-0 m-4'>
            <a href='https://jamehzlee.github.io/Weather-Dashboard/'>
              <img src={weather} alt='Weather' className='img-fluid h-100'></img>
            </a>
          </Col>

          <Col md='5' className='p-0 m-4'>
            <a href='https://tech-blog-jlee.herokuapp.com/'>
              <img src={blog} alt='Tech Blog' className='img-fluid h-100'></img>
            </a>
          </Col>
        </Row>

      </Container>
    </section>
  );
}

export default Projects;
