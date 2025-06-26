import React from 'react';
import Navbar from '../Components/Navbar';
import { FileText, BookOpen, Globe } from 'lucide-react';

const Publications: React.FC = () => (
  <>
    <Navbar />
    <div className="pt-16">
      <section id="publications" className="py-20 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Publications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our latest reports, newsletters, and business publications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <FileText className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Annual Report 2024</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive overview of JBCCI's activities and achievements throughout the year.
              </p>
              <button className="text-red-600 font-medium hover:text-red-700 transition-colors">
                Download PDF
              </button>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <BookOpen className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Directory</h3>
              <p className="text-gray-600 mb-4">
                Complete directory of JBCCI members and their business information.
              </p>
              <button className="text-green-600 font-medium hover:text-green-700 transition-colors">
                View Online
              </button>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <Globe className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trade Bulletin</h3>
              <p className="text-gray-600 mb-4">
                Monthly bulletin featuring trade opportunities and market insights.
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default Publications;