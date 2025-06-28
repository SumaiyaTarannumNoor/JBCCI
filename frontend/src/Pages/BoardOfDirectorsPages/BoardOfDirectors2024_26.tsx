import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const directors = [
  { name: "MR. TAREQ RAFI BHUIYAN (JUN)", position: "PRESIDENT" },
  { name: "MR. MD. ANWAR SHAHID", position: "VICE PRESIDENT" },
  { name: "MR. HIROAKI OURA", position: "VICE PRESIDENT" },
  { name: "MS. MARIA HOWLADER FCA", position: "SECRETARY GENERAL" },
  { name: "MR. YUJI ANDO", position: "JOINT SECRETARY GENERAL" },
  { name: "MR. KENJI KIMURA", position: "TREASURER" },
  { name: "MR. MD. JAHANGIR ALAM SHARKER", position: "JOINT TREASURER" },
  { name: "MR. MANABU SUGAWARA", position: "DIRECTOR" },
  { name: "MR. NAYEEMUR RAHMAN", position: "DIRECTOR" },
  { name: "MR. MD. SHARIFUL ALAM", position: "DIRECTOR" },
  { name: "MR. MOHAMMED SOHEL", position: "DIRECTOR" },
  { name: "MR. ABU ZAMAN MD. TARIQUL ISLAM", position: "DIRECTOR" },
  { name: "MR. AKM AHMEDUL ISLAM BABU", position: "DIRECTOR" },
  { name: "MR. HIROSHI UEGAKI", position: "DIRECTOR" },
  { name: "MR. RABIUL ALAM", position: "DIRECTOR" },
  { name: "MR. ATSUSHI HIRAKURI", position: "DIRECTOR" },
  { name: "MR. ASIF A. CHOWDHURY", position: "ADVISOR TO THE BOARD" },
  { name: "MS. TAHERA AHSAN", position: "EXECUTIVE DIRECTOR" },
];

const getColorForPosition = (position: string) => {
  if (position.includes('PRESIDENT')) return 'from-secondary to-primary';
  if (position.includes('VICE PRESIDENT')) return 'from-secondary to-yellow-300';
  if (position.includes('SECRETARY')) return 'from-primary to-blue-400';
  if (position.includes('TREASURER')) return 'from-green-400 to-secondary';
  if (position.includes('ADVISOR')) return 'from-purple-400 to-purple-600';
  if (position.includes('EXECUTIVE')) return 'from-teal-400 to-teal-600';
  return 'from-gray-400 to-gray-600';
};

const getTextColorForPosition = (position: string) => {
  if (position.includes('PRESIDENT')) return 'text-secondary';
  if (position.includes('VICE PRESIDENT')) return 'text-secondary';
  if (position.includes('SECRETARY')) return 'text-primary';
  if (position.includes('TREASURER')) return 'text-green-600';
  if (position.includes('ADVISOR')) return 'text-purple-600';
  if (position.includes('EXECUTIVE')) return 'text-teal-600';
  return 'text-gray-600';
};

const BoardOfDirectors2024_26: React.FC = () => (
  <>
    <Navbar />
    <main className="pt-20 min-h-screen bg-gradient-to-b from-[#edeafd] to-[#fff8e3]">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">Board of Directors (2024–2026)</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {directors.map((director, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-4 bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow"
            >
              <div
                className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${getColorForPosition(director.position)} flex items-center justify-center text-white text-xl font-bold`}
              >
                {director.name
                  .split(' ')
                  .filter(w => w[0] === w[0]?.toUpperCase())
                  .map(w => w[0])
                  .join('')
                  .substring(0, 2)}
              </div>
              <div>
                <div className="font-semibold text-gray-900">{director.name}</div>
                <div className={`text-sm font-medium mb-1 ${getTextColorForPosition(director.position)}`}>{director.position}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default BoardOfDirectors2024_26;