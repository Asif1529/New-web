import { useState, FormEvent } from 'react';
import { Send, Loader2, CheckCircle, XCircle } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  requestType: string;
  message: string;
}

const serviceOptions = [
  'GST Registration',
  'Trademark Registration',
  'Company Registration',
  'FSSAI License',
  'Import Export Code',
  'ISO Certification',
  'Copyright Registration',
  'Income Tax Return',
  'Other'
];

const requestTypes = [
  'New Registration',
  'Renewal',
  'Consultation',
  'Amendment',
  'Compliance Support',
  'General Query'
];

export default function RequestForm() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    requestType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormState> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s+-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service';
    }

    if (!formData.requestType) {
      newErrors.requestType = 'Please select a request type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your request';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Please provide at least 20 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Form submitted:', formData);

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        requestType: '',
        message: ''
      });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="request-form" className="py-12 sm:py-16 lg:py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Send Us Your Request</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Tell us about your requirements and our experts will get back to you within 24 hours
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 sm:p-8 lg:p-10">
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-900/50 border border-green-500 rounded-lg flex items-start">
              <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-green-400 font-semibold">Request submitted successfully!</p>
                <p className="text-green-300 text-sm mt-1">We'll get back to you within 24 hours.</p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-lg flex items-start">
              <XCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-red-400 font-semibold">Something went wrong</p>
                <p className="text-red-300 text-sm mt-1">Please try again or contact us directly.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={`w-full px-4 py-3 bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm sm:text-base`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={`w-full px-4 py-3 bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm sm:text-base`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className={`w-full px-4 py-3 bg-gray-800 border ${errors.phone ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm sm:text-base`}
                  placeholder="+91 98765 43210"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-300 mb-2">
                  Service Required <span className="text-red-400">*</span>
                </label>
                <select
                  id="serviceType"
                  value={formData.serviceType}
                  onChange={(e) => handleChange('serviceType', e.target.value)}
                  className={`w-full px-4 py-3 bg-gray-800 border ${errors.serviceType ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm sm:text-base`}
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                {errors.serviceType && <p className="mt-1 text-sm text-red-400">{errors.serviceType}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="requestType" className="block text-sm font-medium text-gray-300 mb-2">
                Request Type <span className="text-red-400">*</span>
              </label>
              <select
                id="requestType"
                value={formData.requestType}
                onChange={(e) => handleChange('requestType', e.target.value)}
                className={`w-full px-4 py-3 bg-gray-800 border ${errors.requestType ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm sm:text-base`}
              >
                <option value="">Select request type</option>
                {requestTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              {errors.requestType && <p className="mt-1 text-sm text-red-400">{errors.requestType}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message / Requirements <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                className={`w-full px-4 py-3 bg-gray-800 border ${errors.message ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none text-sm sm:text-base`}
                placeholder="Please provide details about your requirements..."
              />
              {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
              <p className="mt-1 text-xs text-gray-400">{formData.message.length} characters (minimum 20 required)</p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium text-sm sm:text-base flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Submit Request
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
