import { type ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  children?: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Mission', href: '/mission' },
    { name: 'Equipment', href: '/equipment' },
    { name: 'Challenge', href: '/challenge' },
    { name: 'Waste Management', href: '/waste-management' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-mars-gray/95 backdrop-blur-sm border-b border-mars-brown/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-mars-red to-mars-vermilion rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-mars-red/25 transition-all duration-300">
              <svg className="w-8 h-8 text-mars-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-mars-white group-hover:text-mars-red transition-colors duration-200">Endruvinna System</h1>
              <p className="text-sm text-mars-orange font-medium">Mission Control</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-gradient-to-r from-mars-red to-mars-vermilion text-mars-white shadow-lg shadow-mars-red/25'
                    : 'text-mars-white/80 hover:text-mars-white hover:bg-mars-brown/50 backdrop-blur-sm'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-mars-red to-mars-orange text-mars-white px-6 py-3 rounded-xl font-bold hover:from-mars-orange hover:to-mars-red transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-mars-red/30 border border-mars-red/20"
            >
              Join Mission
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-mars-white/80 hover:text-mars-white hover:bg-mars-brown/50 transition-all duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-2 bg-mars-gray/95 backdrop-blur-sm border-t border-mars-brown/30 rounded-b-2xl">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-gradient-to-r from-mars-red to-mars-vermilion text-mars-white shadow-lg'
                      : 'text-mars-white/80 hover:text-mars-white hover:bg-mars-brown/50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full mt-4 bg-gradient-to-r from-mars-red to-mars-orange text-mars-white px-4 py-3 rounded-xl font-bold text-center hover:from-mars-orange hover:to-mars-red transition-all duration-300 shadow-lg border border-mars-red/20"
              >
                Join Mission
              </Link>
            </div>
          </div>
        )}
      </div>
      {children}
    </header>
  );
};

export default Header;