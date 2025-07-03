
import { useState, useEffect } from 'react';
import { Languages } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.host'), href: '#host' },
    { name: t('nav.villa'), href: '#villa' },
    { name: t('nav.gallery'), href: '#gallery' },
    { name: t('nav.explore'), href: '#explore' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'el' : 'en');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#hero')}
            className="font-playfair text-2xl font-bold text-aegean-800 hover:opacity-80 transition-opacity"
          >
            {t('logo')}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`font-inter font-medium transition-colors duration-200 hover:text-aegean-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
            
            {/* Language Toggle */}
            <div className="flex items-center space-x-2 ml-4">
              <Languages className={`w-4 h-4 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
              <span className={`text-sm font-inter ${isScrolled ? 'text-gray-700' : 'text-white'}`}>EN</span>
              <Switch
                checked={language === 'el'}
                onCheckedChange={toggleLanguage}
                className="data-[state=checked]:bg-aegean-600"
              />
              <span className={`text-sm font-inter ${isScrolled ? 'text-gray-700' : 'text-white'}`}>EL</span>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`w-6 h-0.5 mb-1 transition-all duration-300 ${
              isScrolled ? 'bg-gray-700' : 'bg-white'
            }`}></div>
            <div className={`w-6 h-0.5 mb-1 transition-all duration-300 ${
              isScrolled ? 'bg-gray-700' : 'bg-white'
            }`}></div>
            <div className={`w-6 h-0.5 transition-all duration-300 ${
              isScrolled ? 'bg-gray-700' : 'bg-white'
            }`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left py-2 font-inter font-medium text-gray-700 hover:text-aegean-600 transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            
            {/* Mobile Language Toggle */}
            <div className="flex items-center justify-between py-2 mt-2 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <Languages className="w-4 h-4 text-gray-700" />
                <span className="text-sm font-inter text-gray-700">Language</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-inter text-gray-700">EN</span>
                <Switch
                  checked={language === 'el'}
                  onCheckedChange={toggleLanguage}
                  className="data-[state=checked]:bg-aegean-600"
                />
                <span className="text-sm font-inter text-gray-700">EL</span>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
