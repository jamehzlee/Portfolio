import './index.css';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className="col header col-12">
            <div className='row header-row'>
                <div className='col text-start name'>
                    James Lee
                </div>
                <div className='col nav-col'>
                    <Navbar />
                </div>
            </div>
        </div>
    )
}

export default Header;