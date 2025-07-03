
import { Star } from 'lucide-react';
import { useState } from 'react';

const RateExperience = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the data to your backend
    console.log('Rating:', rating, 'Feedback:', feedback);
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
              Thank You!
            </h2>
            <p className="font-inter text-lg text-gray-600">
              Your feedback helps us continue providing exceptional experiences for our guests.
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
            Rate Your Experience
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
            Help future guests by sharing your thoughts about Seaside Home
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-sand-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-6">
                How was your stay?
              </h3>
              <div className="flex justify-center gap-2 mb-6">
                {renderInteractiveStars()}
              </div>
              {rating > 0 && (
                <p className="font-inter text-aegean-600 font-medium">
                  {rating === 1 && "We'd love to improve - please tell us more below."}
                  {rating === 2 && "Thank you for your feedback - how can we do better?"}
                  {rating === 3 && "Thanks for your rating - what could have been better?"}
                  {rating === 4 && "Great! What made your stay enjoyable?"}
                  {rating === 5 && "Wonderful! What did you love most about your stay?"}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="feedback" className="block font-inter font-semibold text-gray-800 mb-3">
                What did you love most? (Optional)
              </label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share your favorite moments or suggestions..."
                className="w-full p-4 border border-gray-300 rounded-lg font-inter text-gray-700 focus:outline-none focus:ring-2 focus:ring-aegean-500 focus:border-transparent resize-none"
                rows={4}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={rating === 0}
                className="bg-aegean-600 hover:bg-aegean-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-inter font-semibold px-8 py-3 rounded-full transition-colors duration-300"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RateExperience;
