import React from 'react';
import { IoNewspaperOutline} from 'react-icons/io5';
import { IoLogoGithub, IoLogoLinkedin} from 'react-icons/io';
import { IconContext } from 'react-icons/lib';
import './Footer.css';

function Footer() {
  return (
    <footer className="row justify-content-center">
      <IconContext.Provider value={{ size: 45, color: 'white' }}>
        <div className='col'>
          <a href='https://github.com/jamehzlee'><IoLogoGithub/></a>
        </div>
        <div className='col'>
          <a href='https://www.linkedin.com/in/thisjameslee/'><IoLogoLinkedin/></a>
        </div>
        <div className='col'>
          <a href='#resume'><IoNewspaperOutline/></a>
        </div>
      </IconContext.Provider>
    </footer>
  );
}

export default Footer;
