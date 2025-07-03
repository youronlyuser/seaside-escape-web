
import { Car, Compass } from 'lucide-react';

const RentalServices = () => {
  const services = [
    {
      icon: Car,
      title: "Car Rentals",
      description: "Explore the island at your own pace with our trusted rental partners",
      features: ["Economy to luxury vehicles", "Free delivery to villa", "GPS included"]
    },
    {
      icon: Compass,
      title: "Boat Tours",
      description: "Discover hidden coves and pristine beaches accessible only by sea",
      features: ["Half & full day tours", "Sunset cruises", "Snorkeling equipment"]
    },
    {
      icon: '🏄‍♂️',
      title: "Water Sports",
      description: "Thrilling adventures on the crystal-clear Aegean waters",
      features: ["Jet ski rentals", "Paddleboarding", "Scuba diving lessons"]
    }
  ];

  return (
    <section className="py-20 bg-aegean-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Rental Services & Experiences
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
            Enhance your stay with curated experiences and convenient services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="text-center mb-6">
                {typeof service.icon === 'string' ? (
                  <div className="text-4xl mb-4">{service.icon}</div>
                ) : (
                  <div className="w-16 h-16 bg-aegean-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-aegean-200 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-aegean-600" />
                  </div>
                )}
                <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="font-inter text-gray-600 mb-6">
                  {service.description}
                </p>
              </div>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="font-inter text-sm text-gray-600 flex items-center">
                    <div className="w-2 h-2 bg-aegean-500 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RentalServices;
