import React from 'react';
import Navbar from '../Components/Navbar';
import { TrendingUp, Building2, Users, Calendar, Star, Award, BookOpen, ChevronRight } from 'lucide-react';

const NewsAndEvents: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <section id="news" className="py-20 bg-gray-50 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                News & Events
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay updated with our latest activities, events, and press coverage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                  <TrendingUp className="h-16 w-16 text-white opacity-50" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    Japanese Firms Bullish on Bangladesh
                  </h3>
                  <p className="text-gray-600 mb-4">
                    The majority of Japanese companies operating in Bangladesh plan to go for business expansion over the next two years thanks to cheap labour and high profitability, according to a survey conducted by Japan External Trade Organization (Jetro).
                  </p>
                  <button className="text-red-600 font-medium hover:text-red-700 transition-colors inline-flex items-center">
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </article>

              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <Building2 className="h-16 w-16 text-white opacity-50" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    Japanese Companies Want to Invest in BD
                  </h3>
                  <p className="text-gray-600 mb-4">
                    70pc Japanese firms in Bangladesh want to expand business, showing strong confidence in the country's economic potential and business environment.
                  </p>
                  <button className="text-green-600 font-medium hover:text-green-700 transition-colors inline-flex items-center">
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </article>

              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <Users className="h-16 w-16 text-white opacity-50" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    ICOSA Holds SMEs Seminar
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A seminar titled "Role of SMEs in the national economy—the case of Japan and how Bangladesh should go ahead" highlighting the importance of small and medium enterprises.
                  </p>
                  <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center">
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </article>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <Calendar className="h-8 w-8 text-red-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Networking Program</h4>
                <p className="text-sm text-gray-600">Regular networking events for members</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <Star className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">International Women's Day</h4>
                <p className="text-sm text-gray-600">Celebrating women in business</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <Award className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">17th AGM</h4>
                <p className="text-sm text-gray-600">Annual General Meeting</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <BookOpen className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Business Seminars</h4>
                <p className="text-sm text-gray-600">Educational business seminars</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NewsAndEvents;