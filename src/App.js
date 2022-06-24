import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { About, Projects } from './components/pages';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<About />} />
            <Route path='projects' element={<Projects />} />
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
