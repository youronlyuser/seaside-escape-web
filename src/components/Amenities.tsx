
import { Wifi, Heart, Car, Bed } from 'lucide-react';

const Amenities = () => {
  const amenities = [
    { icon: Wifi, label: "Free Wi-Fi", description: "High-speed internet throughout" },
    { icon: Heart, label: "Smart TV", description: "Netflix & streaming ready" },
    { icon: Car, label: "Fully Equipped Kitchen", description: "Cook like a local chef" },
    { icon: Bed, label: "Fireplace", description: "Cozy evening ambiance" },
    { icon: Wifi, label: "Private Pool", description: "Infinity pool with sea views" },
    { icon: Heart, label: "Hot Tub", description: "Relax under the stars" },
    { icon: Car, label: "Secure Access", description: "Safe & private entrance" },
    { icon: Bed, label: "Concierge Service", description: "24/7 guest support" },
    { icon: Wifi, label: "Pet Friendly", description: "Bring your furry friends" },
    { icon: Heart, label: "Outdoor Dining", description: "Al fresco dining setup" },
    { icon: Car, label: "Bicycle Rental", description: "Explore the island" },
    { icon: Bed, label: "Air Conditioning", description: "Climate control comfort" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sand-50 via-white to-aegean-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Luxury Amenities
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for the perfect Mediterranean getaway
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
