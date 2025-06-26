import React from 'react';
import Navbar from '../Components/Navbar';
import { Users, Globe, Building2, Handshake, UserCheck } from 'lucide-react';

const MembershipPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <section id="membership" className="py-20 bg-white min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Members
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Become a Member of JBCCI and join our growing community of business professionals, entrepreneurs, and organizations 
                working together for the advancement of Japan-Bangladesh relations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center group">
                <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <Users className="h-10 w-10 text-red-600" />
                </div>
                <div className="text-4xl font-bold text-red-600 mb-2">340</div>
                <div className="text-gray-600 font-medium">TOTAL MEMBERS</div>
              </div>

              <div className="text-center group">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Globe className="h-10 w-10 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-green-600 mb-2">241</div>
                <div className="text-gray-600 font-medium">BANGLADESHI</div>
              </div>

              <div className="text-center group">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Building2 className="h-10 w-10 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">75</div>
                <div className="text-gray-600 font-medium">JAPANESE</div>
              </div>

              <div className="text-center group">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <Handshake className="h-10 w-10 text-orange-600" />
                </div>
                <div className="text-4xl font-bold text-orange-600 mb-2">24</div>
                <div className="text-gray-600 font-medium">JOINT VENTURE & MNC</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-2xl p-8 text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join JBCCI Today</h3>
              <p className="text-gray-600 mb-6">
                Become part of our vibrant community and unlock opportunities for business growth, networking, and collaboration between Japan and Bangladesh.
              </p>
              <button className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold">
                Apply for Membership
                <UserCheck className="ml-2 h-5 w-5" />
              </button>
            </div>

            <div className="mt-20 max-w-3xl mx-auto text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Membership Benefits</h4>
              <ul className="text-left list-disc list-inside text-gray-700 space-y-2">
                <li>Access to exclusive networking opportunities and business events</li>
                <li>Inclusion in the JBCCI business directory</li>
                <li>Regular updates on trade and investment opportunities</li>
                <li>Support and guidance for Japan-Bangladesh business relations</li>
                <li>Participation in seminars, workshops, and annual general meetings</li>
              </ul>
            </div>

            <div className="mt-20 max-w-3xl mx-auto">
              <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">How to Apply?</h4>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>Download the membership application form from the JBCCI website or contact our secretariat.</li>
                <li>Fill in all required details and attach relevant documents.</li>
                <li>Submit the application via email or at the JBCCI Secretariat office.</li>
                <li>Our board will review your application and notify you of the decision.</li>
              </ol>
              <div className="mt-6 text-center text-gray-500">
                For any queries, email us at <a href="mailto:info@jbcci.org" className="text-red-600 hover:underline">info@jbcci.org</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MembershipPage;