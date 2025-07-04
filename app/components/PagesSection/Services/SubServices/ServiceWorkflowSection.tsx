import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import type { ServiceData } from '../../utils/serviceData';

interface ServiceWorkflowSectionProps {
  service: ServiceData;
}

export function ServiceWorkflowSection({ service }: ServiceWorkflowSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-pink-900/30 via-purple-900/20 to-indigo-900/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-pink-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A streamlined workflow designed to deliver exceptional results efficiently
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="max-w-4xl mx-auto">
          {service.workflow.map((step, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Step Number & Duration */}
                <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'} text-center md:text-left`}>
                  <div className="inline-flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="text-purple-400" size={20} />
                      <span className="text-purple-400 font-medium">{step.duration}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>

                {/* Visual Element */}
                <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} relative`}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 aspect-square flex items-center justify-center">
                    <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {step.step}
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow Connector */}
              {index < service.workflow.length - 1 && (
                <div className="flex justify-center mt-8">
                  <ArrowRight className="text-purple-400" size={32} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process Guarantee */}
        <div className="mt-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Our Process Guarantee</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We follow this proven process for every project to ensure consistent, high-quality results. 
            Your satisfaction is our priority, and we'll work with you until you're completely happy with the outcome.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center gap-2 text-purple-400">
              <Clock size={20} />
              <span>On-time delivery guaranteed</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-pink-400">
              <ArrowRight size={20} />
              <span>Clear communication at every step</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-blue-400">
              <ArrowRight size={20} />
              <span>Unlimited revisions on premium</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}