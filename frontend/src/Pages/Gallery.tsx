import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const PRIMARY = "#18069e";

const Gallery: React.FC = () => (
  <>
    <Navbar />
    <main className="pt-20 min-h-screen" style={{ background: "#edeafd" }}>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6" style={{ color: PRIMARY }}>Gallery</h1>
        <p className="text-gray-700 mb-4">
          {/* Replace with gallery content */}
          This page will showcase the gallery of JBCCI events and activities.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
          {[1,2,3,4,5,6,7,8].map(i => (
            <div key={i} className="w-full aspect-square bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-2xl font-bold">
              Img {i}
            </div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Gallery;