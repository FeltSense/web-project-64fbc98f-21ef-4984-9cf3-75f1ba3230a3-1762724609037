'use client';

import { Check, Zap, Shield, Award } from 'lucide-react';

export default function Pricing() {
  const features = [
    'Personalized Training Program',
    'Custom Nutrition Plan',
    'Weekly Progress Check-ins',
    'Access to All Group Classes',
    'Mobile App Access',
    '24/7 Trainer Support',
    'Body Composition Analysis',
    'Workout Video Library',
  ];

  const trustBadges = [
    { icon: Zap, text: 'Instant Access' },
    { icon: Shield, text: 'Money-Back Guarantee' },
    { icon: Award, text: 'Certified Trainers' },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Start Your
            <span className="block bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Transformation Today
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get unlimited access to all our professional services for one simple monthly price.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-blue-100">
            <div className="bg-gradient-to-r from-blue-600 to-teal-500 px-8 py-6 text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 text-white text-sm font-semibold mb-2">
                🔥 MOST POPULAR
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Elite Membership</h3>
              <p className="text-blue-100">Everything you need to succeed</p>
            </div>

            <div className="p-8 md:p-12">
              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-gray-500 text-2xl line-through">$99</span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">70% OFF</span>
                </div>
                <div className="flex items-baseline justify-center space-x-2">
                  <span className="text-6xl md:text-7xl font-bold text-gray-900">$29</span>
                  <span className="text-2xl text-gray-500">/month</span>
                </div>
                <p className="text-gray-600 mt-2">Cancel anytime • No hidden fees</p>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="text-white" size={16} />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white text-center px-8 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 mb-6"
              >
                Start Your Free Trial
              </a>

              <p className="text-center text-sm text-gray-500 mb-8">
                First 7 days free • Then $29/month • Cancel anytime
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
                {trustBadges.map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full mb-2">
                        <Icon className="text-blue-600" size={24} />
                      </div>
                      <div className="text-sm text-gray-600 font-medium">{badge.text}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center space-y-4">
            <p className="text-gray-600">
              <span className="font-semibold text-gray-900">30-Day Money-Back Guarantee:</span> Not satisfied? Get a full refund, no questions asked.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Shield size={16} />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check size={16} />
                <span>SSL Encrypted</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award size={16} />
                <span>Trusted by 10K+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}