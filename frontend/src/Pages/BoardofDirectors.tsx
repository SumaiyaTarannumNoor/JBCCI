import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import { Users, ChevronRight } from 'lucide-react';

const PRIMARY = "#18069e";
const SECONDARY = "#e6aa05";

const years = [
  {
    period: '2024-26',
    color: `from-[${PRIMARY}] via-indigo-400 to-indigo-600`,
    border: `border-[${PRIMARY}]`,
    hover: 'hover:shadow-indigo-400/50',
  },
  {
    period: '2022-24',
    color: `from-[${SECONDARY}] via-yellow-300 to-yellow-500`,
    border: `border-[${SECONDARY}]`,
    hover: 'hover:shadow-yellow-400/50',
  },
  {
    period: '2020-22',
    color: 'from-violet-400 via-violet-300 to-violet-500',
    border: 'border-violet-500',
    hover: 'hover:shadow-violet-400/50',
  },
  {
    period: '2018-20',
    color: 'from-orange-400 via-orange-300 to-orange-500',
    border: 'border-orange-500',
    hover: 'hover:shadow-orange-400/50',
  },
];

const BoardOfDirectors: React.FC = () => (
  <>
    <Navbar />
    <main className="pt-20 min-h-screen" style={{ background: "linear-gradient(to bottom, #edeafd, #fff8e3)" }}>
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <Users className="w-9 h-9" style={{ color: SECONDARY }} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#18069e] to-[#e6aa05] drop-shadow">
            Board of Directors Archive
          </h1>
        </div>
        <p className="text-center text-lg text-gray-700 mb-10">
          View the JBCCI Board of Directors for each session below.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {years.map((item) => (
            <Link
              key={item.period}
              to={`/board-of-directors/${item.period}`}
              className={`
                group rounded-2xl border-2 ${item.border}
                bg-gradient-to-br ${item.color}
                p-6 flex items-center justify-between shadow-xl transition-all duration-200 transform hover:-translate-y-1 ${item.hover}
                hover:scale-105
              `}
              style={{
                borderColor: item.period === '2024-26' ? PRIMARY : item.period === '2022-24' ? SECONDARY : undefined
              }}
            >
              <div>
                <div className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-white transition-colors">
                  Board of Directors
                </div>
                <div className="text-lg font-semibold text-gray-800 group-hover:text-gray-100 transition-colors">
                  Session {item.period}
                </div>
              </div>
              <ChevronRight className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default BoardOfDirectors;