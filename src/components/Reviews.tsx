
import { Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Reviews = () => {
  const { t } = useLanguage();

  const review = {
    name: "Maria & James",
    location: "London, UK",
    rating: 5,
    text: "Absolutely magical! The villa exceeded all our expectations. Waking up to the Aegean Sea every morning was pure bliss. Sarah was incredibly helpful and made our stay seamless.",
    highlight: "The infinity pool and sunset views"
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
    ));
  };

  return (
    <section className="py-20 bg-sand-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('reviews.title')}
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
            {t('reviews.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center">
              <div className="flex justify-center gap-1 mb-4">
                {renderStars(review.rating)}
              </div>
              <blockquote className="font-inter text-xl text-gray-700 leading-relaxed mb-6 italic">
                "{review.text}"
              </blockquote>
              <div className="bg-aegean-50 rounded-lg p-4 mb-6">
                <p className="font-inter text-sm text-aegean-700 font-medium">
                  {t('reviews.highlight')} {review.highlight}
                </p>
              </div>
              <div>
                <p className="font-playfair text-lg font-bold text-gray-800">
                  {review.name}
                </p>
                <p className="font-inter text-gray-600">
                  {review.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
