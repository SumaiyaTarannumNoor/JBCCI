import React, { useState } from 'react';
import { Building2, User, Mail, Phone, MapPin, Calendar, FileText, Check, AlertCircle } from 'lucide-react';

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    companyType: '',
    businessCategory: '',
    yearEstablished: '',
    companyAddress: '',
    website: '',
    companyPhone: '',
    companyEmail: '',
    
    // Contact Person Information
    contactPersonName: '',
    designation: '',
    contactEmail: '',
    contactPhone: '',
    
    // Business Details
    numberOfEmployees: '',
    annualTurnover: '',
    businessDescription: '',
    
    // Membership Information
    membershipType: '',
    referredBy: '',
    objectives: '',
    
    // Additional Documents
    tradeLicense: null,
    incorporationCertificate: null,
    vatCertificate: null
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const membershipTypes = [
    'Regular Member',
    'Associate Member', 
    'Life Member',
    'Corporate Member'
  ];

  const businessCategories = [
    'Manufacturing',
    'Trading',
    'Service',
    'Technology',
    'Healthcare',
    'Education',
    'Construction',
    'Financial Services',
    'Agriculture',
    'Transportation',
    'Other'
  ];

  const companyTypes = [
    'Private Limited Company',
    'Public Limited Company',
    'Partnership',
    'Sole Proprietorship',
    'Joint Venture',
    'Branch Office',
    'Representative Office'
  ];

  const validateForm = () => {
    const newErrors = {};
    
    // Required field validation
    if (!formData.companyName) newErrors.companyName = 'Company name is required';
    if (!formData.companyType) newErrors.companyType = 'Company type is required';
    if (!formData.businessCategory) newErrors.businessCategory = 'Business category is required';
    if (!formData.companyAddress) newErrors.companyAddress = 'Company address is required';
    if (!formData.companyEmail) newErrors.companyEmail = 'Company email is required';
    if (!formData.companyPhone) newErrors.companyPhone = 'Company phone is required';
    if (!formData.contactPersonName) newErrors.contactPersonName = 'Contact person name is required';
    if (!formData.designation) newErrors.designation = 'Designation is required';
    if (!formData.contactEmail) newErrors.contactEmail = 'Contact email is required';
    if (!formData.contactPhone) newErrors.contactPhone = 'Contact phone is required';
    if (!formData.membershipType) newErrors.membershipType = 'Membership type is required';
    if (!formData.businessDescription) newErrors.businessDescription = 'Business description is required';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.companyEmail && !emailRegex.test(formData.companyEmail)) {
      newErrors.companyEmail = 'Invalid email format';
    }
    if (formData.contactEmail && !emailRegex.test(formData.contactEmail)) {
      newErrors.contactEmail = 'Invalid email format';
    }

    // Phone validation (basic)
    const phoneRegex = /^[0-9+\-\s()]+$/;
    if (formData.companyPhone && !phoneRegex.test(formData.companyPhone)) {
      newErrors.companyPhone = 'Invalid phone format';
    }
    if (formData.contactPhone && !phoneRegex.test(formData.contactPhone)) {
      newErrors.contactPhone = 'Invalid phone format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitSuccess(true);
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          companyName: '', companyType: '', businessCategory: '', yearEstablished: '',
          companyAddress: '', website: '', companyPhone: '', companyEmail: '',
          contactPersonName: '', designation: '', contactEmail: '', contactPhone: '',
          numberOfEmployees: '', annualTurnover: '', businessDescription: '',
          membershipType: '', referredBy: '', objectives: '',
          tradeLicense: null, incorporationCertificate: null, vatCertificate: null
        });
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files[0]
    }));
  };

  if (submitSuccess) {
    return (
      <div className="h-screen bg-gray-100 flex items-center justify-center p-4 mt-10 mb-10">
        <div className="bg-white border border-gray-200 p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h2>
          <p className="text-gray-600 mb-4">
            Thank you for your membership application. We will review your submission and contact you soon.
          </p>
          <div className="text-sm text-gray-500">
            Application ID: JBCCI-{Date.now().toString().slice(-6)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Fixed Header */}
      <div className="bg-white border-b border-gray-200 flex-shrink-0">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-900">JBCCI Membership Application</h1>
          <p className="text-gray-600 mt-1">Japan-Bangladesh Chamber of Commerce & Industry</p>
        </div>
      </div>

      {/* Scrollable Content Container */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-6">
          <div className="bg-white border border-gray-200">
          
          {/* Company Information Section */}
          <div className="bg-blue-600 text-white p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <Building2 className="w-5 h-5" />
              <h2 className="text-lg font-semibold">Company Information</h2>
            </div>
          </div>
          
          <div className="p-6 border-b border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.companyName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter company name"
                />
                {errors.companyName && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.companyName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Type *
                </label>
                <select
                  name="companyType"
                  value={formData.companyType}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.companyType ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select company type</option>
                  {companyTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.companyType && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.companyType}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Category *
                </label>
                <select
                  name="businessCategory"
                  value={formData.businessCategory}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.businessCategory ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select business category</option>
                  {businessCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                {errors.businessCategory && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.businessCategory}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Year Established
                </label>
                <input
                  type="number"
                  name="yearEstablished"
                  value={formData.yearEstablished}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., 2010"
                  min="1900"
                  max={new Date().getFullYear()}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Address *
                </label>
                <textarea
                  name="companyAddress"
                  value={formData.companyAddress}
                  onChange={handleInputChange}
                  rows={3}
                  className={`w-full px-3 py-2 border focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.companyAddress ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter complete company address"
                />
                {errors.companyAddress && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.companyAddress}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="https://www.example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Phone *
                </label>
                <input
                  type="tel"
                  name="companyPhone"
                  value={formData.companyPhone}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.companyPhone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="+880-XXX-XXXXXXX"
                />
                {errors.companyPhone && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.companyPhone}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Email *
                </label>
                <input
                  type="email"
                  name="companyEmail"
                  value={formData.companyEmail}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.companyEmail ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="company@example.com"
                />
                {errors.companyEmail && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.companyEmail}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Contact Person Information */}
          <div className="bg-green-600 text-white p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <User className="w-5 h-5" />
              <h2 className="text-lg font-semibold">Contact Person Information</h2>
            </div>
          </div>

          <div className="p-6 border-b border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Person Name *
                </label>
                <input
                  type="text"
                  name="contactPersonName"
                  value={formData.contactPersonName}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border focus:ring-1 focus:ring-green-500 focus:border-green-500 ${
                    errors.contactPersonName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter contact person name"
                />
                {errors.contactPersonName && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.contactPersonName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Designation *
                </label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border focus:ring-1 focus:ring-green-500 focus:border-green-500 ${
                    errors.designation ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="e.g., Managing Director, CEO"
                />
                {errors.designation && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.designation}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Email *
                </label>
                <input
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border focus:ring-1 focus:ring-green-500 focus:border-green-500 ${
                    errors.contactEmail ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="contact@example.com"
                />
                {errors.contactEmail && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.contactEmail}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Phone *
                </label>
                <input
                  type="tel"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border focus:ring-1 focus:ring-green-500 focus:border-green-500 ${
                    errors.contactPhone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="+880-XXX-XXXXXXX"
                />
                {errors.contactPhone && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.contactPhone}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Business Details */}
          <div className="bg-purple-600 text-white p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5" />
              <h2 className="text-lg font-semibold">Business Details</h2>
            </div>
          </div>

          <div className="p-6 border-b border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Employees
                </label>
                <input
                  type="number"
                  name="numberOfEmployees"
                  value={formData.numberOfEmployees}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="e.g., 50"
                  min="1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Turnover (BDT)
                </label>
                <input
                  type="text"
                  name="annualTurnover"
                  value={formData.annualTurnover}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="e.g., 10,00,000"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Description *
                </label>
                <textarea
                  name="businessDescription"
                  value={formData.businessDescription}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full px-3 py-2 border focus:ring-1 focus:ring-purple-500 focus:border-purple-500 ${
                    errors.businessDescription ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Describe your business activities, products, and services"
                />
                {errors.businessDescription && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.businessDescription}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Membership Information */}
          <div className="bg-orange-600 text-white p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5" />
              <h2 className="text-lg font-semibold">Membership Information</h2>
            </div>
          </div>

          <div className="p-6 border-b border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Membership Type *
                </label>
                <select
                  name="membershipType"
                  value={formData.membershipType}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border focus:ring-1 focus:ring-orange-500 focus:border-orange-500 ${
                    errors.membershipType ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select membership type</option>
                  {membershipTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.membershipType && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.membershipType}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Referred By
                </label>
                <input
                  type="text"
                  name="referredBy"
                  value={formData.referredBy}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Name of referring member (if any)"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Objectives for Joining JBCCI
                </label>
                <textarea
                  name="objectives"
                  value={formData.objectives}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="What do you hope to achieve through JBCCI membership?"
                />
              </div>
            </div>
          </div>

          {/* Document Upload */}
          <div className="bg-teal-600 text-white p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5" />
              <h2 className="text-lg font-semibold">Supporting Documents</h2>
            </div>
          </div>

          <div className="p-6 border-b border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Trade License
                </label>
                <input
                  type="file"
                  name="tradeLicense"
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                />
                <p className="mt-1 text-xs text-gray-500">PDF, JPG, PNG (Max 5MB)</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Incorporation Certificate
                </label>
                <input
                  type="file"
                  name="incorporationCertificate"
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                />
                <p className="mt-1 text-xs text-gray-500">PDF, JPG, PNG (Max 5MB)</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  VAT Certificate
                </label>
                <input
                  type="file"
                  name="vatCertificate"
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                />
                <p className="mt-1 text-xs text-gray-500">PDF, JPG, PNG (Max 5MB)</p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <p className="text-sm text-gray-600">
                * Required fields. All information will be kept confidential.
              </p>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 border border-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </div>
                ) : (
                  'Submit Application'
                )}
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipForm;