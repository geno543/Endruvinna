import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  children?: ReactNode;
}

const Footer = ({ children }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const navigation = {
    mission: [
      { name: 'Overview', href: '/mission' },
      { name: 'Objectives', href: '/mission#objectives' },
      { name: 'Timeline', href: '/mission#timeline' },
      { name: 'Base Operations', href: '/mission#base' },
    ],
    resources: [
      { name: 'Equipment', href: '/equipment' },
      { name: 'Waste Systems', href: '/equipment#waste-systems' },
      { name: 'Tools', href: '/equipment#tools' },
      { name: 'Integration', href: '/equipment#integration' },
    ],
    challenge: [
      { name: 'NASA Challenge', href: '/challenge' },
      { name: 'Requirements', href: '/challenge#requirements' },
      { name: 'Solution', href: '/challenge#solution' },
      { name: 'Timeline', href: '/challenge#timeline' },
    ],
    company: [
      { name: 'Contact', href: '/contact' },
      { name: 'Team', href: '/contact#team' },
      { name: 'Headquarters', href: '/contact#headquarters' },
      { name: 'Careers', href: '/contact' },
    ],
  };

  const socialLinks = [
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2 6a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-mars-brown via-mars-gray to-mars-black border-t border-mars-brown/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-br from-mars-red to-mars-vermilion rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-mars-red/25 transition-all duration-300">
                <svg className="w-8 h-8 text-mars-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-mars-white group-hover:text-mars-red transition-colors duration-200">Endruvinna</h3>
                <p className="text-mars-orange text-sm font-medium">Mission Control</p>
              </div>
            </Link>
            <p className="text-mars-white/80 text-sm leading-relaxed mb-6">
              Pioneering sustainable waste management solutions for Mars exploration and long-term human habitation on the Red Planet.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-10 h-10 bg-mars-brown/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-mars-red/20 hover:text-mars-red transition-all duration-300 transform hover:scale-110 border border-mars-brown/30"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold text-mars-white mb-4">Mission</h3>
            <ul className="space-y-3">
              {navigation.mission.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-mars-white/70 hover:text-mars-red transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-mars-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-mars-white/70 hover:text-mars-red transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-mars-white mb-4">Challenge</h3>
            <ul className="space-y-3">
              {navigation.challenge.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-mars-white/70 hover:text-mars-red transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-mars-white mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-mars-white/70 hover:text-mars-red transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-mars-brown/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-mars-white mb-2">Stay Updated</h3>
              <p className="text-mars-white/70 text-sm">
                Get the latest updates on our Mars mission progress and breakthrough discoveries.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-mars-brown/30 backdrop-blur-sm border border-mars-brown/50 rounded-xl text-mars-white placeholder-mars-white/50 focus:outline-none focus:ring-2 focus:ring-mars-red/50 focus:border-mars-red/50 transition-all duration-200"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-mars-red to-mars-orange text-mars-white font-bold rounded-xl hover:from-mars-orange hover:to-mars-red transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-mars-red/30 border border-mars-red/20">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-mars-brown/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-mars-white/60 text-sm">
            © {currentYear} Endruvinna Mission. All rights reserved.
          </p>
              <div className="flex space-x-6">
                <a href="#" className="text-mars-white/60 hover:text-mars-red text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-mars-white/60 hover:text-mars-red text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-mars-white/60 hover:text-mars-red text-sm transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-mars-white/60 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Houston, TX • Mission Control</span>
            </div>
          </div>
        </div>
      </div>
      {children}
    </footer>
  );
};

export default Footer;