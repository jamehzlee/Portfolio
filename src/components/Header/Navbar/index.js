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
            exact='true' 
            activeclassname='active'
            to='/'
            className='about-link col'
          >
            About
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link 
            as={NavLink}
            exact='true' 
            activeclassname='active'
            to='/projects'
            className='projects-link col'
          >
            Projects
          </Nav.Link>
        </Nav.Item>
        
        <Nav.Item>
          <Nav.Link 
            as={NavLink}
            exact='true' 
            activeclassname='active'
            to='/contact'
            className='contact-link col'
          >
            Contact Me
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link 
            as={NavLink}
            exact='true' 
            activeclassname='active'
            to='/resume'
            className='resume-link col'
          >
            Resume
          </Nav.Link>
        </Nav.Item>
      {/* </NavDropdown> */}
    </Nav>
  );
}

export default Navbar;
