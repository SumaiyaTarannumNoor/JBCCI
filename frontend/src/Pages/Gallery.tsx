import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

// Landing page images
import landing3 from '../assets/landing_page/3.jpg';
import landing7 from '../assets/landing_page/7.jpg';
import landing8 from '../assets/landing_page/8.jpg';
import landing9 from '../assets/landing_page/9.jpg';

// Seminar images
import seminar1_1 from '../assets/seminar/seminar1/1.jpg';
import seminar1_2 from '../assets/seminar/seminar1/2.jpg';
import seminar1_3 from '../assets/seminar/seminar1/3.jpg';
import seminar1_4 from '../assets/seminar/seminar1/4.jpg';

import seminar2_1 from '../assets/seminar/seminar2/1.jpg';
import seminar2_2 from '../assets/seminar/seminar2/2.jpg';
import seminar2_3 from '../assets/seminar/seminar2/3.jpg';
import seminar2_4 from '../assets/seminar/seminar2/4.jpg';

import seminar3_1 from '../assets/seminar/seminar3/1.jpg';
import seminar3_2 from '../assets/seminar/seminar3/2.jpg';
import seminar3_3 from '../assets/seminar/seminar3/3.jpg';
import seminar3_4 from '../assets/seminar/seminar3/4.jpg';

// Visit images
import visit1 from '../assets/visit/1.jpg';
import visit2 from '../assets/visit/2.jpg';

// Visit1 images
import visit1_1 from '../assets/visit/visit1/1.jpg';
import visit1_2 from '../assets/visit/visit1/2.jpg';
import visit1_3 from '../assets/visit/visit1/3.jpg';
import visit1_4 from '../assets/visit/visit1/4.jpg';

const PRIMARY = "#18069e";

const galleryImages = [
  // Landing page
  { src: landing3, alt: "Landing Page 3" },
  { src: landing7, alt: "Landing Page 7" },
  { src: landing8, alt: "Landing Page 8" },
  { src: landing9, alt: "Landing Page 9" },
  // Seminar1
  { src: seminar1_1, alt: "Seminar 1-1" },
  { src: seminar1_2, alt: "Seminar 1-2" },
  { src: seminar1_3, alt: "Seminar 1-3" },
  { src: seminar1_4, alt: "Seminar 1-4" },
  // Seminar2
  { src: seminar2_1, alt: "Seminar 2-1" },
  { src: seminar2_2, alt: "Seminar 2-2" },
  { src: seminar2_3, alt: "Seminar 2-3" },
  { src: seminar2_4, alt: "Seminar 2-4" },
  // Seminar3
  { src: seminar3_1, alt: "Seminar 3-1" },
  { src: seminar3_2, alt: "Seminar 3-2" },
  { src: seminar3_3, alt: "Seminar 3-3" },
  { src: seminar3_4, alt: "Seminar 3-4" },
  // Visit
  { src: visit1, alt: "Visit 1" },
  { src: visit2, alt: "Visit 2" },
  // Visit1
  { src: visit1_1, alt: "Visit1 - 1" },
  { src: visit1_2, alt: "Visit1 - 2" },
  { src: visit1_3, alt: "Visit1 - 3" },
  { src: visit1_4, alt: "Visit1 - 4" },
];

const IMAGES_PER_PAGE = 8;

const Gallery: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIdx, setModalIdx] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(galleryImages.length / IMAGES_PER_PAGE);

  const openModal = (idx: number) => {
    setModalIdx(idx);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const prevImg = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setModalIdx(idx => (idx === 0 ? galleryImages.length - 1 : idx - 1));
  };

  const nextImg = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setModalIdx(idx => (idx === galleryImages.length - 1 ? 0 : idx + 1));
  };

  // Paginated images
  const startIdx = (currentPage - 1) * IMAGES_PER_PAGE;
  const paginatedImages = galleryImages.slice(startIdx, startIdx + IMAGES_PER_PAGE);

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen" style={{ background: "#edeafd" }}>
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-extrabold mb-4 text-center tracking-tight" style={{ color: PRIMARY, letterSpacing: "-1px" }}>Gallery</h1>
          <p className="text-gray-700 mb-6 text-center text-lg max-w-2xl mx-auto">
            Explore highlights from JBCCI activities, seminars, visits, and awards. Click any image for an upscaled view.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
            {paginatedImages.map((img, idx) => (
              <div
                key={startIdx + idx}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                onClick={() => openModal(startIdx + idx)}
                tabIndex={0}
                aria-label={`Open image: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-40 sm:h-44 md:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white text-xs px-3 py-2 opacity-90">
                  <span>{img.alt}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              className={`px-3 py-1 rounded-md font-bold ${currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-white text-black hover:bg-gray-200'}`}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              aria-label="Previous Page"
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`px-3 py-1 rounded-md font-bold ${currentPage === i + 1 ? 'bg-[#18069e] text-white' : 'bg-white text-black hover:bg-gray-200'}`}
                onClick={() => setCurrentPage(i + 1)}
                aria-label={`Go to page ${i + 1}`}
              >
                {i + 1}
              </button>
            ))}
            <button
              className={`px-3 py-1 rounded-md font-bold ${currentPage === totalPages ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-white text-black hover:bg-gray-200'}`}
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              aria-label="Next Page"
            >
              &gt;
            </button>
          </div>

          {/* Upscaled modal */}
          {modalOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
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
                  src={galleryImages[modalIdx].src}
                  alt={galleryImages[modalIdx].alt}
                  className="w-full max-h-[80vh] object-contain rounded-xl shadow-lg"
                />
                <button
                  onClick={nextImg}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white rounded-full px-3 py-1 text-2xl z-10"
                  aria-label="Next"
                >&gt;</button>
                <div className="mt-2 text-center text-white text-lg">
                  {galleryImages[modalIdx].alt}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Gallery;