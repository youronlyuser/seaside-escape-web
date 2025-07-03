
import { Bed, Car, Wifi, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const StayOverview = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Bed, label: t('overview.bedrooms'), description: t('overview.bedrooms.desc') },
    { icon: Car, label: t('overview.bathrooms'), description: t('overview.bathrooms.desc') },
    { icon: Wifi, label: t('overview.pool'), description: t('overview.pool.desc') },
    { icon: Heart, label: t('overview.concierge'), description: t('overview.concierge.desc') },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('overview.title')}
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
            {t('overview.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-aegean-50 to-sand-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                <feature.icon className="w-8 h-8 text-aegean-600" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-2">
                {feature.label}
              </h3>
              <p className="font-inter text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StayOverview;
