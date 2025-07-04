import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import type { ServiceData } from '../../utils/serviceData';

interface ServiceFAQSectionProps {
  service: ServiceData;
}

export function ServiceFAQSection({ service }: ServiceFAQSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-orange-900/30 via-red-900/20 to-purple-900/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about our {service.title.toLowerCase()} service
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Items */}
          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-purple-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group-hover:border-orange-400/30 transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <HelpCircle className="text-white" size={20} />
                      </div>
                      <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    </div>
                    <div className="flex-shrink-0">
                      {openFaq === index ? (
                        <ChevronUp className="text-orange-400" size={24} />
                      ) : (
                        <ChevronDown className="text-gray-400" size={24} />
                      )}
                    </div>
                  </button>

                  {/* Answer */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="p-6 pt-0 pl-20">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-16 bg-gradient-to-r from-orange-600/20 to-purple-600/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team is here to help! Reach out to us directly and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-600 to-pink-600 text-white font-semibold px-8 py-3 rounded-full hover:from-orange-700 hover:to-pink-700 transition-all duration-300 hover:scale-105">
                Contact Us
              </button>
              <button className="border border-white/20 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}