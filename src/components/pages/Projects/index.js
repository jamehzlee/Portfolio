import './index.css';
import pokemon from '../../../assets/images/pokemon.png';
import rpg from '../../../assets/images/rpg.png';
import weather from '../../../assets/images/weather.png';
import blog from '../../../assets/images/blog.png';

const  Projects = () => {
  return (
        <div className='col projects col-12'>
          <div className='row projects-row'>
            <div className='col col-md-6'>
              <a href='https://jamehzlee.github.io/Pokemon-Data-Finder/'>
                <img src={pokemon} alt='Pokemon' className=''></img>
              </a>
            </div>

            <div className='col col-md-6'>
              <a href='https://bp-rpg-character-database.herokuapp.com/'>
                <img src={rpg} alt='RPG' className=''></img>
              </a>
            </div>
    
            <div className='col col-md-6'>
              <a href='https://jamehzlee.github.io/Weather-Dashboard/'>
                <img src={weather} alt='Weather' className=''></img>
              </a>
            </div>

            <div className='col col-md-6'>
              <a href='https://tech-blog-jlee.herokuapp.com/'>
                <img src={blog} alt='Tech Blog' className=''></img>
              </a>
            </div>
          </div>
        </div>
  );
}

export default Projects;
