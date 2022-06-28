import './index.css';
import NavBar from '../Navbar';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/system';

const Layout = () => {
    return (
        <div className='row body-row'>
            <NavBar />

            <Container>

                <Outlet />
                
            </Container>

            <Footer />
        </div>
    )
}

export default Layout;