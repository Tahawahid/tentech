import React from 'react';
import { Check } from 'lucide-react';

interface OnboardingProgressProps {
  steps: string[];
  currentStep: number;
  totalSteps: number;
}

export function OnboardingProgress({ steps, currentStep, totalSteps }: OnboardingProgressProps) {
  // Convert step names to proper display format
  const getStepDescription = (stepName: string) => {
    const descriptions: Record<string, string> = {
      'Client Info': 'Tell us about yourself',
      'Project Details': 'Describe your project requirements',
      'Timeline & Budget': 'Set your preferences',
      'Review & Submit': 'Review and submit your request'
    };
    return descriptions[stepName] || '';
  };

  return (
    <div className="w-full">
      {/* Desktop Progress Bar */}
      <div className="hidden md:flex items-center justify-between mb-8">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center">
            {/* Step Circle */}
            <div className={`relative transition-all duration-300 ${
              index <= currentStep - 1 ? 'scale-110' : ''
            }`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                index < currentStep - 1
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-purple-600'
                  : index === currentStep - 1
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-purple-600 shadow-lg shadow-purple-500/30'
                  : 'border-gray-600 bg-gray-800'
              }`}>
                {index < currentStep - 1 ? (
                  <Check className="text-white" size={20} />
                ) : (
                  <span className={`text-sm font-semibold ${
                    index === currentStep - 1 ? 'text-white' : 'text-gray-400'
                  }`}>
                    {index + 1}
                  </span>
                )}
              </div>
            </div>
            
            {/* Step Info */}
            <div className="ml-4 flex-1">
              <h3 className={`font-semibold ${
                index <= currentStep - 1 ? 'text-white' : 'text-gray-400'
              }`}>
                {step}
              </h3>
              <p className={`text-sm ${
                index <= currentStep - 1 ? 'text-gray-300' : 'text-gray-500'
              }`}>
                {getStepDescription(step)}
              </p>
            </div>
            
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="w-16 h-0.5 mx-4 bg-gray-700 relative">
                <div className={`absolute top-0 left-0 h-full transition-all duration-500 ${
                  index < currentStep - 1
                    ? 'w-full bg-gradient-to-r from-purple-600 to-pink-600'
                    : 'w-0 bg-gradient-to-r from-purple-600 to-pink-600'
                }`} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Progress Bar */}
      <div className="md:hidden mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-400">Step {currentStep} of {totalSteps + 1}</span>
          <span className="text-sm text-gray-400">{Math.round((currentStep / (totalSteps + 1)) * 100)}%</span>
        </div>
        
        <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
          <div
            className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(currentStep / (totalSteps + 1)) * 100}%` }}
          />
        </div>
        
        <div className="text-center">
          <h3 className="text-white font-semibold mb-1">
            {currentStep > 0 && currentStep <= steps.length ? steps[currentStep - 1] : 'Welcome'}
          </h3>
          <p className="text-gray-400 text-sm">
            {currentStep > 0 && currentStep <= steps.length ? getStepDescription(steps[currentStep - 1]) : 'Let\'s get started'}
          </p>
        </div>
      </div>
    </div>
  );
}
