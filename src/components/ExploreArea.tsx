
import { MapPin, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ExploreArea = () => {
  const { t } = useLanguage();

  const attractions = [
    {
      title: t('explore.beaches'),
      description: t('explore.beaches.desc'),
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: t('explore.trails'), 
      description: t('explore.trails.desc'),
      image: "https://images.unsplash.com/photo-1601041178049-adf2d1a6b9c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: t('explore.markets'),
      description: t('explore.markets.desc'), 
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const restaurants = [
    {
      name: t('explore.taverna'),
      specialty: t('explore.taverna.desc'),
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: t('explore.bistro'), 
      specialty: t('explore.bistro.desc'),
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: t('explore.terrace'),
      specialty: t('explore.terrace.desc'),
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const downloads = [
    { name: t('explore.map'), icon: MapPin },
    { name: t('explore.guide'), icon: Download },
    { name: t('explore.manual'), icon: Download }
  ];

  return (
    <section id="explore" className="py-20 bg-white">
      <style>
        {`
          .scroll-container {
            scrollbar-width: thin;
            scrollbar-color: #0891b2 #f1f5f9;
          }
          .scroll-container::-webkit-scrollbar {
            height: 8px;
          }
          .scroll-container::-webkit-scrollbar-track {
            background: #f1f5f9;
            border-radius: 4px;
          }
          .scroll-container::-webkit-scrollbar-thumb {
            background: #0891b2;
            border-radius: 4px;
          }
          .scroll-container::-webkit-scrollbar-thumb:hover {
            background: #0e7490;
          }
        `}
      </style>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('explore.title')}
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
            {t('explore.subtitle')}
          </p>
        </div>

        {/* Attractions */}
        <div className="mb-16">
          <h3 className="font-playfair text-3xl font-bold text-gray-800 mb-8 text-center">
            {t('explore.attractions')}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={attraction.image} 
                    alt={attraction.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-playfair text-xl font-bold text-gray-800 mb-2">
                    {attraction.title}
                  </h4>
                  <p className="font-inter text-gray-600">
                    {attraction.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Restaurants */}
        <div className="mb-16">
          <h3 className="font-playfair text-3xl font-bold text-gray-800 mb-8 text-center">
            {t('explore.restaurants')}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {restaurants.map((restaurant, index) => (
              <div key={index} className="bg-sand-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4 mx-auto">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-playfair text-xl font-bold text-gray-800 mb-2 text-center">
                  {restaurant.name}
                </h4>
                <p className="font-inter text-gray-600 text-center">
                  {restaurant.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Downloads */}
        <div className="text-center">
          <h3 className="font-playfair text-3xl font-bold text-gray-800 mb-8">
            {t('explore.resources')}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {downloads.map((download, index) => (
              <button 
                key={index}
                className="flex items-center gap-3 bg-aegean-600 hover:bg-aegean-700 text-white font-inter font-semibold px-6 py-3 rounded-full transition-colors duration-300"
              >
                <download.icon className="w-5 h-5" />
                {t('explore.download')} {download.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreArea;
