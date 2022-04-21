import './index.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className="row header">
            <div className='col name-col'>
                <Link to='/' className='row text-start'>James Lee</Link>
            </div>
            <div className='col nav-col'>
                <Navbar />
            </div>
        </div>
    )
}

export default Header;