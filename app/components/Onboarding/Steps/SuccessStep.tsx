import React from 'react';
import { CheckCircle, Mail, Calendar, ArrowRight, Download, Star } from 'lucide-react';

interface SuccessStepProps {
  requestId: string;
  clientEmail: string;
}

export function SuccessStep({ requestId, clientEmail }: SuccessStepProps) {
  const handleDownloadSummary = () => {
    // This would generate and download a PDF summary
    console.log('Downloading project summary...');
  };

  return (
    <div className="text-center space-y-8">
      {/* Success Icon */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 to-blue-600/30 rounded-full blur-3xl"></div>
        <div className="relative w-24 h-24 mx-auto bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
          <CheckCircle className="text-white" size={48} />
        </div>
      </div>

      {/* Success Message */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Request Submitted Successfully!
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Thank you for choosing Mascort! We've received your project request and our team is already reviewing it.
        </p>
      </div>

      {/* Request Details */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-md mx-auto">
        <h3 className="text-lg font-semibold text-white mb-4">Request Details</h3>
        <div className="space-y-3 text-left">
          <div className="flex justify-between">
            <span className="text-gray-400">Request ID:</span>
            <span className="text-white font-mono">{requestId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Email:</span>
            <span className="text-white">{clientEmail}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Submitted:</span>
            <span className="text-white">{new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
        <h3 className="text-xl font-semibold text-white mb-6">What's Next?</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Mail className="text-white" size={20} />
            </div>
            <h4 className="text-white font-medium mb-2">Email Confirmation</h4>
            <p className="text-gray-300 text-sm">Check your email for a confirmation message with all the details</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Calendar className="text-white" size={20} />
            </div>
            <h4 className="text-white font-medium mb-2">Team Review</h4>
            <p className="text-gray-300 text-sm">Our team will review your request and prepare a detailed quote</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="text-white" size={20} />
            </div>
            <h4 className="text-white font-medium mb-2">Quote Delivery</h4>
            <p className="text-gray-300 text-sm">Receive your personalized quote within 24 hours</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={handleDownloadSummary}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all duration-300"
        >
          <Download size={16} />
          Download Summary
        </button>
        
        <a
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 hover:scale-105 transition-all duration-300"
        >
          Return to Home
          <ArrowRight size={16} />
        </a>
      </div>

      {/* Contact Information */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-md mx-auto">
                <h3 className="text-lg font-semibold text-white mb-3">Need Immediate Assistance?</h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-gray-300">
            <Mail size={14} />
            <span>support@mascort.com</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Calendar size={14} />
            <span>Response time: Within 24 hours</span>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="text-center">
        <p className="text-gray-400 text-sm mb-2">Join 500+ happy clients who trust Mascort</p>
        <div className="flex justify-center items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="text-yellow-400 fill-current" size={16} />
          ))}
          <span className="text-gray-300 text-sm ml-2">4.9/5 average rating</span>
        </div>
      </div>
    </div>
  );
}
