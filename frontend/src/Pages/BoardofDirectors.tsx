import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import { Users, ChevronRight } from 'lucide-react';

const years = [
  {
    period: '2024-26',
    color: 'from-blue-400 via-blue-300 to-blue-500',
    border: 'border-blue-500',
    hover: 'hover:shadow-blue-400/50',
  },
  {
    period: '2022-24',
    color: 'from-emerald-400 via-emerald-300 to-emerald-500',
    border: 'border-emerald-500',
    hover: 'hover:shadow-emerald-400/50',
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
    <main className="pt-20 min-h-screen bg-gradient-to-b from-red-50 via-white to-blue-50">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <Users className="w-9 h-9 text-red-600 drop-shadow" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-blue-700 drop-shadow">
            Board of Directors Archive
          </h1>
        </div>
        <p className="text-center text-lg text-gray-700 mb-10">
          View the JBCCI Board of Directors for each session below.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {years.map((item, i) => (
            <Link
              key={item.period}
              to={`/board-of-directors/${item.period}`}
              className={`
                group rounded-2xl border-2 ${item.border}
                bg-gradient-to-br ${item.color}
                p-6 flex items-center justify-between shadow-xl transition-all duration-200 transform hover:-translate-y-1 ${item.hover}
                hover:scale-105
              `}
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