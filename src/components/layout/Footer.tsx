import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0F1A20] text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-['Montserrat'] font-semibold mb-4">SIPR</h3>
            <p className="font-['Baskerville'] text-gray-300">
              Advancing policy research and fostering evidence-based decision-making for a better tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-['Montserrat'] font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-['Baskerville']">
              <li><Link to="/research" className="hover:text-[#8c1616] transition-colors">Research</Link></li>
              <li><Link to="/publications" className="hover:text-[#8c1616] transition-colors">Publications</Link></li>
              <li><Link to="/events" className="hover:text-[#8c1616] transition-colors">Events</Link></li>
              <li><Link to="/news" className="hover:text-[#8c1616] transition-colors">News</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-['Montserrat'] font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 font-['Baskerville']">
              <li className="flex items-center gap-2">
                <MapPin size={18} />
                <span>123 Research Avenue, City, Country</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <span>+1 234 567 8900</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <span>contact@sipr.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-['Montserrat'] font-semibold mb-4">Newsletter</h3>
            <p className="font-['Baskerville'] text-gray-300 mb-4">
              Stay updated with our latest research and insights.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded focus:outline-none focus:ring-2 focus:ring-[#8c1616] focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#8c1616] hover:bg-[#7a1313] transition-colors rounded font-['Montserrat']"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center font-['Baskerville'] text-gray-300">
          <p>&copy; {new Date().getFullYear()} Sankhya Institute for Policy and Research. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;