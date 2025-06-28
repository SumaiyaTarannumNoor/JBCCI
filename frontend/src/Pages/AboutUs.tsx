import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Target, Globe, Zap, CheckCircle } from 'lucide-react';

const PRIMARY = "#18069e";
const SECONDARY = "#e6aa05";

const AboutUs: React.FC = () => (
  <>
    <Navbar />
    <div className="pt-16" style={{ background: "#fff" }}>
      <section id="about" className="py-20 min-h-screen" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: PRIMARY }}>
              About JBCCI
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Japan-Bangladesh Chamber of Commerce & Industry - An association committed to serving 
              the business community of Japan and Bangladesh at every step.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-100 transition-colors"
                style={{ background: SECONDARY + "22" }}>
                <Target className="h-8 w-8" style={{ color: SECONDARY }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: PRIMARY }}>Objective</h3>
              <p className="text-gray-700">
                With valuable expertise from honorable members from different business fields, JBCCI is committed to serve the business community of Japan and Bangladesh at every step of promoting trade and investment for economic prosperity.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors"
                style={{ background: PRIMARY + "22" }}>
                <Globe className="h-8 w-8" style={{ color: PRIMARY }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: SECONDARY }}>Mission & Vision</h3>
              <p className="text-gray-700">
                To promote two-way trade and investment between Japan and Bangladesh, exploring new areas of investment and encouraging the establishment of Japan-Bangladesh joint ventures.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-100 transition-colors"
                style={{ background: SECONDARY + "22" }}>
                <Zap className="h-8 w-8" style={{ color: SECONDARY }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: PRIMARY }}>Activities</h3>
              <p className="text-gray-700">
                Collect and provide business information in Bangladesh and Japan, promote two-way trade and investment, and explore new areas of investment opportunities.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#edeafd] to-[#fff8e3] rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: PRIMARY }}>
                  Background & Formation
                </h3>
                <p className="text-gray-700 mb-4">
                  JBCCI was formed when we were feeling the extreme need of starting a new trade regime with stronger mutual presence in each other's market. A well-timed address by H.E. Mr. Matsushiro Horiguchi, Hon'ble Ambassador of Japan in Bangladesh at the National Press Club in Dhaka expressed deep sense of commitment of Japan for peace, prosperity and development of our country as a nation-state.
                </p>
                <p className="text-gray-700">
                  It was possible to form JBCCI with the direct support and co-operation of JETRO (Japan External Trade Organization), which is operating for trade and investment promotion in Bangladesh as Japan Government's agency for the last 35 years.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" style={{ color: SECONDARY }} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Increase Japanese Investment in Bangladesh</h4>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" style={{ color: SECONDARY }} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Develop SME sector of Japan & Bangladesh</h4>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" style={{ color: SECONDARY }} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Develop friendship relation between both countries</h4>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" style={{ color: SECONDARY }} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Develop Economic Position of Bangladesh</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </>
);

export default AboutUs;