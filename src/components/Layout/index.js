import './index.css';
import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='container'>
            <div className='row body-row'>
            <Header />
            
            <div className='content'>
            <Outlet />
            </div>

            <Footer />
            </div>
        </div>
    )
}

export default Layout;