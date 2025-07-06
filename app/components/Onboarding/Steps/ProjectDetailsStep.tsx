import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, FileText, Target, Palette, Link, Plus, X, Sparkles } from 'lucide-react';
import type { OnboardingData } from '../../../utils/onboardingData';

interface ProjectDetailsStepProps {
  data: OnboardingData;
  updateData: (updates: Partial<OnboardingData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export function ProjectDetailsStep({ data, updateData, onNext, onPrev }: ProjectDetailsStepProps) {
  const [newRequirement, setNewRequirement] = useState('');
  const [newColor, setNewColor] = useState('#8b5cf6');
  const [newLink, setNewLink] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    updateData({
      projectRequirements: {
        ...data.projectRequirements,
        [field]: value
      }
    });
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const addRequirement = () => {
    if (newRequirement.trim()) {
      updateData({
        projectRequirements: {
          ...data.projectRequirements,
          specificRequirements: [...data.projectRequirements.specificRequirements, newRequirement.trim()]
        }
      });
      setNewRequirement('');
    }
  };

  const removeRequirement = (index: number) => {
    updateData({
      projectRequirements: {
        ...data.projectRequirements,
        specificRequirements: data.projectRequirements.specificRequirements.filter((_, i) => i !== index)
      }
    });
  };

  const addColor = () => {
    if (newColor && !data.projectRequirements.brandColors?.includes(newColor)) {
      updateData({
        projectRequirements: {
          ...data.projectRequirements,
          brandColors: [...(data.projectRequirements.brandColors || []), newColor]
        }
      });
    }
  };

  const removeColor = (color: string) => {
    updateData({
      projectRequirements: {
        ...data.projectRequirements,
        brandColors: data.projectRequirements.brandColors?.filter(c => c !== color) || []
      }
    });
  };

  const addLink = () => {
    if (newLink.trim()) {
      updateData({
        projectRequirements: {
          ...data.projectRequirements,
          inspirationLinks: [...(data.projectRequirements.inspirationLinks || []), newLink.trim()]
        }
      });
      setNewLink('');
    }
  };

  const removeLink = (index: number) => {
    updateData({
      projectRequirements: {
        ...data.projectRequirements,
        inspirationLinks: data.projectRequirements.inspirationLinks?.filter((_, i) => i !== index) || []
      }
    });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!data.projectRequirements.projectTitle.trim()) {
      newErrors.projectTitle = 'Project title is required';
    }
    
    if (!data.projectRequirements.projectDescription.trim()) {
      newErrors.projectDescription = 'Project description is required';
    }
    
    if (!data.projectRequirements.targetAudience.trim()) {
      newErrors.targetAudience = 'Target audience is required';
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
          <span className="text-sm text-purple-300">Step 3 of 5</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Tell us about your project
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          The more details you provide, the more accurate and tailored your quote will be.
        </p>
      </div>

      {/* Form */}
      <div className="space-y-8">
        {/* Project Title & Description */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-white mb-6">
            <FileText size={20} className="inline mr-2" />
            Project Overview
          </h3>
          
          <div className="space-y-6">
            {/* Project Title */}
            <div>
              <label className="block text-white font-medium mb-3">
                Project Title *
              </label>
              <input
                type="text"
                value={data.projectRequirements.projectTitle}
                onChange={(e) => handleInputChange('projectTitle', e.target.value)}
                className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                  errors.projectTitle ? 'border-red-500' : 'border-white/20'
                }`}
                placeholder="e.g., Gaming Stream Overlay Package"
              />
              {errors.projectTitle && (
                <p className="text-red-400 text-sm mt-1">{errors.projectTitle}</p>
              )}
            </div>

            {/* Project Description */}
            <div>
              <label className="block text-white font-medium mb-3">
                Project Description *
              </label>
              <textarea
                value={data.projectRequirements.projectDescription}
                onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                rows={4}
                className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none ${
                  errors.projectDescription ? 'border-red-500' : 'border-white/20'
                }`}
                placeholder="Describe your project in detail. What are you looking to achieve? What's the purpose of this project?"
              />
              {errors.projectDescription && (
                <p className="text-red-400 text-sm mt-1">{errors.projectDescription}</p>
              )}
            </div>
          </div>
        </div>

        {/* Target Audience & Style */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-white mb-6">
            <Target size={20} className="inline mr-2" />
            Audience & Style
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Target Audience */}
            <div>
              <label className="block text-white font-medium mb-3">
                Target Audience *
              </label>
              <input
                type="text"
                value={data.projectRequirements.targetAudience}
                onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                  errors.targetAudience ? 'border-red-500' : 'border-white/20'
                }`}
                placeholder="e.g., Young gamers aged 18-25"
              />
              {errors.targetAudience && (
                <p className="text-red-400 text-sm mt-1">{errors.targetAudience}</p>
              )}
            </div>

            {/* Content Style */}
            <div>
              <label className="block text-white font-medium mb-3">
                Content Style/Vibe
              </label>
              <select
                value={data.projectRequirements.contentStyle}
                onChange={(e) => handleInputChange('contentStyle', e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              >
                <option value="">Select a style</option>
                <option value="modern-minimalist">Modern & Minimalist</option>
                <option value="gaming-neon">Gaming & Neon</option>
                <option value="professional-corporate">Professional & Corporate</option>
                <option value="fun-colorful">Fun & Colorful</option>
                <option value="dark-edgy">Dark & Edgy</option>
                <option value="retro-vintage">Retro & Vintage</option>
                <option value="anime-kawaii">Anime & Kawaii</option>
                <option value="cyberpunk-futuristic">Cyberpunk & Futuristic</option>
              </select>
            </div>
          </div>
        </div>

        {/* Specific Requirements */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-white mb-6">
            Specific Requirements
          </h3>
          
          <div className="space-y-4">
            {/* Add Requirement */}
            <div className="flex gap-2">
              <input
                type="text"
                value={newRequirement}
                onChange={(e) => setNewRequirement(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addRequirement()}
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="Add a specific requirement"
              />
              <button
                onClick={addRequirement}
                className="px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all"
              >
                <Plus size={20} />
              </button>
            </div>

            {/* Requirements List */}
            {data.projectRequirements.specificRequirements.length > 0 && (
              <div className="space-y-2">
                {data.projectRequirements.specificRequirements.map((req, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white/10 rounded-lg p-3">
                    <span className="flex-1 text-white">{req}</span>
                    <button
                      onClick={() => removeRequirement(index)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Brand Colors */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-white mb-6">
            <Palette size={20} className="inline mr-2" />
            Brand Colors (Optional)
          </h3>
          
          <div className="space-y-4">
            {/* Add Color */}
            <div className="flex gap-2 items-center">
              <input
                type="color"
                value={newColor}
                onChange={(e) => setNewColor(e.target.value)}
                className="w-12 h-12 bg-white/10 border border-white/20 rounded-lg cursor-pointer"
              />
              <input
                type="text"
                value={newColor}
                onChange={(e) => setNewColor(e.target.value)}
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="#8b5cf6"
              />
              <button
                onClick={addColor}
                className="px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all"
              >
                <Plus size={20} />
              </button>
            </div>

            {/* Colors List */}
            {data.projectRequirements.brandColors && data.projectRequirements.brandColors.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {data.projectRequirements.brandColors.map((color, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white/10 rounded-lg p-2">
                    <div
                      className="w-6 h-6 rounded-full border border-white/20"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-white text-sm">{color}</span>
                    <button
                      onClick={() => removeColor(color)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Inspiration Links */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-white mb-6">
            <Link size={20} className="inline mr-2" />
            Inspiration Links (Optional)
          </h3>
          
          <div className="space-y-4">
            {/* Add Link */}
            <div className="flex gap-2">
              <input
                type="url"
                value={newLink}
                onChange={(e) => setNewLink(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addLink()}
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                placeholder="https://example.com/inspiration"
              />
              <button
                onClick={addLink}
                className="px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all"
              >
                <Plus size={20} />
              </button>
            </div>

            {/* Links List */}
            {data.projectRequirements.inspirationLinks && data.projectRequirements.inspirationLinks.length > 0 && (
              <div className="space-y-2">
                {data.projectRequirements.inspirationLinks.map((link, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white/10 rounded-lg p-3">
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-purple-400 hover:text-purple-300 transition-colors truncate"
                    >
                      {link}
                    </a>
                    <button
                      onClick={() => removeLink(index)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
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
