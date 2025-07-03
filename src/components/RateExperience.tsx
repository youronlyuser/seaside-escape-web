
import { Star } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const RateExperience = () => {
  const { t } = useLanguage();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating >= 4) {
      // Redirect to Google My Business page for 4-5 star ratings
      window.open('https://g.page/r/YOUR_GOOGLE_MY_BUSINESS_ID/review', '_blank');
    }
    
    setSubmitted(true);
    // Here you would typically send the data to your backend
    console.log('Rating:', rating);
  };

  const renderInteractiveStars = () => {
    return [...Array(5)].map((_, i) => {
      const starNumber = i + 1;
      return (
        <button
          key={i}
          type="button"
          onClick={() => setRating(starNumber)}
          onMouseEnter={() => setHoverRating(starNumber)}
          onMouseLeave={() => setHoverRating(0)}
          className="transition-transform duration-200 hover:scale-110"
        >
          <Star 
            className={`w-8 h-8 ${
              starNumber <= (hoverRating || rating) 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'text-gray-300 hover:text-yellow-300'
            }`} 
          />
        </button>
      );
    });
  };

  if (submitted) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto bg-green-50 rounded-2xl p-12">
            <div className="text-6xl mb-6">🙏</div>
            <h2 className="font-playfair text-3xl font-bold text-gray-800 mb-4">
              {t('rate.thanks')}
            </h2>
            <p className="font-inter text-lg text-gray-600">
              {t('rate.thanks.desc')}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('rate.title')}
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
            {t('rate.subtitle')}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-sand-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-6">
                {t('rate.question')}
              </h3>
              <div className="flex justify-center gap-2 mb-6">
                {renderInteractiveStars()}
              </div>
              {rating > 0 && (
                <p className="font-inter text-aegean-600 font-medium">
                  {rating === 1 && "We'd love to improve - thank you for your feedback."}
                  {rating === 2 && "Thank you for your feedback - we'll work to do better."}
                  {rating === 3 && "Thanks for your rating - we appreciate your input."}
                  {rating === 4 && "Great! Thank you for your positive feedback."}
                  {rating === 5 && "Wonderful! We're thrilled you had an amazing stay."}
                </p>
              )}
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={rating === 0}
                className="bg-aegean-600 hover:bg-aegean-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-inter font-semibold px-8 py-3 rounded-full transition-colors duration-300"
              >
                {t('rate.submit')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RateExperience;
