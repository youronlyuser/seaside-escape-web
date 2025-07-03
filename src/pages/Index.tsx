
import Header from '../components/Header';
import Hero from '../components/Hero';
import HostIntroduction from '../components/HostIntroduction';
import StayOverview from '../components/StayOverview';
import Amenities from '../components/Amenities';
import Gallery from '../components/Gallery';
import EnjoyYourStay from '../components/EnjoyYourStay';
import ExploreArea from '../components/ExploreArea';
import RentalServices from '../components/RentalServices';
import FAQ from '../components/FAQ';
import Reviews from '../components/Reviews';
import RateExperience from '../components/RateExperience';
import FinalBookingCTA from '../components/FinalBookingCTA';
import { useLanguage } from '../contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="host">
        <HostIntroduction />
      </div>
      <div id="villa">
        <StayOverview />
        <Amenities />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <EnjoyYourStay />
      <div id="explore">
        <ExploreArea />
      </div>
      <RentalServices />
      <FAQ />
      <Reviews />
      <RateExperience />
      <div id="contact">
        <FinalBookingCTA />
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold mb-4">{t('logo')}</h3>
              <p className="font-inter text-gray-300">
                {t('footer.description')}
              </p>
            </div>
            <div>
              <h4 className="font-inter font-semibold mb-4">{t('footer.links')}</h4>
              <ul className="space-y-2 font-inter text-gray-300">
                <li><button onClick={() => document.querySelector('#host')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">{t('nav.host')}</button></li>
                <li><button onClick={() => document.querySelector('#villa')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">{t('nav.villa')}</button></li>
                <li><button onClick={() => document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">{t('nav.gallery')}</button></li>
                <li><button onClick={() => document.querySelector('#explore')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">{t('nav.explore')}</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-inter font-semibold mb-4">{t('footer.book')}</h4>
              <div className="space-y-3">
                <button className="block w-full bg-aegean-600 hover:bg-aegean-700 text-white font-inter font-semibold px-4 py-2 rounded-lg transition-colors">
                  {t('cta.airbnb')}
                </button>
                <button className="block w-full bg-olive-600 hover:bg-olive-700 text-white font-inter font-semibold px-4 py-2 rounded-lg transition-colors">
                  {t('cta.booking')}
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center font-inter text-gray-400">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
