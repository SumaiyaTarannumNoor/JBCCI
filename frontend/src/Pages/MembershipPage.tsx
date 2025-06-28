import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const directors = [
  { name: "Mr. Tareq Rafi Bhuiyan (Jun)", position: "President" },
  { name: "Mr. Md. Anwar Shahid", position: "Vice President" },
  { name: "Mr. Hiroaki Oura", position: "Vice President" },
  { name: "Ms. Maria Howlader FCA", position: "Secretary General" },
  { name: "Mr. Yuji Ando", position: "Joint Secretary General" },
  { name: "Mr. Kenji Kimura", position: "Treasurer" },
  { name: "Mr. Md. Jahangir Alam Sharker", position: "Joint Treasurer" },
  { name: "Mr. Manabu Sugawara", position: "Director" },
  { name: "Mr. Mohammed Sohel", position: "Director" },
  { name: "Mr. Md. Shariful Alam", position: "Director" },
  { name: "Mr. Nayeemur Rahman", position: "Director" },
  { name: "Mr. Abu Zaman Md. Tariqul Islam", position: "Director" },
  { name: "Mr. AKM Ahmedul Islam BABU", position: "Director" },
  { name: "Mr. Hiroshi Uegaki", position: "Director" },
  { name: "Mr. Rabiul Alam", position: "Director" },
  { name: "Mr. Atsushi Hirakuri", position: "Director" },
  { name: "Mr. Asif A. Chowdhury", position: "Advisor to the Board" },
  { name: "Ms. Tahera Ahsan", position: "Executive Director" }
];

const MembershipPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="pt-16 bg-white min-h-screen">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          {/* Hero Section */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
              Japan Bangladesh Chamber of Commerce and Industry (JBCCI)
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              An Association to develop business between Bangladesh and Japan
            </p>
          </div>

          {/* Who we are, What we do, Why we do it */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-red-50 rounded-xl p-6 shadow">
              <h2 className="font-bold text-xl mb-2 text-red-700">Who we are</h2>
              <p className="text-gray-700 text-base">
                JBCCI was formed when we were feeling the extreme need of starting a new trade regime with stronger mutual presence in each other's market. A well-timed address by H.E. Mr. Matsushiro Horiguchi, Hon'ble Ambassador of Japan in Bangladesh at the National Press Club in Dhaka expressed deep sense of commitment of Japan for peace, prosperity and development of our country as a nation-state. It was possible to form JBCCI with the direct support and co-operation of JETRO (Japan External Trade Organization), which is operating for trade and investment promotion in Bangladesh as Japan Government's agency for the last 35 years. The leadership of former Presidents Mr. Matiur Rahman and Mr. Hideo Ueno has enriched JBCCI stepping forward from its inception.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 shadow">
              <h2 className="font-bold text-xl mb-2 text-green-700">What we do</h2>
              <p className="text-gray-700 text-base">
                To follow up the reports of the "Bangladesh-Japan Joint Committee for Commercial and Economic Cooperation" and to help in early implementation of its recommendations. To cooperate with appropriate organizations for promoting cultural exchange and friendship between Japan and Bangladesh. To collect market/economic information of Bangladesh and provide it to the Japanese people when required. To maintain liaison with the MEDIA and encourage wide coverage of JBCCI activities. To look into the difficulties/obstacles members are facing with import/export, duty structures, transportation, dumping / antidumping, IPR or other trade related issues.
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 shadow">
              <h2 className="font-bold text-xl mb-2 text-blue-700">Why we do it</h2>
              <p className="text-gray-700 text-base">
                Japan and Bangladesh are two friendly countries and this relationship has contributed in socio economic development, culture, education, infrastructure, know how transfer, trade, business migration, human resource exchange with skills development, capacity building and in many areas.
              </p>
            </div>
          </div>

          {/* Become a Member Today - Welcome Section (connects to membership-form page) */}
          <div className="mb-12">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-10 text-center">
              <h1 className="text-4xl font-bold text-red-700 mb-4">Become Our Member Today!</h1>
              <p className="text-lg text-gray-700 mb-6">
                Join the Japan-Bangladesh Chamber of Commerce and Industry (JBCCI) and unlock exclusive opportunities for networking, business growth, and international collaboration. Be a part of our vibrant community!
              </p>
              <Link
                to="/membership-form"
                className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold text-lg shadow"
              >
                Become Our Member Today
              </Link>
            </div>
          </div>

          {/* Office Placeholder Images */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-4">Check out our cool office</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="w-full aspect-square bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-4xl font-bold">
                  Image {i}
                </div>
              ))}
            </div>
          </div>

          {/* Directors */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-6">Our Directors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {directors.map((director, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gray-200 mb-3 flex items-center justify-center text-3xl text-gray-400 font-bold">
                    <span>Img</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900">{director.name}</h3>
                    <p className="text-sm text-gray-600">{director.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Objectives */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-4">Objectives of JBCCI</h2>
            <ul className="max-w-xl mx-auto list-disc list-inside text-gray-700 space-y-2">
              <li>To collect and provide business information in Bangladesh and Japan.</li>
              <li>To promote the two-way trade and investment between Japan and Bangladesh.</li>
              <li>To explore new areas of investment and encourage the establishment of Japan-Bangladesh joint ventures in Japan and Bangladesh.</li>
              <li>To identify areas of difficulties in investment and important trade barriers and take steps to overcome those.</li>
              <li>To arrange training programs / workshops / seminars for Human Resource Development and others in both Bangladesh and Japan.</li>
            </ul>
          </div>

          {/* Activities and Merits */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-2 text-red-700">Our Activities</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Trade Fair: JBCCI members will get the opportunity to participate in Trade Fairs organized by JBCCI (in Bangladesh and in Japan) at a discounted rate.</li>
                <li>Seminars/Workshops: JBCCI members will get the priority to join the Seminars/Workshops organized by JBCCI at special rate along with other facilities.</li>
                <li>Investment Benefits: For interested companies who are looking for joint Venture with Japanese Company, JBCCI will provide all possible relevant information on potential Japanese investors. For companies who are interested to invest in Japan, JBCCI will provide information about Japanese Investment Climate and Investment Procedure.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2 text-green-700">Merits of JBCCI Membership</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Information Services: JBCCI members will be provided with important business information services.</li>
                <li>Export: For Bangladeshi Exporters, JBCCI will provide related information about Japanese Importers and necessary Market Information of Japan.</li>
                <li>Import: For Bangladeshi Importers, JBCCI will provide related information about Japanese Exporters.</li>
              </ul>
            </div>
          </div>

          {/* Be Our Member */}
          <div className="mb-12 text-center bg-gradient-to-r from-red-50 to-green-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-2">BE OUR MEMBER</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Japan and Bangladesh are two friendly countries and this relationship has contributed in socio economic development, culture, education, infrastructure, know how transfer, trade, business migration, infrastructure development, SME, IT Business and human resource exchange with skill development, capacity building and in many areas.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default MembershipPage;