
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-black tracking-tighter text-white mb-6 block">
              META<span className="text-blue-500">SERVICES</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Websites & Content That Actually Sell. Based in Lucknow, India. Serving ambitious brands globally.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-blue-500 transition-colors"><i className="fa-brands fa-x-twitter text-xl"></i></a>
              <a href="#" className="text-slate-500 hover:text-blue-500 transition-colors"><i className="fa-brands fa-instagram text-xl"></i></a>
              <a href="#" className="text-slate-500 hover:text-blue-500 transition-colors"><i className="fa-brands fa-linkedin text-xl"></i></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Ad Creatives</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Pitch Decks</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Social Content</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link to="/packages" className="hover:text-blue-500 transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Request a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center space-x-3">
                <i className="fa-solid fa-envelope text-blue-500"></i>
                <span>prinshusaini999@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fa-solid fa-location-dot text-blue-500"></i>
                <span>Lucknow, Uttar Pradesh, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} META SERVICES. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
