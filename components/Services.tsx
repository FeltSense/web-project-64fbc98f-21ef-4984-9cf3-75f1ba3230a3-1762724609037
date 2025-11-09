'use client';

import { Dumbbell, Apple, Users, TrendingUp, Heart, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Dumbbell,
      title: 'Personal Training',
      description: 'One-on-one coaching tailored to your goals with expert trainers who push you to achieve more than you thought possible.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Apple,
      title: 'Nutrition Coaching',
      description: 'Customized meal plans and nutritional guidance designed to fuel your body and complement your training regimen.',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: Users,
      title: 'Group Classes',
      description: 'High-energy group sessions that combine motivation, community support, and expert instruction for maximum results.',
      color: 'from-blue-600 to-teal-500',
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Advanced analytics and regular assessments to monitor your transformation and adjust your program for optimal results.',
      color: 'from-teal-600 to-blue-500',
    },
    {
      icon: Heart,
      title: 'Wellness Programs',
      description: 'Holistic approach to health including stress management, recovery protocols, and lifestyle optimization strategies.',
      color: 'from-blue-500 to-teal-500',
    },
    {
      icon: Zap,
      title: 'HIIT & Conditioning',
      description: 'Intense, efficient workouts designed to maximize fat loss, build endurance, and boost your metabolic rate.',
      color: 'from-teal-500 to-blue-600',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Professional
            <span className="block bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive fitness solutions designed to help you reach your goals faster and maintain results for life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={32} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center mt-6 text-blue-600 font-semibold group-hover:text-teal-600 transition-colors"
                >
                  Learn more
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            Not sure which service is right for you?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}