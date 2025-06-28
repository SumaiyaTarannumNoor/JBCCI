import React from 'react';
import Navbar from '../Components/Navbar';

const newsletters = [
  { title: "JBCCI Newsletter 62 Issue", link: "#" },
  { title: "JBCCI Newsletter 61 Issue", link: "#" },
  { title: "JBCCI Newsletter 60th Issue", link: "#" },
  { title: "JBCCI Newsletter 59th Issue", link: "#" },
  { title: "JBCCI Newsletter 58th Issue", link: "#" },
  { title: "JBCCI Newsletter 57th Issue", link: "#" },
  { title: "JBCCI Newsletter 55th Issue", link: "#" },
  { title: "JBCCI Newsletter 54th Issue", link: "#" },
  { title: "JBCCI Newsletter 53rd Issue", link: "#" }
];

const NewsAndEvents: React.FC = () => (
  <>
    <Navbar />
    <div className="pt-16 bg-gradient-to-br from-red-50 via-white to-green-50 min-h-screen">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-red-700 mb-3 tracking-tight drop-shadow-sm">
            JBCCI Newsletter
          </h1>
          <div className="flex justify-center mb-4">
            <div className="h-1 w-20 bg-gradient-to-r from-red-600 via-green-400 to-red-600 rounded"></div>
          </div>
          <p className="text-lg md:text-xl text-green-800 font-semibold mb-2">
            Regular Activities of JBCCI
          </p>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            Our networking activities, seminars, trade exhibitions, and business development efforts help grow Bangladesh's business sector. We keep our honorable members up to date through regular newsletters and emails about all our activities.
          </p>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Recent Newsletters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {newsletters.map((issue, idx) => (
              <a
                key={issue.title}
                href={issue.link}
                className="group bg-white border border-green-100 hover:border-red-300 rounded-xl px-6 py-5 shadow-md hover:shadow-lg transition duration-200 flex items-center space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-red-200 to-green-200 flex items-center justify-center text-xl font-bold text-red-700 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-red-600 group-hover:to-green-600 transition">
                  <span>{62 - idx}</span>
                </div>
                <span className="text-lg font-medium text-gray-800 group-hover:text-red-700 transition">
                  {issue.title}
                </span>
              </a>
            ))}
          </div>
        </div>
        <footer className="mt-16 text-center text-gray-500 text-sm pt-10 border-t border-red-100">
          Copyright ©2018 <span className="text-red-700 font-bold">ThemeFuse</span>. All Rights Reserved
        </footer>
      </section>
    </div>
  </>
);

export default NewsAndEvents;