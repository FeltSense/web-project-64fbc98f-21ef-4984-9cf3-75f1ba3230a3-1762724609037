'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Marketing Executive',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      quote: 'FitPro Elite completely transformed my life. I lost 35 pounds in 4 months and gained confidence I never knew I had. The trainers are incredibly supportive and knowledgeable.',
      rating: 5,
      result: 'Lost 35 lbs',
    },
    {
      name: 'Michael Chen',
      role: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      quote: 'As someone who sits at a desk all day, I struggled with back pain and low energy. The personalized training program not only eliminated my pain but gave me more energy than ever.',
      rating: 5,
      result: 'Pain-Free Living',
    },
    {
      name: 'Jessica Rodriguez',
      role: 'Entrepreneur',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      quote: 'The nutrition coaching was a game-changer. I learned how to fuel my body properly while still enjoying food. Down 28 pounds and feeling amazing!',
      rating: 5,
      result: 'Lost 28 lbs',
    },
    {
      name: 'David Thompson',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      quote: 'At 45, I thought my best days were behind me. FitPro Elite proved me wrong. I\'m in the best shape of my life and have more energy than I did in my 20s.',
      rating: 5,
      result: 'Best Shape Ever',
    },
    {
      name: 'Emily Watson',
      role: 'Teacher',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
      quote: 'The group classes are incredible! The community support keeps me motivated, and the trainers make every workout challenging yet achievable. Highly recommend!',
      rating: 5,
      result: 'Gained Strength',
    },
    {
      name: 'James Parker',
      role: 'Financial Analyst',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
      quote: 'Professional, results-driven, and genuinely caring. The progress tracking helped me stay accountable and see real improvements every week. Worth every penny.',
      rating: 5,
      result: 'Consistent Results',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Real People,
            <span className="block bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Join thousands of satisfied clients who have transformed their lives with FitPro Elite.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-blue-100">
                  <Quote size={48} />
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                  "{testimonial.quote}"
                </p>

                {/* Result Badge */}
                <div className="inline-block bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  {testimonial.result}
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-6 border-t border-gray-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-blue-50"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:bg-blue-50 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-gray-600 group-hover:text-blue-600" size={24} />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:bg-blue-50 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-gray-600 group-hover:text-blue-600" size={24} />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">2,500+</div>
            <div className="text-gray-600">5-Star Reviews</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">95%</div>
            <div className="text-gray-600">Client Retention</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
            <div className="text-gray-600">Satisfaction Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
}