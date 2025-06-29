import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FileText, BookOpen, Globe } from 'lucide-react';

// Import sample publication images
import publication1 from "../assets/landing_page/1.jpg";
import publication2 from "../assets/landing_page/2.jpg";
import publication3 from "../assets/landing_page/3.jpg";

const PRIMARY = "#18069e";
const SECONDARY = "#e6aa05";

const Publications: React.FC = () => (
  <>
    <Navbar />
    <div className="pt-16">
      <section
        id="publications"
        className="py-20 min-h-screen"
        style={{ background: "#fff" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: PRIMARY }}
            >
              Publications
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Access our latest reports, newsletters, and business publications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-[#edeafd] rounded-2xl shadow-xl p-0 flex flex-col hover:shadow-2xl transition-shadow">
              <div className="w-full aspect-[16/9] overflow-hidden rounded-t-2xl flex items-center justify-center bg-gray-100">
                <img
                  src={publication1}
                  alt="Annual Report 2024"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  style={{ minHeight: 180, maxHeight: 260 }}
                />
              </div>
              <div className="flex flex-col items-center px-7 py-8">
                <FileText className="h-12 w-12 mb-4" style={{ color: PRIMARY }} />
                <h3 className="text-xl font-semibold mb-3 text-center" style={{ color: PRIMARY }}>
                  Annual Report 2024
                </h3>
                <p className="text-gray-700 mb-4 text-center">
                  Comprehensive overview of JBCCI's activities and achievements throughout the year.
                </p>
                <button
                  className="font-medium hover:underline"
                  style={{ color: SECONDARY }}
                >
                  Download PDF
                </button>
              </div>
            </div>
            <div className="bg-[#fff8e3] rounded-2xl shadow-xl p-0 flex flex-col hover:shadow-2xl transition-shadow">
              <div className="w-full aspect-[16/9] overflow-hidden rounded-t-2xl flex items-center justify-center bg-gray-100">
                <img
                  src={publication2}
                  alt="Business Directory"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  style={{ minHeight: 180, maxHeight: 260 }}
                />
              </div>
              <div className="flex flex-col items-center px-7 py-8">
                <BookOpen className="h-12 w-12 mb-4" style={{ color: SECONDARY }} />
                <h3 className="text-xl font-semibold mb-3 text-center" style={{ color: SECONDARY }}>
                  Business Directory
                </h3>
                <p className="text-gray-700 mb-4 text-center">
                  Complete directory of JBCCI members and their business information.
                </p>
                <button
                  className="font-medium hover:underline"
                  style={{ color: PRIMARY }}
                >
                  View Online
                </button>
              </div>
            </div>
            <div className="bg-[#edeafd] rounded-2xl shadow-xl p-0 flex flex-col hover:shadow-2xl transition-shadow">
              <div className="w-full aspect-[16/9] overflow-hidden rounded-t-2xl flex items-center justify-center bg-gray-100">
                <img
                  src={publication3}
                  alt="Trade Bulletin"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  style={{ minHeight: 180, maxHeight: 260 }}
                />
              </div>
              <div className="flex flex-col items-center px-7 py-8">
                <Globe className="h-12 w-12 mb-4" style={{ color: PRIMARY }} />
                <h3 className="text-xl font-semibold mb-3 text-center" style={{ color: PRIMARY }}>
                  Trade Bulletin
                </h3>
                <p className="text-gray-700 mb-4 text-center">
                  Monthly bulletin featuring trade opportunities and market insights.
                </p>
                <button
                  className="font-medium hover:underline"
                  style={{ color: SECONDARY }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </>
);

export default Publications;