import './index.css';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap'

const Navbar = () => {

  return (
    <Nav variant='tabs' fill='true' className=''>
        {/* <NavDropdown> */}
        <Nav.Item>
          <Nav.Link 
            as={NavLink}
            to='/'
            className='about-link'
          >
            About
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link 
            as={NavLink}
            to='/projects'
            className='projects-link'
          >
            Projects
          </Nav.Link>
        </Nav.Item>
        
        <Nav.Item>
          <Nav.Link 
            as={NavLink}
            to='/contact'
            className='contact-link'
          >
            Contact Me
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link 
            as={NavLink}
            to='/resume'
            className='resume-link'
          >
            Resume
          </Nav.Link>
        </Nav.Item>
      {/* </NavDropdown> */}
    </Nav>
  );
}

export default Navbar;
