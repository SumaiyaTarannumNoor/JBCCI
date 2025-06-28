import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const PRIMARY = "#18069e";
const SECONDARY = "#e6aa05";

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
    <div className="pt-16 min-h-screen" style={{ background: "linear-gradient(135deg, #edeafd, #fff8e3)" }}>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight drop-shadow-sm"
              style={{ color: PRIMARY }}>
            JBCCI Newsletter
          </h1>
          <div className="flex justify-center mb-4">
            <div className="h-1 w-20 rounded" style={{
              background: `linear-gradient(to right, ${PRIMARY}, ${SECONDARY}, ${PRIMARY})`
            }}></div>
          </div>
          <p className="text-lg md:text-xl font-semibold mb-2" style={{ color: SECONDARY }}>
            Regular Activities of JBCCI
          </p>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            Our networking activities, seminars, trade exhibitions, and business development efforts help grow Bangladesh's business sector. We keep our honorable members up to date through regular newsletters and emails about all our activities.
          </p>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: SECONDARY }}>Recent Newsletters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {newsletters.map((issue, idx) => (
              <a
                key={issue.title}
                href={issue.link}
                className="group bg-white border hover:border-[#18069e] rounded-xl px-6 py-5 shadow-md hover:shadow-lg transition duration-200 flex items-center space-x-4"
                style={{ borderColor: "#e6aa05" }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#e6aa05] to-[#18069e] flex items-center justify-center text-xl font-bold text-white group-hover:bg-gradient-to-br group-hover:from-[#18069e] group-hover:to-[#e6aa05] transition">
                  <span>{62 - idx}</span>
                </div>
                <span className="text-lg font-medium text-gray-800 group-hover:text-[#18069e] transition">
                  {issue.title}
                </span>
              </a>
            ))}
          </div>
        </div>
        <footer className="mt-16 text-center text-gray-500 text-sm pt-10 border-t" style={{ borderColor: SECONDARY }}>
          Copyright ©2018 <span style={{ color: PRIMARY, fontWeight: "bold" }}>ThemeFuse</span>. All Rights Reserved
        </footer>
      </section>
    </div>
    <Footer/>
  </>
);

export default NewsAndEvents;