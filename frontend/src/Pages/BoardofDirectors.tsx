import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const BoardOfDirectors: React.FC = () => (
  <>
    <Navbar />
    <main className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-red-700 mb-6">Board of Directors</h1>
        <ul className="space-y-4">
          <li>
            <Link
              to="/board-of-directors/2024-26"
              className="block text-lg font-semibold text-blue-700 hover:underline"
            >
              Board of Directors (2024-26)
            </Link>
          </li>
          <li>
            <Link
              to="/board-of-directors/2022-24"
              className="block text-lg font-semibold text-blue-700 hover:underline"
            >
              Board of Directors (2022-24)
            </Link>
          </li>
          <li>
            <Link
              to="/board-of-directors/2020-22"
              className="block text-lg font-semibold text-blue-700 hover:underline"
            >
              Board of Directors (2020-22)
            </Link>
          </li>
          <li>
            <Link
              to="/board-of-directors/2018-20"
              className="block text-lg font-semibold text-blue-700 hover:underline"
            >
              Board of Directors (2018-20)
            </Link>
          </li>
        </ul>
      </div>
    </main>
    <Footer />
  </>
);

export default BoardOfDirectors;