import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

// Import meeting images
import meeting1 from '../assets/meeting/1.jpg';
import meeting2 from '../assets/seminar/seminar1/1.jpg';
import meeting3 from '../assets/seminar/seminar2/2.jpg';
import meeting4 from '../assets/seminar/seminar2/4.jpg';
import meeting5 from '../assets/seminar/seminar1/5.jpg';

// Import seminar1 images
import seminar1_1 from '../assets/seminar/seminar1/1.jpg';
import seminar1_2 from '../assets/seminar/seminar1/2.jpg';
import seminar1_3 from '../assets/seminar/seminar1/3.jpg';
import seminar1_4 from '../assets/seminar/seminar1/4.jpg';
import seminar1_5 from '../assets/seminar/seminar1/5.jpg';

// Import seminar2 images
import seminar2_1 from '../assets/seminar/seminar2/1.jpg';
import seminar2_2 from '../assets/seminar/seminar2/2.jpg';
import seminar2_3 from '../assets/seminar/seminar2/3.jpg';
import seminar2_4 from '../assets/seminar/seminar2/4.jpg';
import seminar2_5 from '../assets/seminar/seminar2/5.jpg';

// Import seminar3 images
import seminar3_1 from '../assets/seminar/seminar3/1.jpg';
import seminar3_2 from '../assets/seminar/seminar3/2.jpg';
import seminar3_3 from '../assets/seminar/seminar3/3.jpg';
import seminar3_4 from '../assets/seminar/seminar3/4.jpg';
import seminar3_5 from '../assets/seminar/seminar3/5.jpg';

const PRIMARY = "#18069e";
const SECONDARY = "#e6aa05";

// Collect all images in a single array
const galleryImages = [
  // Meeting images
  { src: meeting1, alt: "Meeting 1" },
  { src: meeting2, alt: "Meeting 2" },
  { src: meeting3, alt: "Meeting 3" },
  { src: meeting4, alt: "Meeting 4" },
  { src: meeting5, alt: "Meeting 5" },
  // Seminar 1 images
  { src: seminar1_1, alt: "Seminar 1-1" },
  { src: seminar1_2, alt: "Seminar 1-2" },
  { src: seminar1_3, alt: "Seminar 1-3" },
  { src: seminar1_4, alt: "Seminar 1-4" },
  { src: seminar1_5, alt: "Seminar 1-5" },
  // Seminar 2 images
  { src: seminar2_1, alt: "Seminar 2-1" },
  { src: seminar2_2, alt: "Seminar 2-2" },
  { src: seminar2_3, alt: "Seminar 2-3" },
  { src: seminar2_4, alt: "Seminar 2-4" },
  { src: seminar2_5, alt: "Seminar 2-5" },
  // Seminar 3 images
  { src: seminar3_1, alt: "Seminar 3-1" },
  { src: seminar3_2, alt: "Seminar 3-2" },
  { src: seminar3_3, alt: "Seminar 3-3" },
  { src: seminar3_4, alt: "Seminar 3-4" },
  { src: seminar3_5, alt: "Seminar 3-5" },
];

const CourtesyCallAndMeeting: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageIdx, setModalImageIdx] = useState(0);

  const openModal = (idx: number) => {
    setModalImageIdx(idx);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const prevImg = () => setModalImageIdx(idx => (idx === 0 ? galleryImages.length - 1 : idx - 1));
  const nextImg = () => setModalImageIdx(idx => (idx === galleryImages.length - 1 ? 0 : idx + 1));

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-[#f9f8ff]">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: PRIMARY }}>
              Courtesy Call & Meeting Gallery
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-3">
              Enjoy some moments from our Courtesy Calls, Meetings, and Seminars.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow hover:shadow-2xl"
                onClick={() => openModal(idx)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-36 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </div>
            ))}
          </div>

          {/* Modal for Upscaled Image */}
          {modalOpen && (
            <div
              className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80"
              onClick={closeModal}
            >
              <div
                className="relative max-w-3xl w-full mx-4"
                style={{ maxHeight: "90vh" }}
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 bg-black/70 hover:bg-black/90 text-white rounded-full px-2 py-1 text-lg z-10"
                  aria-label="Close"
                >×</button>
                <button
                  onClick={prevImg}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white rounded-full px-3 py-1 text-2xl z-10"
                  aria-label="Previous"
                >&lt;</button>
                <img
                  src={galleryImages[modalImageIdx].src}
                  alt={galleryImages[modalImageIdx].alt}
                  className="w-full max-h-[80vh] object-contain rounded-xl shadow-lg"
                />
                <button
                  onClick={nextImg}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white rounded-full px-3 py-1 text-2xl z-10"
                  aria-label="Next"
                >&gt;</button>
                <div className="mt-2 text-center text-white">
                  {galleryImages[modalImageIdx].alt}
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CourtesyCallAndMeeting;