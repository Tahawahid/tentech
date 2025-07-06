import React, { useState } from 'react';
import { ArrowLeft, Check, Send, Edit, User, Briefcase, Clock, DollarSign, Sparkles, Mail, Phone, Globe } from 'lucide-react';
import type { OnboardingData } from '../../../utils/onboardingData';

interface ReviewSubmitStepProps {
  data: OnboardingData;
  updateData: (updates: Partial<OnboardingData>) => void;
  onPrev: () => void;
  onSubmit: () => void;
}

export function ReviewSubmitStep({ data, updateData, onPrev, onSubmit }: ReviewSubmitStepProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = async () => {
    if (!agreedToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      onSubmit();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getServiceName = (serviceType: string) => {
    // This would normally come from your service data
    const serviceNames: Record<string, string> = {
      'stream-overlays': 'Stream Overlays',
      'youtube-intros': 'YouTube Intros',
      'custom-emotes': 'Custom Emotes',
      'brand-design': 'Brand Design',
      'video-production': 'Video Production',
      'custom-service': 'Custom Service'
    };
    return serviceNames[serviceType] || serviceType;
  };

  const getBudgetLabel = (budget: string) => {
    const budgetLabels: Record<string, string> = {
      'under-100': 'Under $100',
      '100-300': '$100 - $300',
      '300-500': '$300 - $500',
      '500-1000': '$500 - $1000',
      '1000+': '$1000+'
    };
    return budgetLabels[budget] || budget;
  };

  const getTimelineLabel = (timeline: string) => {
    const timelineLabels: Record<string, string> = {
      'asap': 'ASAP (Rush Order)',
      '1-week': '1 Week',
      '2-weeks': '2 Weeks',
      '1-month': '1 Month',
      'flexible': 'Flexible'
    };
    return timelineLabels[timeline] || timeline;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 backdrop-blur-sm rounded-full border border-purple-400/30 mb-6">
          <Sparkles className="text-purple-400" size={16} />
          <span className="text-sm text-purple-300">Step 5 of 5</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Review & Submit
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Please review your information before submitting. We'll get back to you within 24 hours with a detailed quote.
        </p>
      </div>

      {/* Review Sections */}
      <div className="space-y-6">
        {/* Client Information */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">
              <User size={20} className="inline mr-2" />
              Client Information
            </h3>
            <button className="text-purple-400 hover:text-purple-300 transition-colors">
              <Edit size={16} />
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-1">Name</p>
              <p className="text-white font-medium">{data.clientInfo.name}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Email</p>
              <p className="text-white font-medium">{data.clientInfo.email}</p>
            </div>
            {data.clientInfo.company && (
              <div>
                <p className="text-gray-400 text-sm mb-1">Company</p>
                <p className="text-white font-medium">{data.clientInfo.company}</p>
              </div>
            )}
            {data.clientInfo.phone && (
              <div>
                <p className="text-gray-400 text-sm mb-1">Phone</p>
                <p className="text-white font-medium">{data.clientInfo.phone}</p>
              </div>
            )}
          </div>

          {/* Social Media */}
          {Object.values(data.clientInfo.socialMedia || {}).some(value => value) && (
            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-3">Social Media</p>
              <div className="flex flex-wrap gap-4">
                {data.clientInfo.socialMedia?.twitch && (
                  <span className="text-purple-400">Twitch: {data.clientInfo.socialMedia.twitch}</span>
                )}
                {data.clientInfo.socialMedia?.youtube && (
                  <span className="text-red-400">YouTube: {data.clientInfo.socialMedia.youtube}</span>
                )}
                {data.clientInfo.socialMedia?.instagram && (
                  <span className="text-pink-400">Instagram: {data.clientInfo.socialMedia.instagram}</span>
                )}
                {data.clientInfo.socialMedia?.twitter && (
                  <span className="text-blue-400">Twitter: {data.clientInfo.socialMedia.twitter}</span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">
              <Briefcase size={20} className="inline mr-2" />
              Project Details
            </h3>
            <button className="text-purple-400 hover:text-purple-300 transition-colors">
              <Edit size={16} />
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-gray-400 text-sm mb-1">Service Type</p>
              <p className="text-white font-medium">{getServiceName(data.projectRequirements.serviceType)}</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-1">Project Title</p>
              <p className="text-white font-medium">{data.projectRequirements.projectTitle}</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-1">Description</p>
              <p className="text-white">{data.projectRequirements.projectDescription}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Target Audience</p>
                <p className="text-white font-medium">{data.projectRequirements.targetAudience}</p>
              </div>
              {data.projectRequirements.contentStyle && (
                <div>
                  <p className="text-gray-400 text-sm mb-1">Content Style</p>
                  <p className="text-white font-medium">{data.projectRequirements.contentStyle}</p>
                </div>
              )}
            </div>

            {/* Specific Requirements */}
            {data.projectRequirements.specificRequirements.length > 0 && (
              <div>
                <p className="text-gray-400 text-sm mb-2">Specific Requirements</p>
                <div className="space-y-1">
                  {data.projectRequirements.specificRequirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="text-green-400" size={16} />
                      <span className="text-white">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Brand Colors */}
            {data.projectRequirements.brandColors && data.projectRequirements.brandColors.length > 0 && (
              <div>
                <p className="text-gray-400 text-sm mb-2">Brand Colors</p>
                <div className="flex flex-wrap gap-2">
                  {data.projectRequirements.brandColors.map((color, index) => (
                    <div key={index} className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-1">
                      <div
                        className="w-4 h-4 rounded-full border border-white/20"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-white text-sm">{color}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Inspiration Links */}
            {data.projectRequirements.inspirationLinks && data.projectRequirements.inspirationLinks.length > 0 && (
              <div>
                <p className="text-gray-400 text-sm mb-2">Inspiration Links</p>
                <div className="space-y-1">
                  {data.projectRequirements.inspirationLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-purple-400 hover:text-purple-300 transition-colors truncate"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Timeline & Budget */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">
              <Clock size={20} className="inline mr-2" />
              Timeline & Budget
            </h3>
            <button className="text-purple-400 hover:text-purple-300 transition-colors">
              <Edit size={16} />
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-1">Timeline</p>
              <p className="text-white font-medium">{getTimelineLabel(data.timelineBudget.timeline)}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Budget Range</p>
              <p className="text-white font-medium">{getBudgetLabel(data.timelineBudget.budget)}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Delivery Method</p>
              <p className="text-white font-medium capitalize">{data.timelineBudget.deliveryPreference}</p>
            </div>
          </div>

          {/* Additional Options */}
          <div className="mt-6">
            <p className="text-gray-400 text-sm mb-3">Additional Options</p>
            <div className="grid md:grid-cols-3 gap-4">
              {data.timelineBudget.isRushOrder && (
                <div className="flex items-center gap-2 text-yellow-400">
                  <Check size={16} />
                  <span>Rush Order</span>
                </div>
              )}
              {data.timelineBudget.unlimitedRevisions && (
                <div className="flex items-center gap-2 text-green-400">
                  <Check size={16} />
                  <span>Unlimited Revisions</span>
                </div>
              )}
              {data.timelineBudget.commercialLicense && (
                <div className="flex items-center gap-2 text-blue-400">
                  <Check size={16} />
                  <span>Commercial License</span>
                </div>
              )}
            </div>
          </div>

          {/* Special Instructions */}
          {data.timelineBudget.specialInstructions && (
            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-2">Special Instructions</p>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-white">{data.timelineBudget.specialInstructions}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
        <div className="flex items-start gap-3">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-5 h-5 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0 after:left-0 after:bg-white after:border-gray-300 after:border after:rounded after:h-full after:w-full after:transition-all dark:border-gray-600 peer-checked:bg-purple-600 flex items-center justify-center">
              {agreedToTerms && <Check className="text-white" size={12} />}
            </div>
          </label>
          <div className="text-sm text-gray-300 leading-relaxed">
            I agree to the{' '}
            <a href="/terms" className="text-purple-400 hover:text-purple-300 transition-colors">
              Terms and Conditions
            </a>{' '}
            and{' '}
            <a href="/privacy" className="text-purple-400 hover:text-purple-300 transition-colors">
              Privacy Policy
            </a>
            . I understand that this is a quote request and not a binding contract.
          </div>
        </div>
      </div>

      {/* What Happens Next */}
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
        <h3 className="text-xl font-semibold text-white mb-6">What Happens Next?</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-semibold text-sm">1</span>
            </div>
            <div>
              <h4 className="text-white font-medium">Review & Contact</h4>
              <p className="text-gray-300 text-sm">Our team will review your request and contact you within 24 hours.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-semibold text-sm">2</span>
            </div>
            <div>
              <h4 className="text-white font-medium">Detailed Quote</h4>
              <p className="text-gray-300 text-sm">We'll provide a detailed quote with timeline, pricing, and project milestones.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-semibold text-sm">3</span>
            </div>
            <div>
              <h4 className="text-white font-medium">Project Kickoff</h4>
              <p className="text-gray-300 text-sm">Once approved, we'll start working on your project immediately.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8">
        <button
          onClick={onPrev}
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowLeft size={16} />
          Previous
        </button>
        
        <button
          onClick={handleSubmit}
          disabled={!agreedToTerms || isSubmitting}
          className={`inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
            agreedToTerms && !isSubmitting
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 hover:scale-105'
              : 'bg-gray-600 text-gray-300 cursor-not-allowed'
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Submitting...
            </>
          ) : (
            <>
              Submit Request
              <Send size={16} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
