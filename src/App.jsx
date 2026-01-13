import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArtistsPage from './pages/ArtistsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <BackToTop />
      <div className="bg-black min-h-screen text-white font-sans selection:bg-dapper-gold selection:text-black flex flex-col overflow-x-hidden w-full">
        <Navbar />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/artists" element={<ArtistsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
