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
    <main className="pt-20 min-h-screen bg-gradient-to-b from-[#edeafd] to-[#fff8e3]">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">Board of Directors (2018–2020)</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {directors.map((director, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-4 bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xl font-bold">
                {director.name.split(' ').filter(w => w[0] === w[0]?.toUpperCase()).map(w => w[0]).join('').substring(0, 2)}
              </div>
              <div>
                <div className="font-semibold text-gray-900">{director.name}</div>
                <div className="text-sm font-medium text-primary mb-1">{director.position}</div>
                {director.companyRole && (
                  <div className="text-xs text-gray-600">{director.companyRole}</div>
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