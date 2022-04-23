import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'
import './index.css';


const Navi = () => {

  return (
  <Navbar collapseOnSelect='true' expand="lg" variant='dark'>

    <Navbar.Brand className='name'>James Lee</Navbar.Brand>
    
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse>

      <Nav>
        <Nav.Link as={NavLink} to='/'>About</Nav.Link>

        <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>

        <Nav.Link as={NavLink} to="/contact">Contact Me</Nav.Link>

        <Nav.Link as={NavLink} to="/resume">Resume</Nav.Link>
      </Nav>

    </Navbar.Collapse>
  </Navbar>
  );
}

export default Navi;
