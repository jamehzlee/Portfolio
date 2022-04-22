import './index.css';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className="row header">
            <div className='col text-start name'>
                James Lee
            </div>
            <div className='col nav-col'>
                <Navbar />
            </div>
        </div>
    )
}

export default Header;