import './index.css';
import { IoNewspaperOutline} from 'react-icons/io5';
import { IoLogoGithub, IoLogoLinkedin} from 'react-icons/io';
import { IconContext } from 'react-icons/lib';
import resume from '../../assets/resume/James-Lee-Resume.pdf'

function Footer() {
  return (
      <div className='row footer'>
        <IconContext.Provider value={{ className:'react-icons', size: 45}} >
          <div className='col'>
            <a className='row' href='https://github.com/jamehzlee'><IoLogoGithub/></a>
          </div>
          <div className='col'>
            <a className='row' href='https://www.linkedin.com/in/thisjameslee/'><IoLogoLinkedin/></a>
          </div>
          <div className='col'>
            <a className='row' href={resume} download='James-Lee-Resume'><IoNewspaperOutline/></a>
          </div>
        </IconContext.Provider>
      </div>
  );
}

export default Footer;