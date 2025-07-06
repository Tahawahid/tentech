import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, User, Mail, Phone, Globe, Sparkles } from 'lucide-react';
import type { OnboardingData } from '../../../utils/onboardingData';

interface ClientInfoStepProps {
  data: OnboardingData;
  updateData: (updates: Partial<OnboardingData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export function ClientInfoStep({ data, updateData, onNext, onPrev }: ClientInfoStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    updateData({
      clientInfo: {
        ...data.clientInfo,
        [field]: value
      }
    });
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSocialMediaChange = (platform: string, value: string) => {
    updateData({
      clientInfo: {
        ...data.clientInfo,
        socialMedia: {
          ...data.clientInfo.socialMedia,
          [platform]: value
        }
      }
    });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!data.clientInfo.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!data.clientInfo.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.clientInfo.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      onNext();
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 backdrop-blur-sm rounded-full border border-purple-400/30 mb-6">
          <Sparkles className="text-purple-400" size={16} />
          <span className="text-sm text-purple-300">Step 2 of 5</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Tell us about yourself
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We'll use this information to create your personalized quote and keep you updated on your project.
        </p>
      </div>

      {/* Form */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-white font-medium mb-3">
              <User size={16} className="inline mr-2" />
              Full Name *
            </label>
            <input
              type="text"
              value={data.clientInfo.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                errors.name ? 'border-red-500' : 'border-white/20'
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-white font-medium mb-3">
              <Mail size={16} className="inline mr-2" />
              Email Address *
            </label>
            <input
              type="email"
              value={data.clientInfo.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                errors.email ? 'border-red-500' : 'border-white/20'
              }`}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Company */}
          <div>
            <label className="block text-white font-medium mb-3">
              Company/Brand Name
            </label>
            <input
              type="text"
              value={data.clientInfo.company || ''}
              onChange={(e) => handleInputChange('company', e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              placeholder="Enter your company or brand name"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-white font-medium mb-3">
              <Phone size={16} className="inline mr-2" />
              Phone Number
            </label>
            <input
              type="tel"
              value={data.clientInfo.phone || ''}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Website */}
          <div className="md:col-span-2">
            <label className="block text-white font-medium mb-3">
              <Globe size={16} className="inline mr-2" />
              Website URL
            </label>
            <input
              type="url"
              value={data.clientInfo.website || ''}
              onChange={(e) => handleInputChange('website', e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              placeholder="https://your-website.com"
            />
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-white mb-4">
            Social Media Profiles (Optional)
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Help us understand your brand better by sharing your social media presence.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {/* Twitch */}
            <div>
              <label className="block text-gray-300 font-medium mb-2">
                Twitch Username
              </label>
              <input
                type="text"
                value={data.clientInfo.socialMedia?.twitch || ''}
                onChange={(e) => handleSocialMediaChange('twitch', e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="your-twitch-username"
              />
            </div>

            {/* YouTube */}
            <div>
              <label className="block text-gray-300 font-medium mb-2">
                YouTube Channel
              </label>
              <input
                type="text"
                value={data.clientInfo.socialMedia?.youtube || ''}
                onChange={(e) => handleSocialMediaChange('youtube', e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="your-youtube-channel"
              />
            </div>

            {/* Instagram */}
            <div>
              <label className="block text-gray-300 font-medium mb-2">
                Instagram Handle
              </label>
              <input
                type="text"
                value={data.clientInfo.socialMedia?.instagram || ''}
                onChange={(e) => handleSocialMediaChange('instagram', e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="@your-instagram"
              />
            </div>

            {/* Twitter */}
            <div>
              <label className="block text-gray-300 font-medium mb-2">
                Twitter Handle
              </label>
              <input
                type="text"
                value={data.clientInfo.socialMedia?.twitter || ''}
                onChange={(e) => handleSocialMediaChange('twitter', e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="@your-twitter"
              />
            </div>
          </div>
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
          Continue
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
