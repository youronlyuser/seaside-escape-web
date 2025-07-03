
import Header from '../components/Header';
import Hero from '../components/Hero';
import HostIntroduction from '../components/HostIntroduction';
import StayOverview from '../components/StayOverview';
import Amenities from '../components/Amenities';
import Gallery from '../components/Gallery';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HostIntroduction />
      <StayOverview />
      <Amenities />
      <Gallery />
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold mb-4">Seaside Home</h3>
              <p className="font-inter text-gray-300">
                Your gateway to authentic Greek island luxury. Experience the magic of the Aegean Sea.
              </p>
            </div>
            <div>
              <h4 className="font-inter font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 font-inter text-gray-300">
                <li><a href="#host" className="hover:text-white transition-colors">Your Host</a></li>
                <li><a href="#villa" className="hover:text-white transition-colors">The Villa</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                <li><a href="#explore" className="hover:text-white transition-colors">Explore</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-inter font-semibold mb-4">Book Your Stay</h4>
              <div className="space-y-3">
                <button className="block w-full bg-aegean-600 hover:bg-aegean-700 text-white font-inter font-semibold px-4 py-2 rounded-lg transition-colors">
                  Book on Airbnb
                </button>
                <button className="block w-full bg-olive-600 hover:bg-olive-700 text-white font-inter font-semibold px-4 py-2 rounded-lg transition-colors">
                  Book on Booking.com
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center font-inter text-gray-400">
            <p>&copy; 2024 Seaside Home. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
