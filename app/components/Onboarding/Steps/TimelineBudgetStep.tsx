import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Clock, DollarSign, Zap, RefreshCw, Sparkles } from 'lucide-react';
import type { OnboardingData } from '../../../utils/onboardingData';

interface TimelineBudgetStepProps {
  data: OnboardingData;
  updateData: (updates: Partial<OnboardingData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export function TimelineBudgetStep({ data, updateData, onNext, onPrev }: TimelineBudgetStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string | number | boolean) => {
    updateData({
      timelineBudget: {
        ...data.timelineBudget,
        [field]: value
      }
    });
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!data.timelineBudget.timeline) {
      newErrors.timeline = 'Timeline is required';
    }
    
    if (!data.timelineBudget.budget) {
      newErrors.budget = 'Budget range is required';
    }
    
    if (!data.timelineBudget.deliveryPreference) {
      newErrors.deliveryPreference = 'Delivery preference is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      onNext();
    }
  };

  const timelineOptions = [
    { value: 'asap', label: 'ASAP (Rush Order)', description: 'Within 1-2 days', extra: '+50% rush fee' },
    { value: '1-week', label: '1 Week', description: 'Standard timeline', extra: 'Most popular' },
    { value: '2-weeks', label: '2 Weeks', description: 'More time for revisions', extra: '' },
    { value: '1-month', label: '1 Month', description: 'Complex projects', extra: '' },
    { value: 'flexible', label: 'Flexible', description: 'No rush, best quality', extra: '' }
  ];

  const budgetOptions = [
    { value: 'under-100', label: 'Under $100', description: 'Basic projects' },
    { value: '100-300', label: '$100 - $300', description: 'Standard projects' },
    { value: '300-500', label: '$300 - $500', description: 'Premium projects' },
    { value: '500-1000', label: '$500 - $1000', description: 'Complex projects' },
    { value: '1000+', label: '$1000+', description: 'Enterprise projects' }
  ];

