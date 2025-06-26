import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Shield, 
  Users, 
  Award, 
  BookOpen, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin,
  ArrowUp,
  Calendar,
  CheckCircle,
  Star,
  Globe,
  Target,
  Zap
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-700" />
              <span className="text-xl font-bold text-gray-900">PSB</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
              >
                Leadership
              </button>
              <button 
                onClick={() => scrollToSection('news')}
                className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
              >
                News
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
              >
                Contact
              </button>
            </nav>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-2 space-y-1">
              {['Home', 'About', 'Services', 'Leadership', 'News', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace('leadership', 'team'))}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <Star className="h-4 w-4 mr-2" />
                Excellence in Professional Standards
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Advancing Professional
                <span className="text-blue-700 block">Standards & Ethics</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                The Professional Standards Bureau is dedicated to establishing, maintaining, and promoting 
                the highest standards of professional practice across industries through certification, 
                education, and advocacy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="inline-flex items-center px-8 py-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold group"
                >
                  Explore Services
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-700 hover:text-blue-700 transition-colors font-semibold"
                >
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-teal-200 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-700">25+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600">10K+</div>
                    <div className="text-sm text-gray-600">Professionals Certified</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">50+</div>
                    <div className="text-sm text-gray-600">Industry Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">98%</div>
                    <div className="text-sm text-gray-600">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Professional Standards Bureau
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded in 1998, PSB has been at the forefront of professional development, 
              setting industry standards and ensuring excellence across multiple sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Target className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To elevate professional standards through rigorous certification programs and continuous education initiatives.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                <Globe className="h-8 w-8 text-teal-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
              <p className="text-gray-600">
                A world where professional excellence is recognized, valued, and continuously advanced through innovation.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <Zap className="h-8 w-8 text-orange-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Values</h3>
              <p className="text-gray-600">
                Integrity, excellence, innovation, and commitment to lifelong learning and professional growth.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Choose PSB?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Industry Recognition</h4>
                      <p className="text-gray-600">Globally recognized certifications valued by employers worldwide.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Expert Faculty</h4>
                      <p className="text-gray-600">Learn from industry leaders and subject matter experts.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Continuous Support</h4>
                      <p className="text-gray-600">Ongoing professional development and career advancement resources.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-4xl font-bold text-blue-700 mb-2">2023</div>
                  <div className="text-gray-600 mb-4">Excellence Award Winner</div>
                  <div className="text-sm text-gray-500">
                    Recognized for outstanding contribution to professional development and standards advancement.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive professional development solutions designed to advance careers and maintain industry standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Award className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Certification</h3>
              <p className="text-gray-600 mb-4">
                Industry-recognized certification programs across multiple disciplines and specializations.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Comprehensive exam preparation</li>
                <li>• Continuing education requirements</li>
                <li>• Digital badge verification</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors">
                <BookOpen className="h-6 w-6 text-teal-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Training Programs</h3>
              <p className="text-gray-600 mb-4">
                Structured learning paths designed by experts to enhance professional competencies.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Online and in-person options</li>
                <li>• Self-paced learning modules</li>
                <li>• Interactive workshops</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
                <Users className="h-6 w-6 text-orange-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Corporate Solutions</h3>
              <p className="text-gray-600 mb-4">
                Customized training and certification programs for organizations and enterprises.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Team-based assessments</li>
                <li>• Custom curriculum development</li>
                <li>• Progress tracking dashboards</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <Shield className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Standards Development</h3>
              <p className="text-gray-600 mb-4">
                Collaborative development of industry standards and best practice guidelines.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Industry consultation</li>
                <li>• Research and analysis</li>
                <li>• Policy recommendations</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                <Calendar className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Events & Conferences</h3>
              <p className="text-gray-600 mb-4">
                Annual conferences, webinars, and networking events for professional development.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Keynote presentations</li>
                <li>• Panel discussions</li>
                <li>• Networking opportunities</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
                <CheckCircle className="h-6 w-6 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance Auditing</h3>
              <p className="text-gray-600 mb-4">
                Professional auditing services to ensure compliance with industry standards.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Comprehensive assessments</li>
                <li>• Detailed reporting</li>
                <li>• Improvement recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who guide our organization's vision and strategic direction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                  DS
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Dr. Sarah Chen</h3>
              <p className="text-blue-700 font-medium mb-3">Chief Executive Officer</p>
              <p className="text-gray-600 text-sm">
                25+ years in professional standards and organizational development with expertise in strategic planning and industry relations.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                  MR
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Michael Rodriguez</h3>
              <p className="text-teal-700 font-medium mb-3">Director of Certification</p>
              <p className="text-gray-600 text-sm">
                Expert in certification program development and assessment methodologies with 20+ years of experience in education.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                  EJ
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Emily Johnson</h3>
              <p className="text-orange-700 font-medium mb-3">Head of Standards Development</p>
              <p className="text-gray-600 text-sm">
                Leading authority in industry standards creation with extensive background in regulatory compliance and quality assurance.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                  DP
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 to-green-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">David Park</h3>
              <p className="text-green-700 font-medium mb-3">Chief Technology Officer</p>
              <p className="text-gray-600 text-sm">
                Technology leader driving digital transformation in professional development through innovative learning platforms.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                  LT
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Dr. Lisa Thompson</h3>
              <p className="text-purple-700 font-medium mb-3">Director of Research</p>
              <p className="text-gray-600 text-sm">
                Research scientist specializing in professional competency assessment and evidence-based practice methodologies.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-red-400 to-red-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                  JW
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-400 to-red-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">James Wilson</h3>
              <p className="text-red-700 font-medium mb-3">Corporate Relations Manager</p>
              <p className="text-gray-600 text-sm">
                Strategic partnership expert fostering relationships with industry leaders and corporate training providers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest News & Updates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about the latest developments, program updates, and industry insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <Calendar className="h-16 w-16 text-white opacity-50" />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">December 15, 2024</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                  New Certification Program Launch
                </h3>
                <p className="text-gray-600 mb-4">
                  Introducing our latest certification program in Digital Transformation Leadership, designed for modern professionals.
                </p>
                <button className="text-blue-700 font-medium hover:text-blue-800 transition-colors inline-flex items-center">
                  Read More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </article>

            <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="h-48 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                <Award className="h-16 w-16 text-white opacity-50" />
              </div>
              <div className="p-6">
                <div className="text-sm text-teal-600 font-medium mb-2">December 10, 2024</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">
                  Industry Excellence Awards 2024
                </h3>
                <p className="text-gray-600 mb-4">
                  Celebrating outstanding achievements in professional development and recognizing exemplary standards implementation.
                </p>
                <button className="text-teal-700 font-medium hover:text-teal-800 transition-colors inline-flex items-center">
                  Read More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </article>

            <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <Users className="h-16 w-16 text-white opacity-50" />
              </div>
              <div className="p-6">
                <div className="text-sm text-orange-600 font-medium mb-2">December 5, 2024</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-700 transition-colors">
                  Annual Conference 2025 Announced
                </h3>
                <p className="text-gray-600 mb-4">
                  Join us for our biggest event of the year featuring keynote speakers, workshops, and networking opportunities.
                </p>
                <button className="text-orange-700 font-medium hover:text-orange-800 transition-colors inline-flex items-center">
                  Read More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to advance your professional development? Contact us today to learn more about our programs and services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">Mon-Fri 9:00 AM - 6:00 PM EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@psb.org</p>
                  <p className="text-gray-600">support@psb.org</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-orange-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">123 Professional Plaza</p>
                  <p className="text-gray-600">Suite 456, Business District</p>
                  <p className="text-gray-600">New York, NY 10001</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option>General Inquiry</option>
                    <option>Certification Programs</option>
                    <option>Corporate Training</option>
                    <option>Partnership Opportunities</option>
                    <option>Technical Support</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your needs and how we can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">Professional Standards Bureau</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Advancing professional excellence through certification, education, and standards development since 1998.
              </p>
              <div className="flex space-x-4">
                <button className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                  <Globe className="h-5 w-5" />
                </button>
                <button className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                  <Mail className="h-5 w-5" />
                </button>
                <button className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                  <Phone className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('team')} className="hover:text-white transition-colors">Leadership</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Certification Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Training Materials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Industry Standards</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Resources</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Professional Standards Bureau. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {scrollY > 500 && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-colors z-50"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}

export default App;