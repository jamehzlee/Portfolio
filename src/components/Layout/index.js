import './index.css';
import Navi from '../Navbar';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
            <div className='row body-row'>
            <Navi />
            
            <Outlet />

            <Footer />
            </div>
    )
}

export default Layout;