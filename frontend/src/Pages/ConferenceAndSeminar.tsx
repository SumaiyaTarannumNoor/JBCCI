import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

// Importing seminar images
import seminar1_1 from '../assets/seminar/seminar1/1.jpg';
import seminar1_2 from '../assets/seminar/seminar1/2.jpg';
import seminar1_3 from '../assets/seminar/seminar1/3.jpg';
import seminar1_4 from '../assets/seminar/seminar1/4.jpg';
import seminar1_5 from '../assets/seminar/seminar1/5.jpg';

import seminar2_1 from '../assets/seminar/seminar2/1.jpg';
import seminar2_2 from '../assets/seminar/seminar2/2.jpg';
import seminar2_3 from '../assets/seminar/seminar2/3.jpg';
import seminar2_4 from '../assets/seminar/seminar2/4.jpg';
import seminar2_5 from '../assets/seminar/seminar2/5.jpg';

import seminar3_1 from '../assets/seminar/seminar3/1.jpg';
import seminar3_2 from '../assets/seminar/seminar3/2.jpg';
import seminar3_3 from '../assets/seminar/seminar3/3.jpg';
import seminar3_4 from '../assets/seminar/seminar3/4.jpg';
import seminar3_5 from '../assets/seminar/seminar3/5.jpg';

const PRIMARY = "#18069e";
const SECONDARY = "#e6aa05";

const seminars = [
  {
    title: 'Roundtable Discussion on “National Budget 2022-2023 and Foreign Direct Investment Prospects”',
    images: [seminar1_1, seminar1_2, seminar1_3, seminar1_4, seminar1_5],
  },
  {
    title: 'Seminar to sharing the outcomes of “The Survey on FTA/EPA between Japan and Bangladesh.”',
    images: [seminar2_1, seminar2_2, seminar2_3, seminar2_4, seminar2_5],
  },
  {
    title: 'Seminar to share the outcome of the “2021 JETRO Survey on Business Conditions of Japanese Companies in Asia and Oceania.',
    images: [seminar3_1, seminar3_2, seminar3_3, seminar3_4, seminar3_5],
  }
];

const ConferenceAndSeminar: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-[#f9f8ff]">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: PRIMARY }}>
              Conference & Seminar
            </h1>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Conference & Seminar is a core activity of JBCCI
            </p>
          </div>

          <div className="space-y-16">
            {seminars.map((seminar, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="font-bold text-xl mb-5 text-center" style={{ color: SECONDARY }}>
                  Seminar
                </h2>
                <h3 className="text-lg font-semibold mb-4 text-center" style={{ color: PRIMARY }}>
                  {seminar.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-2">
                  {seminar.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Seminar ${idx + 1} - Image ${i + 1}`}
                      className="rounded-lg w-full h-40 object-cover shadow"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ConferenceAndSeminar;