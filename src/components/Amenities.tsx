
import { Wifi, Heart, Car, Bed } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Amenities = () => {
  const { t } = useLanguage();

  const amenities = [
    { icon: Wifi, label: t('amenities.wifi'), description: t('amenities.wifi.desc') },
    { icon: Heart, label: t('amenities.smarttv'), description: t('amenities.smarttv.desc') },
    { icon: Car, label: t('amenities.kitchen'), description: t('amenities.kitchen.desc') },
    { icon: Bed, label: t('amenities.fireplace'), description: t('amenities.fireplace.desc') },
    { icon: Wifi, label: t('amenities.pool'), description: t('amenities.pool.desc') },
    { icon: Heart, label: t('amenities.hottub'), description: t('amenities.hottub.desc') },
    { icon: Car, label: t('amenities.security'), description: t('amenities.security.desc') },
    { icon: Bed, label: t('amenities.concierge'), description: t('amenities.concierge.desc') },
    { icon: Wifi, label: t('amenities.petfriendly'), description: t('amenities.petfriendly.desc') },
    { icon: Heart, label: t('amenities.outdoor'), description: t('amenities.outdoor.desc') },
    { icon: Car, label: t('amenities.bicycle'), description: t('amenities.bicycle.desc') },
    { icon: Bed, label: t('amenities.ac'), description: t('amenities.ac.desc') },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sand-50 via-white to-aegean-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('amenities.title')}
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
            {t('amenities.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {amenities.map((amenity, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-aegean-100 to-sand-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <amenity.icon className="w-6 h-6 text-aegean-600" />
              </div>
              <h3 className="font-inter font-semibold text-gray-800 mb-2">
                {amenity.label}
              </h3>
              <p className="font-inter text-sm text-gray-600">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
