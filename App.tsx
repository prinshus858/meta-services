
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Packages from './pages/Packages';
import About from './pages/About';
import Contact from './pages/Contact';
import Animate from './pages/Animate';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 selection:bg-blue-500/30">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/animate" element={<Animate />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
