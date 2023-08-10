import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './comments/c1'; // Import your HomePage component
import ContactPage from './comments/c2'; // Import your ContactPage component

function App() {
  return (
    <Router>
      <nav>
        
        <ul>
          <li>
            <Link to="/c1">Home Page</Link>
          </li>
          <li>
            <Link to="/c2">Contact Page</Link>
          </li>
        </ul>
       
      </nav>

      <Routes>
        <Route path="/c1" element={<HomePage />} />
        <Route path="/c2" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}



export default App;
