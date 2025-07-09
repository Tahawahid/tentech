import React from 'react';
import { MessageCircle, Palette, RefreshCw, CheckCircle } from 'lucide-react';
import type { ServiceData } from '../../../../utils/serviceData';

interface ServiceWorkflowSectionProps {
  service: ServiceData;
}

export function ServiceWorkflowSection({ service }: ServiceWorkflowSectionProps) {
  const workflowSteps = [
    {
      icon: MessageCircle,
      title: 'Consultation',
      description: 'We discuss your vision, requirements, and goals to understand exactly what you need.',
      duration: '1-2 hours'
    },
    {
      icon: Palette,
      title: 'Design & Creation',
      description: 'Our talented team creates your custom design using professional tools and techniques.',
      duration: service.deliveryTime.standard
    },
    {
      icon: RefreshCw,
      title: 'Review & Revisions',
      description: 'We refine the design based on your feedback until it perfectly matches your vision.',
      duration: '1-3 days'
    },
    {
      icon: CheckCircle,
      title: 'Final Delivery',
      description: 'Receive your completed project with all source files and usage guidelines.',
      duration: 'Same day'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-orange-900/30 via-red-900/20 to-purple-900/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-orange-400/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-red-400/15 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A proven workflow that ensures quality results and client satisfaction
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workflowSteps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center group-hover:border-purple-400/50 transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                
                {/* Step Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="text-white" size={24} />
                </div>
                
                {/* Step Content */}
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{step.description}</p>
                
                {/* Duration */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-600/20 backdrop-blur-sm rounded-full border border-purple-400/30">
                  <span className="text-xs text-purple-300">{step.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Benefits */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Why Our Process Works</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Transparent Communication</h4>
                <p className="text-gray-300 text-sm">Regular updates and clear communication throughout the project</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Quality Assurance</h4>
                <p className="text-gray-300 text-sm">Multiple review stages ensure the highest quality output</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Client Satisfaction</h4>
                <p className="text-gray-300 text-sm">We don't finish until you're completely satisfied</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
