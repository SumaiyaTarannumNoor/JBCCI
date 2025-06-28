import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const directors = [
  {
    name: "Mr. Yuji  Ando",
    position: "President",
    companyRole: "Country Representative",
    company: "JETRO Dhaka Office",
  },
  {
    name: "Mr. Md. Shariful Alam",
    position: "Vice President",
    companyRole: "Country Chairperson & Branch General Manager",
    company: "Mitsui & Co. (Asia Pacific)Pte. Ltd. Dhaka Branch",
  },
  {
    name: "Mr. Imrul Anwar Liton",
    position: "Vice President",
    companyRole: "Managing Director",
    company: "Kojima Lyric Garments Ltd.",
  },
  {
    name: "Mr. Tareq Rafi Bhuiyan (Jun)",
    position: "Secretary General",
    companyRole: "Managing Director",
    company: "New Vision Solutions Ltd.",
  },
  {
    name: "Mr. Hideaki Kojima",
    position: "Treasurer",
    companyRole: "Chief Representative",
    company: "MUFG Bank Ltd. Dhaka Office.",
  },
  {
    name: "Mr. Salahuddin Kasem Khan",
    position: "Director",
    companyRole: "Managing Director",
    company: "A.K. Khan & Co. Ltd.",
  },
  {
    name: "Mr. Hikari Kawai",
    position: "Director",
    companyRole: "General Manager",
    company: "Marubeni Corporation Dhaka Office.",
  },
  {
    name: "Dr. Kabir Ahmed",
    position: "Director",
    companyRole: "Managing Director",
    company: "Conveyor Logistics Ltd.",
  },
  {
    name: "Mr. Yoshimitsu Otomo",
    position: "Director",
    companyRole: "",
    company: "Yusen Logistics (Bangladesh) Ltd.",
  },
  {
    name: "Mr. A.K. Mizanur Rahman FCA",
    position: "Director",
    companyRole: "Managing Partner",
    company: "Shafic Mizan Rahman & Augustine (Chartered Accountants).",
  },
  {
    name: "Mr. Kazuhiro Kobayakawa",
    position: "Director",
    companyRole: "Managing Director",
    company: "Nippon Express Bangladesh Ltd.",
  },
  {
    name: "Mr. Masud Karim",
    position: "Director",
    companyRole: "Managing Director",
    company: "Asahi Consultants Ltd.",
  },
  {
    name: "Dr. AKM Moazzem Hussain",
    position: "Honorary Executive Director",
    companyRole: "",
    company: "",
  },
  {
    name: "Mr. Akhtaruzzaman",
    position: "Adviser to the Board",
    companyRole: "",
    company: "",
  },
];

const BoardOfDirectors2018_20: React.FC = () => (
  <>
    <Navbar />
    <main className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-red-700 mb-6 text-center">Board of Directors (2018–2020)</h1>
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
                {director.companyRole && (
                  <div className="text-xs text-gray-500">{director.companyRole}</div>
                )}
                {director.company && (
                  <div className="text-xs text-gray-500">{director.company}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default BoardOfDirectors2018_20;