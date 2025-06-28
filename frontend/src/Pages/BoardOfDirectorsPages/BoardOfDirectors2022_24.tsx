import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const directors = [
  {
    name: "Mr. Asif A Chowdhury",
    position: "President",
    companyRole: "Chairman",
    company: "Crown Navigation Co. (Pvt.) Ltd",
  },
  {
    name: "Mr. M Jalalul Hai",
    position: "Vice President",
    companyRole: "Chief Executive Officer",
    company: "Haison International Ltd.",
  },
  {
    name: "Mr. Md. Shariful Alam",
    position: "Vice President",
    companyRole: "General Manager",
    company: "Mitsui & Co. (Asia  Pacific)Pte. Ltd. Dhaka Branch",
  },
  {
    name: "Mr. Tareq Rafi Bhuiyan (Jun)",
    position: "Secretary General",
    companyRole: "Managing Director",
    company: "New Vision Solutions Ltd.",
  },
  {
    name: "Mr. Takeshi Hashimoto",
    position: "Treasurer",
    companyRole: "Chief Representative",
    company: "MUFG Bank Ltd. Dhaka Office.",
  },
  {
    name: "Mr. Yuji Ando",
    position: "Director",
    companyRole: "Chief Country Representative",
    company: "JETRO Dhaka Office",
  },
  {
    name: "Dr. Kabir Ahmed",
    position: "Director",
    companyRole: "Chairman & Managing Director",
    company: "Conveyor Logistics Ltd.",
  },
  {
    name: "Mr. Tadaoki Watanabe",
    position: "Director",
    companyRole: "Managing Director",
    company: "Tokyo Consulting Firm Ltd.",
  },
  {
    name: "Mr. Nurul Wahab",
    position: "Director",
    companyRole: "Managing Partner",
    company: "A. Wahab & Co. Chartered Accountants",
  },
  {
    name: "Mr. Takashi Miyata",
    position: "Director",
    companyRole: "Managing Director",
    company: "YKK Bangladesh Pte. Ltd.",
  },
  {
    name: "Mr. Syed Samiul Huq",
    position: "Director",
    companyRole: "Director",
    company: "Japan Solartech Bangladesh Ltd.",
  },
  {
    name: "Mr. Tetsuro Kano",
    position: "Director",
    companyRole: "General Manager",
    company: "ITOCHU Corporation, Dhaka Liaison Office",
  },
  {
    name: "Md. Emran",
    position: "Executive Director",
    companyRole: "",
    company: "",
  },
  {
    name: "Mr. Salahuddin Kashem Khan",
    position: "Advisor to the Board",
    companyRole: "Chairman, EC of the Board",
    company: "A.K. Khan & Co. Ltd.",
  },
];

const BoardOfDirectors2022_24: React.FC = () => (
  <>
    <Navbar />
    <main className="pt-20 min-h-screen bg-gradient-to-b from-[#edeafd] to-[#fff8e3]">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">Board of Directors (2022–2024)</h1>
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

export default BoardOfDirectors2022_24;