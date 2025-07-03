
import { useLanguage } from '../contexts/LanguageContext';

const EnjoyYourStay = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-sand-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('enjoy.title')}
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
            {t('enjoy.subtitle')}
          </p>
        </div>

        {/* First Section - Relax by the Aegean */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div 
            className="h-96 bg-cover bg-center rounded-2xl shadow-lg"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
            }}
          ></div>
          <div className="space-y-6">
            <h3 className="font-playfair text-3xl font-bold text-gray-800">
              {t('enjoy.relax.title')}
            </h3>
            <p className="font-inter text-lg text-gray-600 leading-relaxed">
              {t('enjoy.relax.desc1')}
            </p>
            <p className="font-inter text-lg text-gray-600 leading-relaxed">
              {t('enjoy.relax.desc2')}
            </p>
          </div>
        </div>

        {/* Second Section - Entertain in Style */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:order-2">
            <h3 className="font-playfair text-3xl font-bold text-gray-800">
              {t('enjoy.entertain.title')}
            </h3>
            <p className="font-inter text-lg text-gray-600 leading-relaxed">
              {t('enjoy.entertain.desc1')}
            </p>
            <p className="font-inter text-lg text-gray-600 leading-relaxed">
              {t('enjoy.entertain.desc2')}
            </p>
          </div>
          <div 
            className="h-96 bg-cover bg-center rounded-2xl shadow-lg md:order-1"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default EnjoyYourStay;
