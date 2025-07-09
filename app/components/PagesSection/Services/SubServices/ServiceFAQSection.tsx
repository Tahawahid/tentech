import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import type { ServiceData } from '../../../../utils/serviceData';

interface ServiceFAQSectionProps {
  service: ServiceData;
}

export function ServiceFAQSection({ service }: ServiceFAQSectionProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-indigo-900/30 via-purple-900/20 to-pink-900/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-indigo-400/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-pink-400/15 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get answers to common questions about our {service.title.toLowerCase()} service
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {service.faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-400/30 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-8 py-6 focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-2xl"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white pr-8">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <Minus className="text-purple-400" size={20} />
                    ) : (
                      <Plus className="text-purple-400" size={20} />
                    )}
                  </div>
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-8 pb-6 border-t border-white/10">
                  <p className="text-gray-300 leading-relaxed pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-gray-300 mb-6">
              Our team is here to help you with any questions about our services
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-3 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
