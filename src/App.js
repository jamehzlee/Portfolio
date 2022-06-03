import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { About, Projects, Contact } from './components/pages';

function App() {
  return (
    <Router basename='/Portfolio'>
      <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<About />} />
            <Route path='projects' element={<Projects />} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<About />} />
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
