import './index.css';
import pokemon from '../../../assets/images/pokemon.png';
import rpg from '../../../assets/images/rpg.png';
import weather from '../../../assets/images/weather.png';
import freelancer from '../../../assets/images/freelancer.png';

const  Projects = () => {
  return (
        <div className='col projects col-12'>
          <div className='row projects-row'>
            <div className='col col-6'>
              <a href='https://freelancer-jl.herokuapp.com/' target='_blank' rel='noreferrer'>
                <img src={freelancer} alt='Freelancer'></img>
              </a>
            </div>
            
            <div className='col col-6'>
              <a href='https://bp-rpg-character-database.herokuapp.com/' target='_blank' rel='noreferrer'>
                <img src={rpg} alt='RPG'></img>
              </a>
            </div>
            
            <div className='col col-6'>
              <a href='https://jamehzlee.github.io/Pokemon-Data-Finder/' target='_blank' rel='noreferrer'>
                <img src={pokemon} alt='Pokemon'></img>
              </a>
            </div>
    
            <div className='col col-6'>
              <a href='https://jamehzlee.github.io/Weather-Dashboard/' target='_blank' rel='noreferrer'>
                <img src={weather} alt='Weather'></img>
              </a>
            </div>

            
          </div>
        </div>
  );
}

export default Projects;