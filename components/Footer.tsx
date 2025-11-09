'use client';

import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: 'Personal Training', href: '#services' },
      { name: 'Nutrition Coaching', href: '#services' },
      { name: 'Group Classes', href: '#services' },
      { name: 'Online Programs', href: '#services' },
    ],
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Our Trainers', href: '#' },
      { name: 'Success Stories', href: '#testimonials' },
      { name: 'Blog', href: '#' },
    ],
    Support: [
      { name: 'FAQ', href: '#' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Schedule', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Disclaimer', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">FP</span>
              </div>
              <span className="font-bold text-xl text-white">FitPro Elite</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Transform your body and mind with professional fitness training and personalized coaching designed for lasting results.
            </p>
            <div className="space-y-3">
              <a href="tel:+15551234567" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </a>
              <a href="mailto:hello@fitproelite.com" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <Mail size={18} />
                <span>hello@fitproelite.com</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={18} />
                <span>123 Fitness Ave, Los Angeles, CA</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="max-w-2xl">
            <h3 className="text-white font-semibold text-xl mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-6">
              Get fitness tips, workout plans, and exclusive offers delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} FitPro Elite. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-500 transition-all duration-300 group"
                >
                  <Icon size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}