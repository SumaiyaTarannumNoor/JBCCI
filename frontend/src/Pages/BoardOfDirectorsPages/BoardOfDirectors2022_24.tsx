import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const directors = [
  { name: "MR. SUGAWARA MANABU", position: "PRESIDENT" },
  { name: "MR. HIROAKI OURA", position: "VICE PRESIDENT" },
  { name: "MR. M. JALALUL HAI", position: "VICE PRESIDENT" },
  { name: "MR. MD. ANWAR SHAHID", position: "SECRETARY GENERAL" },
  { name: "MR. KAZUNORI YAMADA", position: "JOINT SECRETARY GENERAL" },
  { name: "MR. KENJI KIMURA", position: "TREASURER" },
  { name: "MS. MARIA HOWLADER", position: "JOINT TREASURER" },
  { name: "MR. ASIF A. CHOWDHURY", position: "DIRECTOR" },
  { name: "MR. HIROSHI  UEGAKI", position: "DIRECTOR" },
  { name: "MR. SYED SAMIUL HUQ", position: "DIRECTOR" },
  { name: "MR. ATSUSHI HIRAKURI", position: "DIRECTOR" },
  { name: "MR. MD. JAHANGIR ALAM SARKER", position: "DIRECTOR" },
  { name: "MS. SAORI FUJIMOTO", position: "DIRECTOR" },
  { name: "MR. MOHAMMED SOHEL", position: "DIRECTOR" },
  { name: "MR. TAKAMASA  YAMAMOTO", position: "DIRECTOR" },
  { name: "MR. NAYEEMUR RAHMAN", position: "DIRECTOR" },
  { name: "MR. MD. SHARIFUL ALAM", position: "ADVISOR TO THE BOARD" },
  { name: "MR. MATIUR RAHMAN", position: "ADVISOR TO THE BOARD" },
  { name: "MR. MD. EMRAN", position: "EXECUTIVE DIRECTOR" },
];

const BoardOfDirectors2022_24: React.FC = () => (
  <>
    <Navbar />
    <main className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-red-700 mb-6 text-center">Board of Directors (2022–2024)</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {directors.map((director, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-4 bg-white rounded-xl shadow p-4"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-gray-400">
                {/* Placeholder image */}
                <span>IMG</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">{director.name}</div>
                <div className="text-sm text-gray-600">{director.position}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center text-gray-400 text-xs mt-16">
          Copyright ©2018 ThemeFuse. All Rights Reserved.
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default BoardOfDirectors2022_24;