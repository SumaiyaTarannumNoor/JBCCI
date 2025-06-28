import React, { useState } from 'react';
import { 
  User, 
  Building2, 
  Calendar, 
  Phone, 
  Mail, 
  Globe, 
  MapPin, 
  CreditCard,
  FileText,
  Users,
  Award,
  Bell,
  Search,
  Menu,
  Home,
  Info,
  Folder,
  HelpCircle,
  Settings,
  LogOut,
  ChevronDown,
  ExternalLink,
  X
} from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const PRIMARY = "#18069e";
const SECONDARY = "#e6aa05";

// Color palette based on PRIMARY and SECONDARY
const colors = {
  primary: {
    50: '#f0f0ff',
    100: '#e0e0ff',
    200: '#c7c7ff',
    300: '#a5a5ff',
    400: '#8080ff',
    500: '#5c5cff',
    600: '#4747ff',
    700: '#3838ff',
    800: '#2929e6',
    900: PRIMARY,
    950: '#0d0566'
  },
  secondary: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: SECONDARY,
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03'
  },
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d'
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827'
  }
};

const MemberProfile = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'company', label: 'Company Information', icon: Building2, badge: 'NEW' },
    { id: 'representative', label: 'Representative Information', icon: User, badge: 'NEW' },
    { id: 'business', label: 'Business Activity Information', icon: FileText, badge: 'NEW' },
    { id: 'vertical', label: 'Vertical Experience Information', icon: Award, badge: 'NEW' },
    { id: 'products', label: 'Products & Services Information', icon: Folder, badge: 'NEW' },
    { id: 'compliance', label: 'Compliance Information', icon: FileText, badge: 'NEW' },
    { id: 'upload', label: 'Upload Photos & Files', icon: FileText, badge: 'NEW' },
    { id: 'change', label: 'Change Request', icon: Settings },
    { id: 'payment', label: 'Payment History', icon: CreditCard },
    { id: 'helpdesk', label: 'Online helpdesk', icon: HelpCircle, notification: true },
    { id: 'social', label: 'Social Links', icon: Users },
    { id: 'password', label: 'Change Password', icon: Settings },
    { id: 'logout', label: 'Logout', icon: LogOut }
  ];

  const services = [
    'BASIS-BRAC Bank Co-Branded Credit Card (VISA)',
    'BASIS-EBL Co-Branded Credit Card (Mastercard)',
    'BASIS-MTB-VISA Co-Branded Corporate Business Credit card',
    'Insurtech Regulatory Sandbox',
    'BASIS-UCB BANK CO-BRANDED CREDIT CARD (VISA)',
    'Credit Card- Audit Service (Refill)',
    'Rental Facility'
  ];

  const events = [
    'BASIS Executive Council Election 2024-2026',
    'BASIS Picnic 2023',
    'BASIS Japan Day',
    'Sourcing Bangladesh 2021',
    'WCIT Bangladesh 2021: FREE EXHIBITION BOOTH OFFER Bangladesh Pavilion',
    'DIGITAL WORLD 2020',
    'CeBIT Thailand',
    'Japan IT Week'
  ];

  const resources = [
    'BASIS Foreign Exchange Manual 2021',
    'BASIS HR HANDBOOK'
  ];

  const Sidebar = ({ className = "" }) => (
    <div className={`${className} bg-white shadow-lg h-full overflow-y-auto`}>
      <div className="p-4 lg:p-6">
        {/* Mobile close button */}
        <div className="flex justify-end lg:hidden mb-4">
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-center mb-6">
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <div className="text-xs lg:text-sm text-white px-2 py-1 rounded" style={{ backgroundColor: colors.success[500] }}>
              93.1% Complete
            </div>
          </div>
          <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full mx-auto mb-2 flex items-center justify-center" style={{ backgroundColor: colors.primary[100] }}>
            <Building2 className="w-6 h-6 lg:w-8 lg:h-8" style={{ color: colors.primary[600] }} />
          </div>
          <h3 className="font-semibold text-gray-800 text-sm lg:text-base">TECHKNOWGRAM LIMITED</h3>
        </div>

        <nav className="space-y-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer transition-colors ${
                  activeTab === item.id
                    ? 'border-l-4 text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                style={activeTab === item.id ? {
                  backgroundColor: colors.primary[900],
                  borderLeftColor: colors.secondary[500]
                } : {}}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span className="text-xs lg:text-sm">{item.label}</span>
                </div>
                <div className="flex items-center space-x-1">
                  {item.badge && (
                    <span className="text-xs text-white px-1.5 py-0.5 rounded" style={{ backgroundColor: colors.success[500] }}>
                      {item.badge}
                    </span>
                  )}
                  {item.notification && (
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.secondary[500] }}></div>
                  )}
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );

  return (
    <>
      <Navbar showLoginButton={false} />
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Header inside profile (optional - could be removed if Navbar is enough) */}
        {/* <header className="bg-white shadow-sm border-b sticky top-0 z-40"> ... </header> */}

        <div className="flex relative">
          {/* Mobile Sidebar Overlay */}
          {sidebarOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Desktop Sidebar */}
          <Sidebar className="hidden lg:block w-80 fixed left-0 top-16 bottom-0 z-20" />

          {/* Mobile Sidebar */}
          <Sidebar className={`lg:hidden fixed left-0 top-0 bottom-0 w-80 z-40 transform transition-transform duration-300 ease-in-out ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`} />

          {/* Main Content */}
          <div className="flex-1 lg:ml-80 p-4 lg:p-6">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-6">
              {/* Company Information */}
              <div className="xl:col-span-2">
                <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6">
                  <div className="mb-4 p-3 rounded-md" style={{ backgroundColor: colors.secondary[50], borderColor: colors.secondary[200], border: '1px solid' }}>
                    <div className="flex items-start space-x-2">
                      <Bell className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.secondary[600] }} />
                      <span className="text-sm" style={{ color: colors.secondary[800] }}>
                        Please check your notice section regularly to get the latest updates.
                      </span>
                    </div>
                  </div>

                  <h2 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-6" style={{ color: colors.primary[900] }}>
                    COMPANY INFORMATION
                  </h2>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-gray-600">Name</label>
                        <p className="font-medium text-sm lg:text-base">TechKnowGram Limited</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">BASIS Membership No</label>
                        <p className="font-medium text-sm lg:text-base">GE-19-06-737</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-gray-600">Prev. Membership No</label>
                        <p className="font-medium text-sm lg:text-base">A737</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Membership Type</label>
                        <p className="font-medium text-sm lg:text-base">Limited Company</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-gray-600">Year of Establishment</label>
                        <p className="font-medium text-sm lg:text-base">2018</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Contact No</label>
                        <p className="font-medium text-sm lg:text-base">01819250309</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-gray-600">E-mail</label>
                        <p className="font-medium text-sm lg:text-base break-all">ahmed.kabir@techknowgram.com</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Website</label>
                        <p className="font-medium text-sm lg:text-base">
                          <a href="#" className="flex items-center space-x-1" style={{ color: colors.primary[600] }}>
                            <span className="break-all">www.TechKnowGram.com</span>
                            <ExternalLink className="w-3 h-3 flex-shrink-0" />
                          </a>
                        </p>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-gray-600">Address</label>
                      <p className="font-medium text-sm lg:text-base">6A/10 Dewan Tower 6B, Road 13, Dhanmondi, Dhaka</p>
                    </div>
                  </div>
                </div>

                {/* Services and Events */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mt-4 lg:mt-6">
                  {/* Get Services */}
                  <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6">
                    <h3 className="text-lg font-semibold mb-4" style={{ color: colors.primary[900] }}>
                      GET SERVICES
                    </h3>
                    <div className="flex space-x-2 mb-4">
                      <button 
                        className="px-3 lg:px-4 py-2 text-white rounded-md text-xs lg:text-sm font-medium"
                        style={{ backgroundColor: colors.success[500] }}
                      >
                        Paid Service
                      </button>
                      <button className="px-3 lg:px-4 py-2 bg-gray-100 text-gray-600 rounded-md text-xs lg:text-sm">
                        Free Service
                      </button>
                    </div>
                    <div className="space-y-2 max-h-48 lg:max-h-64 overflow-y-auto">
                      {services.map((service, index) => (
                        <div key={index} className="flex items-start space-x-2 text-xs lg:text-sm">
                          <ChevronDown className="w-3 h-3 text-gray-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Member Events */}
                  <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6">
                    <h3 className="text-lg font-semibold mb-4" style={{ color: colors.primary[900] }}>
                      MEMBER EVENTS
                    </h3>
                    <div className="space-y-2 max-h-48 lg:max-h-64 overflow-y-auto">
                      {events.map((event, index) => (
                        <div key={index} className="flex items-start space-x-2 text-xs lg:text-sm">
                          <ChevronDown className="w-3 h-3 text-gray-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{event}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="space-y-4 lg:space-y-6">
                {/* BASIS America Desk */}
                <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6">
                  <h3 className="text-lg font-semibold mb-4" style={{ color: colors.primary[900] }}>
                    BASIS AMERICA DESK
                  </h3>
                  <button 
                    className="w-full py-2 text-white rounded-md text-sm font-medium transition-colors hover:opacity-90"
                    style={{ backgroundColor: colors.success[500] }}
                  >
                    Register Now
                  </button>
                </div>

                {/* Payment Information */}
                <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6">
                  <h3 className="text-lg font-semibold mb-4" style={{ color: colors.primary[900] }}>
                    PAYMENT INFORMATION
                  </h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">Total Dues</span>
                    <span className="text-lg lg:text-xl font-bold" style={{ color: colors.secondary[600] }}>10,000.00</span>
                  </div>
                  <button 
                    className="w-full py-2 text-white rounded-md text-sm font-medium transition-colors hover:opacity-90"
                    style={{ backgroundColor: colors.success[500] }}
                  >
                    Pay Now
                  </button>
                </div>

                {/* Service Status */}
                <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6">
                  <h3 className="text-lg font-semibold mb-4" style={{ color: colors.primary[900] }}>
                    YOUR SERVICES STATUS
                  </h3>
                  <div className="flex space-x-2 mb-4">
                    <button 
                      className="px-3 lg:px-4 py-2 text-white rounded-md text-xs lg:text-sm font-medium"
                      style={{ backgroundColor: colors.success[500] }}
                    >
                      Existing Service
                    </button>
                    <button className="px-3 lg:px-4 py-2 bg-gray-100 text-gray-600 rounded-md text-xs lg:text-sm">
                      Requested Service
                    </button>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.success[500] }}></div>
                    <span className="text-sm">10% Export Cash Incentive</span>
                  </div>
                  <button 
                    className="px-4 py-2 text-white rounded-md text-sm font-medium transition-colors hover:opacity-90"
                    style={{ backgroundColor: colors.secondary[500] }}
                  >
                    View All
                  </button>
                </div>

                {/* Resources and Notices */}
                <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6">
                  <h3 className="text-lg font-semibold mb-4" style={{ color: colors.primary[900] }}>
                    RESOURCES AND NOTICES
                  </h3>
                  <div className="flex space-x-2 mb-4">
                    <button 
                      className="px-3 lg:px-4 py-2 text-white rounded-md text-xs lg:text-sm font-medium"
                      style={{ backgroundColor: colors.success[500] }}
                    >
                      Resources
                    </button>
                    <button className="px-3 lg:px-4 py-2 bg-gray-100 text-gray-600 rounded-md text-xs lg:text-sm">
                      Member Notices
                    </button>
                  </div>
                  <div className="space-y-2">
                    {resources.map((resource, index) => (
                      <div key={index} className="flex items-start space-x-2 text-xs lg:text-sm">
                        <ChevronDown className="w-3 h-3 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{resource}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MemberProfile;