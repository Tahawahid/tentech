import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import type { OnboardingData } from '../../../utils/onboardingData';
import { serviceOptions } from '../../../utils/onboardingData';

interface ServiceSelectionStepProps {
  data: OnboardingData;
  updateData: (updates: Partial<OnboardingData>) => void;
  onNext: () => void;
}

export function ServiceSelectionStep({ data, updateData, onNext }: ServiceSelectionStepProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>(
    data.projectRequirements.serviceType ? [data.projectRequirements.serviceType] : []
  );

  const handleServiceToggle = (serviceId: string, category: string) => {
    const newServices = selectedServices.includes(serviceId)
      ? selectedServices.filter(id => id !== serviceId)
      : [...selectedServices, serviceId];
    
    setSelectedServices(newServices);
    
    // Update the main service type and category
    if (newServices.length > 0) {
      updateData({
        projectRequirements: {
          ...data.projectRequirements,
          serviceType: newServices[0], // Primary service
          serviceCategory: category
        }
      });
    }
  };

  const canProceed = selectedServices.length > 0;

  const handleNext = () => {
    if (canProceed) {
      onNext();
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 backdrop-blur-sm rounded-full border border-purple-400/30 mb-6">
          <Sparkles className="text-purple-400" size={16} />
          <span className="text-sm text-purple-300">Step 1 of 5</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          What services do you need?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Select the services you're interested in. You can choose multiple services for a comprehensive package.
        </p>
      </div>

      {/* Service Categories */}
      <div className="space-y-8">
        {serviceOptions.map((category) => (
          <div key={category.category} className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">
              {category.category}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {category.services.map((service) => (
                <div
                  key={service.id}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    selectedServices.includes(service.id)
                      ? 'scale-105'
                      : 'hover:scale-102'
                  }`}
                  onClick={() => handleServiceToggle(service.id, category.category)}
                >
                  <div className={`absolute inset-0 rounded-2xl blur-xl transition-all duration-300 ${
                    selectedServices.includes(service.id)
                      ? 'bg-gradient-to-r from-purple-600/30 to-pink-600/30'
                      : 'bg-gradient-to-r from-purple-600/10 to-pink-600/10'
                  }`} />
                  
                  <div className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 ${
                    selectedServices.includes(service.id)
                      ? 'border-purple-400/50 bg-white/10'
                      : 'border-white/10 hover:border-white/20'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {service.name}
                        </h4>
                        <p className="text-purple-400 font-medium">
                          {service.price}
                        </p>
                      </div>
                      
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        selectedServices.includes(service.id)
                          ? 'border-purple-400 bg-purple-600'
                          : 'border-gray-500'
                      }`}>
                        {selectedServices.includes(service.id) && (
                          <Check className="text-white" size={16} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Custom Service Option */}
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-6 text-center">
        <h3 className="text-xl font-semibold text-white mb-3">
          Don't see what you need?
        </h3>
        <p className="text-gray-300 mb-4">
          We offer custom creative solutions tailored to your specific requirements.
        </p>
        <button
          onClick={() => handleServiceToggle('custom-service', 'Custom')}
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
            selectedServices.includes('custom-service')
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          {selectedServices.includes('custom-service') ? (
            <>
              <Check size={16} />
              Custom Service Selected
            </>
          ) : (
            <>
              <Sparkles size={16} />
              Select Custom Service
            </>
          )}
        </button>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8">
        <div className="text-gray-400">
          {selectedServices.length > 0 && (
            <span className="text-sm">
              {selectedServices.length} service{selectedServices.length > 1 ? 's' : ''} selected
            </span>
          )}
        </div>
        
        <button
          onClick={handleNext}
          disabled={!canProceed}
          className={`inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
            canProceed
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 hover:scale-105'
              : 'bg-gray-700 text-gray-400 cursor-not-allowed'
          }`}
        >
          Continue
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
