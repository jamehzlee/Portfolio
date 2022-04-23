import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'
import './index.css';


const Navi = () => {

  return (
  <Navbar expand="lg" variant='dark' className=''>
  <Navbar.Brand className='name'>James Lee</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse>
    <Nav >
      <Nav.Link as={NavLink} to='/'>About</Nav.Link>
      <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
      <Nav.Link as={NavLink} to="#pricing">Resume</Nav.Link>
      <Nav.Link as={NavLink} to="#pricing">Contact Me</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default Navi;
