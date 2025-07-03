
import { Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FinalBookingCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-aegean-600 to-aegean-800 text-white relative overflow-hidden">
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="font-inter text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
            {t('cta.subtitle')}
          </p>
          <div className="text-sand-200 font-inter text-lg mb-8">
            {t('cta.available')}
          </div>
        </div>

        {/* Booking Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-white text-aegean-800 hover:bg-sand-50 font-inter font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            {t('cta.airbnb')}
          </button>
          <button className="bg-sand-500 hover:bg-sand-600 text-white font-inter font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            {t('cta.booking')}
          </button>
        </div>

        {/* Social Media Icons */}
        <div className="text-center">
          <p className="font-inter text-sand-200 mb-6">{t('cta.follow')}</p>
          <div className="flex justify-center gap-6">
            <a 
              href="#" 
              className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors duration-300 group"
            >
              <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a 
              href="#" 
              className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors duration-300 group"
            >
              <div className="w-6 h-6 font-bold text-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                Ab
              </div>
            </a>
            <a 
              href="#" 
              className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors duration-300 group"
            >
              <div className="w-6 h-6 font-bold text-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                B
              </div>
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-12 pt-8 border-t border-white/20">
          <p className="font-inter text-sand-200">
            {t('cta.contact')}{' '}
            <a href="mailto:hello@seasidehome-greece.com" className="text-white hover:text-sand-200 transition-colors duration-300">
              hello@seasidehome-greece.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalBookingCTA;
