import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone } from 'lucide-react';
import logo from '../assets/logo/logo.jpg'

const PRIMARY = "#18069e";
const SECONDARY = "#e6aa05";

const Footer: React.FC = () => (
  <footer style={{ background: PRIMARY }} className="text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-2">
          <div className="flex items-center space-x-3 mb-4">
            <img
              src={logo}
              alt="JBCCI Logo"
              className="h-10 w-10 rounded-full object-cover border-2 border-white shadow"
              style={{ background: "#fff" }}
            />
            <div>
              <span className="text-xl font-bold" style={{ color: SECONDARY }}>JBCCI</span>
              <div className="text-sm" style={{ color: "#eee" }}>Japan-Bangladesh Chamber of Commerce and Industry</div>
            </div>
          </div>
          <p className="mb-6 max-w-md" style={{ color: "#eee" }}>
            日本バングラデシュ商工会議所 - Promoting trade and investment between Japan and Bangladesh for mutual economic prosperity since our establishment.
          </p>
          <div className="flex space-x-4">
            <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
              <Globe className="h-5 w-5" style={{ color: SECONDARY }} />
            </button>
            <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
              <Mail className="h-5 w-5" style={{ color: SECONDARY }} />
            </button>
            <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
              <Phone className="h-5 w-5" style={{ color: SECONDARY }} />
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4" style={{ color: SECONDARY }}>Quick Links</h3>
          <ul className="space-y-2" style={{ color: "#eee" }}>
            <li><Link to="/about-us" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
            <li><Link to="/membership" className="hover:text-yellow-400 transition-colors">Membership</Link></li>
            <li><Link to="/news-&-events" className="hover:text-yellow-400 transition-colors">News & Events</Link></li>
            <li><Link to="/contact-us" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4" style={{ color: SECONDARY }}>Resources</h3>
          <ul className="space-y-2" style={{ color: "#eee" }}>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Business Directory</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Trade Opportunities</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Investment Guide</a></li>
            <li><Link to="/publications" className="hover:text-yellow-400 transition-colors">Publications</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#e6aa05] mt-12 pt-8 flex flex-col md:flex-row justify-center items-center">
        <p className="text-sm text-center" style={{ color: "#eee" }}>
          Japan Bangladesh Chamber of Commerce || Powered by Techknowgram Limited
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;