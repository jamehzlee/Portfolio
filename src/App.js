import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { About, Projects, Contact, Resume } from './components/pages';

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Layout />} >
            <Route path='/' element={<About />} />
            <Route path='projects' element={<Projects />} />
            <Route path='contact' element={<Contact />} />
            <Route path='resume' element={<Resume />} />
          </Route>
      </Routes>
    </>
  );
}

export default App;
