import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

// Import people images
import tareqRafiBhuiyan from '../../assets/people/Tareq_Rafi.jpg';
import anwarShahid from '../../assets/people/Anwar_Shahid.jpg';
import hiroakiOura from '../../assets/people/Hiroki_Oura.jpg';
import mariaHowlader from '../../assets/people/Mariya_Howladar.jpg';
import yujiAndo from '../../assets/people/Yuji_Ando.jpg';
import kenjiKimura from '../../assets/people/Kenji_Kimura.jpg';
import jahangirAlamSharker from '../../assets/people/Jahangir_Alam.jpg';
import manabuSugawara from '../../assets/people/Manabu_Sugawara.jpg';
import nayeemurRahman from '../../assets/people/Nayeemur_Rahman.jpg';
import sharifulAlam from '../../assets/people/Shariful_Alam.jpg';
import mohammedSohel from '../../assets/people/Mohammed_Sohel.jpg';
import tariqulIslam from '../../assets/people/Zaman_Tariqul_Islam.jpg';
import islamBabu from '../../assets/people/Ahmedul_Islam.jpg';
import hiroshiUegaki from '../../assets/people/Hiroshi_Uegaki.jpg';
import rabiulAlam from '../../assets/people/Rabiul_Alam.jpg';
import atsushiHirakuri from '../../assets/people/Atasuchi_Hirakuri.jpg';
import asifChowdhury from '../../assets/people/Asif_Chowdhury.jpg';
import taheraAhsan from '../../assets/people/Tahera_Ahsan.jpg';

const PRIMARY = "#18069e";
const SECONDARY = "#e6aa05";

const directors = [
  { 
    name: "MR. TAREQ RAFI BHUIYAN (JUN)", 
    position: "PRESIDENT",
    image: tareqRafiBhuiyan
  },
  { 
    name: "MR. MD. ANWAR SHAHID", 
    position: "VICE PRESIDENT",
    image: anwarShahid
  },
  { 
    name: "MR. HIROAKI OURA", 
    position: "VICE PRESIDENT",
    image: hiroakiOura
  },
  { 
    name: "MS. MARIA HOWLADER FCA", 
    position: "SECRETARY GENERAL",
    image: mariaHowlader
  },
  { 
    name: "MR. YUJI ANDO", 
    position: "JOINT SECRETARY GENERAL",
    image: yujiAndo
  },
  { 
    name: "MR. KENJI KIMURA", 
    position: "TREASURER",
    image: kenjiKimura
  },
  { 
    name: "MR. MD. JAHANGIR ALAM SHARKER", 
    position: "JOINT TREASURER",
    image: jahangirAlamSharker
  },
  { 
    name: "MR. MANABU SUGAWARA", 
    position: "DIRECTOR",
    image: manabuSugawara
  },
  { 
    name: "MR. NAYEEMUR RAHMAN", 
    position: "DIRECTOR",
    image: nayeemurRahman
  },
  { 
    name: "MR. MD. SHARIFUL ALAM", 
    position: "DIRECTOR",
    image: sharifulAlam
  },
  { 
    name: "MR. MOHAMMED SOHEL", 
    position: "DIRECTOR",
    image: mohammedSohel
  },
  { 
    name: "MR. ABU ZAMAN MD. TARIQUL ISLAM", 
    position: "DIRECTOR",
    image: tariqulIslam
  },
  { 
    name: "MR. AKM AHMEDUL ISLAM BABU", 
    position: "DIRECTOR",
    image: islamBabu
  },
  { 
    name: "MR. HIROSHI UEGAKI", 
    position: "DIRECTOR",
    image: hiroshiUegaki
  },
  { 
    name: "MR. RABIUL ALAM", 
    position: "DIRECTOR",
    image: rabiulAlam
  },
  { 
    name: "MR. ATSUSHI HIRAKURI", 
    position: "DIRECTOR",
    image: atsushiHirakuri
  },
  { 
    name: "MR. ASIF A. CHOWDHURY", 
    position: "ADVISOR TO THE BOARD",
    image: asifChowdhury
  },
  { 
    name: "MS. TAHERA AHSAN", 
    position: "EXECUTIVE DIRECTOR",
    image: taheraAhsan
  },
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
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: PRIMARY }}>
          Board of Directors (2024–2026)
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {directors.map((director, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-4 bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                {director.image ? (
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to gradient background with initials if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div
                  className={`w-full h-full bg-gradient-to-br ${getColorForPosition(director.position)} flex items-center justify-center text-white text-xl font-bold ${director.image ? 'hidden' : 'flex'}`}
                >
                  {director.name
                    .split(' ')
                    .filter(w => w[0] === w[0]?.toUpperCase())
                    .map(w => w[0])
                    .join('')
                    .substring(0, 2)}
                </div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">{director.name}</div>
                <div className={`text-sm font-medium mb-1 ${getTextColorForPosition(director.position)}`}>
                  {director.position}
                </div>
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