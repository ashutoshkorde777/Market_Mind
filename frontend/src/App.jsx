import React from 'react';
import './App.css'; // Import App CSS
import Sidebar from './sidebar.jsx'; // Import Sidebar
import Navbar from './Navbar.jsx'; // Import Navbar
import Home from './dashboard.jsx'; // Import Home component
import Report from './report.jsx'; // Import Report component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router components

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar /> {/* Include Sidebar */}
        <div className="flex-1">
          <Navbar /> {/* Include Navbar */}
          <div className="main-content"> {/* Add class for main content */}
            <Routes>
              <Route path="/dashboard" element={<Home />} />
              <Route path="/report" element={<Report />} />
              {/* Add other routes as needed */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
