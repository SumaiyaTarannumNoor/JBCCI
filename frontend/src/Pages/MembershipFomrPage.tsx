import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import MembershipForm from '../Forms/MembershipForm';

const MembershipFormPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div
        className="pt-16 min-h-screen flex flex-col bg-gradient-to-b from-[#edeafd] to-[#fff8e3]"
      >
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
              <MembershipForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MembershipFormPage;