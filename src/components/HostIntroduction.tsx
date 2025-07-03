
import { Star } from 'lucide-react';

const HostIntroduction = () => {
  return (
    <section id="host" className="py-20 bg-gradient-to-br from-sand-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Host Photo */}
            <div className="text-center md:text-left">
              <div className="inline-block relative">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b332c28c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Sarah - Your Host"
                  className="w-48 h-48 rounded-full object-cover shadow-xl"
                />
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-gray-700">Superhost</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Host Information */}
            <div className="text-center md:text-left">
              <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-4">
                Meet Sarah, Your Host
              </h2>
              <p className="font-inter text-lg text-gray-600 mb-6 leading-relaxed">
                Yamas! I'm Sarah, and I've been sharing the magic of Greek island life with travelers 
                for over 8 years. Born and raised here, I know all the hidden gems and secret spots 
                that will make your stay unforgettable.
              </p>
              <p className="font-inter text-lg text-gray-600 mb-8 leading-relaxed">
                From the best sunset viewpoints to authentic tavernas locals love, I'm here to ensure 
                your Greek island dream becomes reality. Welcome to our slice of paradise!
              </p>
              
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="font-inter text-gray-700 font-medium">Airbnb Superhost</span>
              </div>
              
              <button className="mt-6 bg-aegean-600 hover:bg-aegean-700 text-white font-inter font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                View Airbnb Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostIntroduction;
