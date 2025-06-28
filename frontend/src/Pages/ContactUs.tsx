import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const PRIMARY = "#18069e";
const SECONDARY = "#e6aa05";

const officials = [
  { name: "Mr. Shahriar Omar", role: "Manager, JBCCI" },
  { name: "Mr. Md. Evnol Islam", role: "Sr. Executive Officer, JBCCI" },
  { name: "Mr. Md. Sowadul Islam", role: "Executive Officer, JBCCI" },
  { name: "Mr. Md. Riad Talukdar", role: "Office Assistant, JBCCI" },
];

const ContactUs: React.FC = () => (
  <>
    <Navbar />
    <div className="pt-16 min-h-screen" style={{ background: "#fff" }}>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-2" style={{ color: PRIMARY }}>Contact Us</h1>
          <div className="flex justify-center mb-3">
            <div className="h-1 w-20 rounded" style={{ background: `linear-gradient(to right, ${PRIMARY}, ${SECONDARY}, ${PRIMARY})` }}></div>
          </div>
          <p className="text-lg font-semibold" style={{ color: SECONDARY }}>Be our member</p>
          <p className="text-base text-gray-700">
            We are here to help! Reach out for membership, information, or support.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="rounded-xl p-6 shadow-sm" style={{ background: PRIMARY + "11" }}>
              <h2 className="font-bold text-lg mb-2" style={{ color: PRIMARY }}>General Contact</h2>
              <p className="text-gray-700"><span className="font-semibold">Phone:</span> +880-2226603083</p>
              <p className="text-gray-700"><span className="font-semibold">Fax:</span> 880-2-55034006</p>
              <p className="text-gray-700"><span className="font-semibold">Email:</span> <a href="mailto:info@jbcci-bd.com" className="hover:underline" style={{ color: SECONDARY }}>info@jbcci-bd.com</a></p>
              <p className="text-gray-700"><span className="font-semibold">Email:</span> <a href="mailto:jbcci@citech-bd.com" className="hover:underline" style={{ color: SECONDARY }}>jbcci@citech-bd.com</a></p>
            </div>
            <div className="rounded-xl p-6 shadow-sm" style={{ background: SECONDARY + "11" }}>
              <h2 className="font-bold text-lg mb-2" style={{ color: SECONDARY }}>For Information</h2>
              <p className="text-gray-700"><span className="font-semibold">Phone:</span> +880-2226603083</p>
              <p className="text-gray-700"><span className="font-semibold">Email:</span> <a href="mailto:info@jbcci-bd.com" className="hover:underline" style={{ color: PRIMARY }}>info@jbcci-bd.com</a></p>
              <p className="text-gray-700"><span className="font-semibold">Email:</span> <a href="mailto:jbcci@citech-bd.com" className="hover:underline" style={{ color: PRIMARY }}>jbcci@citech-bd.com</a></p>
            </div>
            <div className="rounded-xl p-6 shadow-sm" style={{ background: PRIMARY + "11" }}>
              <h2 className="font-bold text-lg mb-2" style={{ color: PRIMARY }}>Office Secretariat</h2>
              <p className="text-gray-700"><span className="font-semibold">Mobile:</span> +880-1704651565</p>
              <p className="text-gray-700"><span className="font-semibold">Mobile:</span> +880-1784864238</p>
              <p className="text-gray-700"><span className="font-semibold">Mobile:</span> +880-1518372024</p>
              <p className="text-gray-700"><span className="font-semibold">Mobile:</span> +880-1717305048</p>
              <p className="text-gray-700"><span className="font-semibold">Email:</span> <a href="mailto:info@jbcci-bd.com" className="hover:underline" style={{ color: SECONDARY }}>info@jbcci-bd.com</a></p>
              <p className="text-gray-700"><span className="font-semibold">Email:</span> <a href="mailto:jbcci@citech-bd.com" className="hover:underline" style={{ color: SECONDARY }}>jbcci@citech-bd.com</a></p>
            </div>
            <div className="rounded-xl p-6 shadow-sm" style={{ background: SECONDARY + "11" }}>
              <h2 className="font-bold text-lg mb-2" style={{ color: SECONDARY }}>Our Address</h2>
              <p className="text-gray-700">
                House-1/B, Flat #5A, (4th Floor),<br />
                Block-I, Road-8, Banani, Dhaka-1213.
              </p>
            </div>
          </div>
          {/* Contact Form */}
          <div className="flex flex-col h-full">
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-10">
              <h3 className="text-2xl font-semibold mb-6 text-center" style={{ color: PRIMARY }}>Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2" style={{ color: PRIMARY }}>
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#18069e] focus:border-transparent transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2" style={{ color: PRIMARY }}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#18069e] focus:border-transparent transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: PRIMARY }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#18069e] focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: PRIMARY }}>
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#18069e] focus:border-transparent transition-colors"
                  >
                    <option>General Inquiry</option>
                    <option>Membership Application</option>
                    <option>Business Partnership</option>
                    <option>Event Information</option>
                    <option>Media & Press</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: PRIMARY }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#18069e] focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg font-semibold"
                  style={{ background: PRIMARY, color: "#fff" }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Map + Officials stacked */}
        <div className="flex flex-col items-center mb-12">
          {/* Officials */}
          <div
            className="w-full mb-20 max-w-4xl mx-auto rounded-xl p-8 shadow-sm"
            style={{
              width: "800px",
              maxWidth: "100%",
              background: "linear-gradient(to right, #e6aa0522, #18069e22)",
            }}
          >
            <h2 className="font-bold text-lg mb-6 text-center" style={{ color: PRIMARY }}>JBCCI OFFICIALS</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {officials.map((off, idx) => (
                <li key={idx} className="flex items-center space-x-5">
                  <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-2xl font-bold shadow-inner">
                    Img
                  </div>
                  <div>
                    <span className="block font-semibold text-lg" style={{ color: PRIMARY }}>{off.name}</span>
                    <span className="block text-gray-600 text-base">{off.role}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Map Placeholder */}
          <div
            className="w-full max-w-4xl mx-auto flex justify-center items-center mb-8"
            style={{ width: "800px", height: "600px", maxWidth: "100%" }}
          >
            <div className="w-full h-full flex items-center justify-center rounded-xl bg-gray-200 border border-gray-300 text-gray-400 text-2xl font-bold shadow">
              Map Placeholder (800x600)
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 text-sm pt-10 border-t" style={{ borderColor: SECONDARY }}>
          Copyright ©2018 <span style={{ color: PRIMARY, fontWeight: "bold" }}>ThemeFuse</span>. All Rights Reserved
        </footer>
      </section>
    </div>
    <Footer />
  </>
);

export default ContactUs;