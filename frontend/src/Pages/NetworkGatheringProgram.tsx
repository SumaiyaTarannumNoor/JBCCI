import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

// Example images (replace with your actual image imports)
import gathering1 from '../assets/news/network_gathering1.jpg';
import gathering2 from '../assets/news/network_gathering2.jpg';
import gathering3 from '../assets/news/network_gathering3.jpg';
import gathering4 from '../assets/news/network_gathering4.jpg';

const PRIMARY = "#18069e";
const SECONDARY = "#e6aa05";

const events = [
  {
    title: "10th Networking Gathering of JBCCI",
    description: "10th Networking Gathering of JBCCI held at Lakeshore Hotel in Gulshan, Dhaka on 7th March 2020. This event was hosted by Conveyor Logistics Ltd.",
    image: gathering1,
    date: "7th March 2020",
    location: "Lakeshore Hotel, Gulshan, Dhaka",
    sponsor: "Conveyor Logistics Ltd."
  },
  {
    title: "Networking Gathering at Uttara Club",
    description: "Networking Gathering meeting at Uttara Club on 27th July 2019 sponsored by Y Company.",
    image: gathering2,
    date: "27th July 2019",
    location: "Uttara Club",
    sponsor: "Y Company"
  },
  {
    title: "Networking Gathering at Uttara Club",
    description: "Networking Gathering meeting at Uttara Club on 27th July 2019 sponsored by Y Company.",
    image: gathering3,
    date: "27th July 2019",
    location: "Uttara Club",
    sponsor: "Y Company"
  },
  {
    title: "Networking Gathering at Uttara Club",
    description: "Networking Gathering meeting at Uttara Club on 27th July 2019 sponsored by Y Company.",
    image: gathering4,
    date: "27th July 2019",
    location: "Uttara Club",
    sponsor: "Y Company"
  },
];

const NetworkGatheringProgram: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-[#f9f8ff]">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: PRIMARY }}>
              Networking Gathering
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Networking Gathering is a regular program of JBCCI to increase business relation among members of JBCCI.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {events.map((event, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center group hover:shadow-2xl transition-shadow"
              >
                <div className="w-full md:w-48 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="rounded-lg w-full h-40 object-cover shadow group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="font-bold text-xl mb-2" style={{ color: SECONDARY }}>
                    {event.title}
                  </h2>
                  <p className="text-gray-700 mb-2">{event.description}</p>
                  <div className="text-xs text-gray-500 mb-1">
                    <span className="mr-3">Date: {event.date}</span>
                    <span className="mr-3">Location: {event.location}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Sponsor: <span className="font-semibold text-[#e6aa05]">{event.sponsor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <a
              href="/news-&-events"
              className="inline-block px-8 py-3 rounded-full font-semibold shadow transition-all hover:scale-105"
              style={{ background: PRIMARY, color: '#fff' }}
            >
              Get More
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NetworkGatheringProgram;