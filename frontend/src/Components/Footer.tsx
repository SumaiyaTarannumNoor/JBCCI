import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Globe, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-2">
          <div className="flex items-center space-x-3 mb-4">
            <Building2 className="h-8 w-8 text-red-400" />
            <div>
              <span className="text-xl font-bold">JBCCI</span>
              <div className="text-sm text-gray-400">Japan-Bangladesh Chamber of Commerce and Industry</div>
            </div>
          </div>
          <p className="text-gray-400 mb-6 max-w-md">
            日本バングラデシュ商工会議所 - Promoting trade and investment between Japan and Bangladesh for mutual economic prosperity since our establishment.
          </p>
          <div className="flex space-x-4">
            <button className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <Globe className="h-5 w-5" />
            </button>
            <button className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <Mail className="h-5 w-5" />
            </button>
            <button className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <Phone className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/membership" className="hover:text-white transition-colors">Membership</Link></li>
            <li><Link to="/news-&-events" className="hover:text-white transition-colors">News & Events</Link></li>
            <li><Link to="/contact-us" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Business Directory</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Trade Opportunities</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Investment Guide</a></li>
            <li><Link to="/publications" className="hover:text-white transition-colors">Publications</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">
          © 2024 Japan-Bangladesh Chamber of Commerce and Industry. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Code of Conduct</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;