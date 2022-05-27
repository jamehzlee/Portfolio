import './index.css';
import NavBar from '../Navbar';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='row body-row'>
            <NavBar />
            
            <Outlet />

            <Footer />
        </div>
    )
}

export default Layout;