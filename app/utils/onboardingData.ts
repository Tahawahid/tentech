export interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export interface ClientInfo {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  website?: string;
  socialMedia?: {
    twitch?: string;
    youtube?: string;
    instagram?: string;
    twitter?: string;
  };
}

export interface ProjectRequirements {
  serviceType: string;
  serviceCategory: string;
  projectTitle: string;
  projectDescription: string;
  specificRequirements: string[];
  brandColors?: string[];
  brandAssets?: string[];
  inspirationLinks?: string[];
  targetAudience: string;
  contentStyle: string;
}

export interface TimelineBudget {
  timeline: string;
  isRushOrder: boolean;
  budget: string;
  deliveryPreference: string;
  revisionRounds: number;
  unlimitedRevisions?: boolean;
  commercialLicense?: boolean;
  specialInstructions?: string;
}

export interface OnboardingData {
  currentStep: number;
  clientInfo: ClientInfo;
  projectRequirements: ProjectRequirements;
  timelineBudget: TimelineBudget;
  additionalNotes: string;
  agreedToTerms: boolean;
  marketingConsent: boolean;
}

export const onboardingSteps: OnboardingStep[] = [
  {
    id: 'service-selection',
    title: 'Service Selection',
    description: 'Choose the services you need',
    completed: false
  },
  {
    id: 'client-info',
    title: 'Your Information',
    description: 'Tell us about yourself',
    completed: false
  },
  {
    id: 'project-details',
    title: 'Project Details',
    description: 'Describe your project requirements',
    completed: false
  },
  {
    id: 'timeline-budget',
    title: 'Timeline & Budget',
    description: 'Set your preferences',
    completed: false
  },
  {
    id: 'review-submit',
    title: 'Review & Submit',
    description: 'Review and submit your request',
    completed: false
  }
];

export const serviceOptions = [
  {
    category: 'Streaming Graphics',
    services: [
      { id: 'stream-overlays', name: 'Stream Overlays', price: 'From $50' },
      { id: 'custom-emotes', name: 'Custom Emotes', price: 'From $15' },
      { id: 'stream-alerts', name: 'Stream Alerts', price: 'From $25' },
      { id: 'channel-panels', name: 'Channel Panels', price: 'From $30' }
    ]
  },
  {
    category: 'Content Creation',
    services: [
      { id: 'video-intros', name: 'Video Intros', price: 'From $75' },
      { id: 'video-outros', name: 'Video Outros', price: 'From $50' },
      { id: 'thumbnails', name: 'Thumbnails', price: 'From $20' },
      { id: 'social-media-content', name: 'Social Media Content', price: 'From $40' }
    ]
  },
  {
    category: 'Brand Design',
    services: [
      { id: 'logo-design', name: 'Logo Design', price: 'From $100' },
      { id: 'brand-identity', name: 'Brand Identity', price: 'From $200' },
      { id: 'business-cards', name: 'Business Cards', price: 'From $35' },
      { id: 'marketing-materials', name: 'Marketing Materials', price: 'From $60' }
    ]
  }
];

export const defaultOnboardingData: OnboardingData = {
  currentStep: 0,
  clientInfo: {
    name: '',
    email: '',
    company: '',
    phone: '',
    website: '',
    socialMedia: {}
  },
  projectRequirements: {
    serviceType: '',
    serviceCategory: '',
    projectTitle: '',
    projectDescription: '',
    specificRequirements: [],
    brandColors: [],
    brandAssets: [],
    inspirationLinks: [],
    targetAudience: '',
    contentStyle: ''
  },
  timelineBudget: {
    timeline: '',
    isRushOrder: false,
    budget: '',
    deliveryPreference: '',
    revisionRounds: 2,
    unlimitedRevisions: false,
    commercialLicense: false,
    specialInstructions: ''
  },
  additionalNotes: '',
  agreedToTerms: false,
  marketingConsent: false
};

// Add the missing function
export function getInitialOnboardingData(): OnboardingData {
  return { ...defaultOnboardingData };
}

// Additional utility functions for onboarding
export function validateClientInfo(clientInfo: ClientInfo): boolean {
  return !!(clientInfo.name && clientInfo.email);
}

export function validateProjectRequirements(projectRequirements: ProjectRequirements): boolean {
  return !!(
    projectRequirements.serviceType &&
    projectRequirements.projectTitle &&
    projectRequirements.projectDescription &&
    projectRequirements.targetAudience
  );
}

export function validateTimelineBudget(timelineBudget: TimelineBudget): boolean {
  return !!(timelineBudget.timeline && timelineBudget.budget && timelineBudget.deliveryPreference);
}

export function validateOnboardingData(data: OnboardingData): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!validateClientInfo(data.clientInfo)) {
    errors.push('Please complete your contact information');
  }

  if (!validateProjectRequirements(data.projectRequirements)) {
    errors.push('Please complete your project requirements');
  }

  if (!validateTimelineBudget(data.timelineBudget)) {
    errors.push('Please complete your timeline and budget preferences');
  }

  if (!data.agreedToTerms) {
    errors.push('Please agree to the terms and conditions');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}
