
import { Compass } from 'lucide-react';

const ExploreArea = () => {
  const attractions = [
    {
      title: "Local Beaches",
      description: "Soft sand, turquoise water",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Hidden Trails",
      description: "Olive groves and ruins",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Village Markets",
      description: "Fresh produce, handmade goods",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Traditional Tavernas",
      description: "Authentic Greek cuisine",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const restaurants = [
    { name: "Taverna Poseidon", cuisine: "Seafood & Traditional" },
    { name: "Olive Garden Bistro", cuisine: "Mediterranean Fusion" },
    { name: "Captain's Table", cuisine: "Fresh Fish & Grill" }
  ];

  const downloads = [
    { name: "Area Map", icon: "🗺️" },
    { name: "Local Guide", icon: "📖" },
    { name: "House Manual", icon: "🏠" }
  ];

  return (
    <section id="explore" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Explore the Area
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the hidden gems and authentic experiences of our beautiful island
          </p>
        </div>

        {/* Attractions Scroll */}
        <div className="mb-16">
          <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-8 text-center">
            Local Attractions
          </h3>
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {attractions.map((attraction, index) => (
              <div key={index} className="flex-shrink-0 w-80 group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <div 
                    className="h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${attraction.image}')` }}
                  >
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h4 className="font-playfair text-xl font-bold mb-2">{attraction.title}</h4>
                      <p className="font-inter text-sm">{attraction.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Restaurants */}
        <div className="mb-16">
          <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-8 text-center">
            Recommended Restaurants
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {restaurants.map((restaurant, index) => (
              <div key={index} className="bg-sand-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-aegean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="w-8 h-8 text-aegean-600" />
                </div>
                <h4 className="font-playfair text-xl font-bold text-gray-800 mb-2">{restaurant.name}</h4>
                <p className="font-inter text-gray-600">{restaurant.cuisine}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Downloads */}
        <div>
          <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-8 text-center">
            Helpful Downloads
          </h3>
          <div className="flex justify-center gap-6 flex-wrap">
            {downloads.map((download, index) => (
              <button 
                key={index}
                className="bg-aegean-600 hover:bg-aegean-700 text-white font-inter font-semibold px-6 py-3 rounded-full transition-colors duration-300 flex items-center gap-2"
              >
                <span className="text-lg">{download.icon}</span>
                {download.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

// Import Utensils icon at the top
import { Utensils } from 'lucide-react';

export default ExploreArea;
