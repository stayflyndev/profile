import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppAppBar from './components/AppBar/AppBar';  // Your Navbar
import Home from './components/Home/Home';          // Your Home page
import ContactPage from './components/Contact/Contact';  // Your Contact page

function App() {
  return (
    <Router>  {/* Wrap your app with Router for routing */}
      <AppAppBar />  {/* Navbar will be rendered on all pages */}
      <Routes>
        {/* Define routes for the Home and Contact pages */}
        <Route path="/" element={<Home />} />  {/* Home page */}
        <Route path="/contact" element={<ContactPage />} />  {/* Contact page */}
      </Routes>
    </Router>
  );
}

export default App;
