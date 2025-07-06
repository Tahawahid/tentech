import React, { useState } from 'react';
import { WelcomeStep } from './Steps/WelcomeStep';
import { ClientInfoStep } from './Steps/ClientInfoStep';
import { ProjectDetailsStep } from './Steps/ProjectDetailsStep';
import { TimelineBudgetStep } from './Steps/TimelineBudgetStep';
import { ReviewSubmitStep } from './Steps/ReviewSubmitStep';
import { SuccessStep } from './Steps/SuccessStep';
import { OnboardingProgress } from './OnboardingProgress';
import type { OnboardingData } from '../../utils/onboardingData';
import { getInitialOnboardingData } from '../../utils/onboardingData';

export function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<OnboardingData>(getInitialOnboardingData());
  const [requestId, setRequestId] = useState('');

  const steps = [
    'Welcome',
    'Client Info',
    'Project Details',
    'Timeline & Budget',
    'Review & Submit',
    'Success'
  ];

  // Steps that show in the progress bar (excluding welcome and success)
  const progressSteps = [
    'Client Info',
    'Project Details', 
    'Timeline & Budget',
    'Review & Submit'
  ];

  const updateData = (updates: Partial<OnboardingData>) => {
    setData(prev => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const handleSubmit = async () => {
    try {
      // Generate a unique request ID
      const id = 'REQ-' + Date.now().toString(36).toUpperCase();
      setRequestId(id);
      
      // Here you would typically send the data to your backend
      console.log('Submitting onboarding data:', data);
      
      // Move to success step
      nextStep();
    } catch (error) {
      console.error('Error submitting onboarding data:', error);
      throw error;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <WelcomeStep onNext={nextStep} />;
      case 1:
        return (
          <ClientInfoStep
            data={data}
            updateData={updateData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 2:
        return (
          <ProjectDetailsStep
            data={data}
            updateData={updateData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 3:
        return (
          <TimelineBudgetStep
            data={data}
            updateData={updateData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 4:
        return (
          <ReviewSubmitStep
            data={data}
            updateData={updateData}
            onPrev={prevStep}
            onSubmit={handleSubmit}
          />
        );
      case 5:
        return (
          <SuccessStep
            requestId={requestId}
            clientEmail={data.clientInfo.email}
          />
        );
      default:
        return <WelcomeStep onNext={nextStep} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-pink-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Progress Bar (hide on welcome and success steps) */}
            {currentStep > 0 && currentStep < steps.length - 1 && (
              <div className="mb-8">
                <OnboardingProgress
                  steps={progressSteps}
                  currentStep={currentStep}
                  totalSteps={progressSteps.length}
                />
              </div>
            )}

            {/* Step Content */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
              {renderStep()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
