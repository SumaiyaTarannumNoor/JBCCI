import React, { useState } from 'react';
import {
  Building2,
  User,
  FileText,
  Calendar,
  FileCheck2,
  Check,
  AlertCircle,
} from 'lucide-react';

const stepLabels = [
  {
    label: 'Company Information',
    icon: <Building2 className="w-5 h-5 inline text-blue-700 mr-1" />,
  },
  {
    label: 'Contact Person Information',
    icon: <User className="w-5 h-5 inline text-green-700 mr-1" />,
  },
  {
    label: 'Business Details',
    icon: <FileText className="w-5 h-5 inline text-purple-700 mr-1" />,
  },
  {
    label: 'Membership Information',
    icon: <Calendar className="w-5 h-5 inline text-orange-700 mr-1" />,
  },
  {
    label: 'Supporting Documents',
    icon: <FileCheck2 className="w-5 h-5 inline text-teal-700 mr-1" />,
  },
];

const MembershipForm = () => {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    companyName: '',
    companyType: '',
    businessCategory: '',
    yearEstablished: '',
    companyAddress: '',
    website: '',
    companyPhone: '',
    companyEmail: '',
    contactPersonName: '',
    designation: '',
    contactEmail: '',
    contactPhone: '',
    numberOfEmployees: '',
    annualTurnover: '',
    businessDescription: '',
    membershipType: '',
    referredBy: '',
    objectives: '',
    tradeLicense: null as File | null,
    incorporationCertificate: null as File | null,
    vatCertificate: null as File | null,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const membershipTypes = [
    'Regular Member',
    'Associate Member',
    'Life Member',
    'Corporate Member',
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
    'Other',
  ];

  const companyTypes = [
    'Private Limited Company',
    'Public Limited Company',
    'Partnership',
    'Sole Proprietorship',
    'Joint Venture',
    'Branch Office',
    'Representative Office',
  ];

  const validateStep = (currentStep = step) => {
    const newErrors: { [key: string]: string } = {};
    if (currentStep === 0) {
      if (!formData.companyName) newErrors.companyName = 'Company name is required';
      if (!formData.companyType) newErrors.companyType = 'Company type is required';
      if (!formData.businessCategory) newErrors.businessCategory = 'Business category is required';
      if (!formData.companyAddress) newErrors.companyAddress = 'Company address is required';
      if (!formData.companyEmail) newErrors.companyEmail = 'Company email is required';
      if (!formData.companyPhone) newErrors.companyPhone = 'Company phone is required';
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (formData.companyEmail && !emailRegex.test(formData.companyEmail)) {
        newErrors.companyEmail = 'Invalid email format';
      }
      // Phone validation (basic)
      const phoneRegex = /^[0-9+\-\s()]+$/;
      if (formData.companyPhone && !phoneRegex.test(formData.companyPhone)) {
        newErrors.companyPhone = 'Invalid phone format';
      }
    }
    if (currentStep === 1) {
      if (!formData.contactPersonName) newErrors.contactPersonName = 'Contact person name is required';
      if (!formData.designation) newErrors.designation = 'Designation is required';
      if (!formData.contactEmail) newErrors.contactEmail = 'Contact email is required';
      if (!formData.contactPhone) newErrors.contactPhone = 'Contact phone is required';
      if (formData.contactEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)) {
        newErrors.contactEmail = 'Invalid email format';
      }
      const phoneRegex = /^[0-9+\-\s()]+$/;
      if (formData.contactPhone && !phoneRegex.test(formData.contactPhone)) {
        newErrors.contactPhone = 'Invalid phone format';
      }
    }
    if (currentStep === 2) {
      if (!formData.businessDescription) newErrors.businessDescription = 'Business description is required';
    }
    if (currentStep === 3) {
      if (!formData.membershipType) newErrors.membershipType = 'Membership type is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep(step + 1);
  };
  const handlePrev = () => setStep(step - 1);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files && files[0] ? files[0] : null,
    }));
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1800));
      setSubmitSuccess(true);
      setTimeout(() => {
        setFormData({
          companyName: '',
          companyType: '',
          businessCategory: '',
          yearEstablished: '',
          companyAddress: '',
          website: '',
          companyPhone: '',
          companyEmail: '',
          contactPersonName: '',
          designation: '',
          contactEmail: '',
          contactPhone: '',
          numberOfEmployees: '',
          annualTurnover: '',
          businessDescription: '',
          membershipType: '',
          referredBy: '',
          objectives: '',
          tradeLicense: null,
          incorporationCertificate: null,
          vatCertificate: null,
        });
        setSubmitSuccess(false);
        setStep(0);
      }, 3500);
    } catch {}
    finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-[300px] flex items-center justify-center p-8">
        <div className="bg-white border border-gray-200 p-8 max-w-md w-full text-center rounded-2xl shadow">
          <div className="w-16 h-16 bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-4 rounded-full">
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
    <div className="w-full flex justify-center">
      <div className="w-full max-w-6xl">
        {/* Step Navigation Bar with icons and labels */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          {stepLabels.map((stepObj, idx) => (
            <div key={idx} className="flex items-center">
              <div
                className={`
                  px-5 py-2 rounded-full text-xs font-semibold
                  transition
                  flex items-center gap-1
                  ${step === idx
                    ? 'bg-blue-600 text-white'
                    : step > idx
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-400'
                  }
                  cursor-pointer select-none
                  ${step === idx ? 'shadow-md scale-105' : ''}
                `}
                onClick={() => (idx < step || idx === step ? setStep(idx) : undefined)}
                style={{ minWidth: 200, textAlign: 'center' }}
              >
                {stepObj.icon}
                {stepObj.label}
              </div>
              {idx < stepLabels.length - 1 && (
                <div
                  className={`w-5 h-1 ${
                    step > idx ? 'bg-green-500' : 'bg-gray-200'
                  } rounded transition-all`}
                ></div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow p-6 md:p-10 mb-4">
          {step === 0 && (
            <>
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-5 h-5 text-blue-700" />
                <h2 className="text-lg font-semibold text-blue-700">{stepLabels[0].label}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Company Name *</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded ${errors.companyName ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter company name"
                  />
                  {errors.companyName && (
                    <span className="text-xs text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.companyName}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Company Type *</label>
                  <select
                    name="companyType"
                    value={formData.companyType}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded ${errors.companyType ? 'border-red-500' : 'border-gray-300'}`}
                  >
                    <option value="">Select company type</option>
                    {companyTypes.map(type => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                  {errors.companyType && (
                    <span className="text-xs text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.companyType}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Business Category *</label>
                  <select
                    name="businessCategory"
                    value={formData.businessCategory}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded ${errors.businessCategory ? 'border-red-500' : 'border-gray-300'}`}
                  >
                    <option value="">Select business category</option>
                    {businessCategories.map(cat => (
                      <option key={cat}>{cat}</option>
                    ))}
                  </select>
                  {errors.businessCategory && (
                    <span className="text-xs text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.businessCategory}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Year Established</label>
                  <input
                    type="number"
                    name="yearEstablished"
                    value={formData.yearEstablished}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    placeholder="e.g., 2010"
                    min="1900"
                    max={new Date().getFullYear()}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1 text-gray-700">Company Address *</label>
                  <textarea
                    name="companyAddress"
                    value={formData.companyAddress}
                    onChange={handleInputChange}
                    rows={2}
                    className={`w-full px-3 py-2 border rounded ${errors.companyAddress ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter complete address"
                  />
                  {errors.companyAddress && (
                    <span className="text-xs text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.companyAddress}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Website</label>
                  <input
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    placeholder="https://www.example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Company Phone *</label>
                  <input
                    type="tel"
                    name="companyPhone"
                    value={formData.companyPhone}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded ${errors.companyPhone ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="+880-XXX-XXXXXXX"
                  />
                  {errors.companyPhone && (
                    <span className="text-xs text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.companyPhone}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Company Email *</label>
                  <input
                    type="email"
                    name="companyEmail"
                    value={formData.companyEmail}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded ${errors.companyEmail ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="company@example.com"
                  />
                  {errors.companyEmail && (
                    <span className="text-xs text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.companyEmail}
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-lg font-semibold"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <div className="flex items-center gap-3 mb-6">
                <User className="w-5 h-5 text-green-700" />
                <h2 className="text-lg font-semibold text-green-700">{stepLabels[1].label}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Contact Person Name *</label>
                  <input
                    type="text"
                    name="contactPersonName"
                    value={formData.contactPersonName}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded ${errors.contactPersonName ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter contact person name"
                  />
                  {errors.contactPersonName && (
                    <span className="text-xs text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.contactPersonName}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Designation *</label>
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded ${errors.designation ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="e.g., Managing Director, CEO"
                  />
                  {errors.designation && (
                    <span className="text-xs text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.designation}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Contact Email *</label>
                  <input
                    type="email"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded ${errors.contactEmail ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="contact@example.com"
                  />
                  {errors.contactEmail && (
                    <span className="text-xs text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.contactEmail}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Contact Phone *</label>
                  <input
                    type="tel"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded ${errors.contactPhone ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="+880-XXX-XXXXXXX"
                  />
                  {errors.contactPhone && (
                    <span className="text-xs text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.contactPhone}
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-8 py-2 rounded-lg font-semibold"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-lg font-semibold"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-5 h-5 text-purple-700" />
                <h2 className="text-lg font-semibold text-purple-700">{stepLabels[2].label}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Number of Employees</label>
                  <input
                    type="number"
                    name="numberOfEmployees"
                    value={formData.numberOfEmployees}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    placeholder="e.g., 50"
                    min="1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Annual Turnover (BDT)</label>
                  <input
                    type="text"
                    name="annualTurnover"
                    value={formData.annualTurnover}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    placeholder="e.g., 10,00,000"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1 text-gray-700">Business Description *</label>
                  <textarea
                    name="businessDescription"
                    value={formData.businessDescription}
                    onChange={handleInputChange}
                    rows={3}
                    className={`w-full px-3 py-2 border rounded ${errors.businessDescription ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Describe your business activities, products, and services"
                  />
                  {errors.businessDescription && (
                    <span className="text-xs text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.businessDescription}
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-8 py-2 rounded-lg font-semibold"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-lg font-semibold"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-5 h-5 text-orange-700" />
                <h2 className="text-lg font-semibold text-orange-700">{stepLabels[3].label}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Membership Type *</label>
                  <select
                    name="membershipType"
                    value={formData.membershipType}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded ${errors.membershipType ? 'border-red-500' : 'border-gray-300'}`}
                  >
                    <option value="">Select membership type</option>
                    {membershipTypes.map(type => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                  {errors.membershipType && (
                    <span className="text-xs text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.membershipType}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Referred By</label>
                  <input
                    type="text"
                    name="referredBy"
                    value={formData.referredBy}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    placeholder="Name of referring member (if any)"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1 text-gray-700">Objectives for Joining JBCCI</label>
                  <textarea
                    name="objectives"
                    value={formData.objectives}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    placeholder="What do you hope to achieve through JBCCI membership?"
                  />
                </div>
              </div>
              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-8 py-2 rounded-lg font-semibold"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-2 rounded-lg font-semibold"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <div className="flex items-center gap-3 mb-6">
                <FileCheck2 className="w-5 h-5 text-teal-700" />
                <h2 className="text-lg font-semibold text-teal-700">{stepLabels[4].label}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Trade License</label>
                  <input
                    type="file"
                    name="tradeLicense"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                  <p className="mt-1 text-xs text-gray-500">PDF, JPG, PNG (Max 5MB)</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Incorporation Certificate</label>
                  <input
                    type="file"
                    name="incorporationCertificate"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                  <p className="mt-1 text-xs text-gray-500">PDF, JPG, PNG (Max 5MB)</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">VAT Certificate</label>
                  <input
                    type="file"
                    name="vatCertificate"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                  <p className="mt-1 text-xs text-gray-500">PDF, JPG, PNG (Max 5MB)</p>
                </div>
              </div>
              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-8 py-2 rounded-lg font-semibold"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-2 rounded-lg font-semibold disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Submitting...
                    </span>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MembershipForm;