  const deliveryOptions = [
    { value: 'email', label: 'Email', description: 'Files sent via email' },
    { value: 'cloud', label: 'Cloud Storage', description: 'Google Drive, Dropbox' },
    { value: 'ftp', label: 'FTP/SFTP', description: 'Direct file transfer' },
    { value: 'platform', label: 'Platform Direct', description: 'Upload to your platform' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 backdrop-blur-sm rounded-full border border-purple-400/30 mb-6">
          <Sparkles className="text-purple-400" size={16} />
          <span className="text-sm text-purple-300">Step 4 of 5</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Timeline & Budget
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Help us understand your timeline and budget requirements to provide the most accurate quote.
        </p>
      </div>

      {/* Form */}
      <div className="space-y-8">
        {/* Timeline */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-white mb-6">
            <Clock size={20} className="inline mr-2" />
            Project Timeline *
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {timelineOptions.map((option) => (
              <div
                key={option.value}
                className={`relative cursor-pointer transition-all duration-300 ${
                  data.timelineBudget.timeline === option.value
                    ? 'scale-105'
                    : 'hover:scale-102'
                }`}
                onClick={() => handleInputChange('timeline', option.value)}
              >
                <div className={`absolute inset-0 rounded-xl blur-lg transition-all duration-300 ${
                  data.timelineBudget.timeline === option.value
                    ? 'bg-gradient-to-r from-purple-600/30 to-pink-600/30'
                    : 'bg-gradient-to-r from-purple-600/10 to-pink-600/10'
                }`} />
                
                <div className={`relative bg-white/5 backdrop-blur-sm border rounded-xl p-4 transition-all duration-300 ${
                  data.timelineBudget.timeline === option.value
                    ? 'border-purple-400/50 bg-white/10'
                    : 'border-white/10 hover:border-white/20'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-white">{option.label}</h4>
                    {option.value === 'asap' && (
                      <Zap className="text-yellow-400" size={16} />
                    )}
                  </div>
                  <p className="text-gray-300 text-sm mb-1">{option.description}</p>
                  {option.extra && (
                    <p className={`text-xs ${
                      option.extra.includes('rush') ? 'text-yellow-400' : 'text-green-400'
                    }`}>
                      {option.extra}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {errors.timeline && (
            <p className="text-red-400 text-sm mt-2">{errors.timeline}</p>
          )}
        </div>

        {/* Budget */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-white mb-6">
            <DollarSign size={20} className="inline mr-2" />
            Budget Range *
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {budgetOptions.map((option) => (
              <div
                key={option.value}
                className={`relative cursor-pointer transition-all duration-300 ${
                  data.timelineBudget.budget === option.value
                    ? 'scale-105'
                    : 'hover:scale-102'
                }`}
                onClick={() => handleInputChange('budget', option.value)}
              >
                <div className={`absolute inset-0 rounded-xl blur-lg transition-all duration-300 ${
                  data.timelineBudget.budget === option.value
                    ? 'bg-gradient-to-r from-green-600/30 to-blue-600/30'
                    : 'bg-gradient-to-r from-green-600/10 to-blue-600/10'
                }`} />
                
                <div className={`relative bg-white/5 backdrop-blur-sm border rounded-xl p-4 transition-all duration-300 ${
                  data.timelineBudget.budget === option.value
                    ? 'border-green-400/50 bg-white/10'
                    : 'border-white/10 hover:border-white/20'
                }`}>
                  <h4 className="font-semibold text-white mb-1">{option.label}</h4>
                  <p className="text-gray-300 text-sm">{option.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {errors.budget && (
            <p className="text-red-400 text-sm mt-2">{errors.budget}</p>
          )}
        </div>

        {/* Delivery Preferences */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-white mb-6">
            Delivery Preferences *
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {deliveryOptions.map((option) => (
              <div
                key={option.value}
                className={`relative cursor-pointer transition-all duration-300 ${
                  data.timelineBudget.deliveryPreference === option.value
                    ? 'scale-105'
                    : 'hover:scale-102'
                }`}
                onClick={() => handleInputChange('deliveryPreference', option.value)}
              >
                <div className={`absolute inset-0 rounded-xl blur-lg transition-all duration-300 ${
                  data.timelineBudget.deliveryPreference === option.value
                    ? 'bg-gradient-to-r from-blue-600/30 to-purple-600/30'
                    : 'bg-gradient-to-r from-blue-600/10 to-purple-600/10'
                }`} />
                
                <div className={`relative bg-white/5 backdrop-blur-sm border rounded-xl p-4 transition-all duration-300 ${
                  data.timelineBudget.deliveryPreference === option.value
                    ? 'border-blue-400/50 bg-white/10'
                    : 'border-white/10 hover:border-white/20'
                }`}>
                  <h4 className="font-semibold text-white mb-1">{option.label}</h4>
                  <p className="text-gray-300 text-sm">{option.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {errors.deliveryPreference && (
            <p className="text-red-400 text-sm mt-2">{errors.deliveryPreference}</p>
          )}
        </div>

        {/* Additional Options */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-white mb-6">
            <RefreshCw size={20} className="inline mr-2" />
            Additional Options
          </h3>
          
          <div className="space-y-4">
            {/* Rush Order */}
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
              <div>
                <h4 className="text-white font-medium">Rush Order</h4>
                <p className="text-gray-400 text-sm">Priority handling with faster delivery</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={data.timelineBudget.isRushOrder}
                  onChange={(e) => handleInputChange('isRushOrder', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
              </label>
            </div>

            {/* Revisions */}
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
              <div>
                <h4 className="text-white font-medium">Unlimited Revisions</h4>
                <p className="text-gray-400 text-sm">Make unlimited changes until you're satisfied</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={data.timelineBudget.unlimitedRevisions}
                  onChange={(e) => handleInputChange('unlimitedRevisions', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
              </label>
            </div>

            {/* Commercial License */}
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
              <div>
                <h4 className="text-white font-medium">Commercial License</h4>
                <p className="text-gray-400 text-sm">Full commercial rights for your project</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={data.timelineBudget.commercialLicense}
                  onChange={(e) => handleInputChange('commercialLicense', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Special Instructions */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-white mb-6">
            Special Instructions
          </h3>
          
          <textarea
            value={data.timelineBudget.specialInstructions || ''}
            onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
            rows={4}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
            placeholder="Any special instructions or requirements for your project..."
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8">
        <button
          onClick={onPrev}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all duration-300"
        >
          <ArrowLeft size={16} />
          Previous
        </button>
        
        <button
          onClick={handleNext}
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 hover:scale-105 transition-all duration-300"
        >
          Review & Submit
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
