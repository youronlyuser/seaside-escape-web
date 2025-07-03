
import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "Maria & James",
      location: "London, UK",
      rating: 5,
      text: "Absolutely magical! The villa exceeded all our expectations. Waking up to the Aegean Sea every morning was pure bliss. Sarah was incredibly helpful and made our stay seamless.",
      highlight: "The infinity pool and sunset views"
    },
    {
      name: "Elena Rodriguez",
      location: "Barcelona, Spain", 
      rating: 5,
      text: "This is paradise on earth! The villa is beautifully designed with every comfort you could need. The location is perfect - peaceful yet close to charming local tavernas.",
      highlight: "Authentic Greek island experience"
    },
    {
      name: "David & Sophie Chen",
      location: "Sydney, Australia",
      rating: 5,
      text: "Our honeymoon at Seaside Home was unforgettable. The attention to detail, the stunning architecture, and the warm Greek hospitality made it the perfect romantic getaway.",
      highlight: "Perfect for romantic escapes"
    },
    {
      name: "The Johnson Family",
      location: "Toronto, Canada",
      rating: 5,
      text: "Amazing family vacation! The kids loved the pool while we enjoyed the peaceful mornings on the terrace. The villa is spacious and beautifully appointed.",
      highlight: "Family-friendly with stunning views"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

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
            Guest Reviews
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our guests about their unforgettable experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative">
            <div className="text-center mb-8">
              <div className="flex justify-center gap-1 mb-4">
                {renderStars(reviews[currentReview].rating)}
              </div>
              <blockquote className="font-inter text-xl text-gray-700 leading-relaxed mb-6 italic">
                "{reviews[currentReview].text}"
              </blockquote>
              <div className="bg-aegean-50 rounded-lg p-4 mb-6">
                <p className="font-inter text-sm text-aegean-700 font-medium">
                  What they loved most: {reviews[currentReview].highlight}
                </p>
              </div>
              <div>
                <p className="font-playfair text-lg font-bold text-gray-800">
                  {reviews[currentReview].name}
                </p>
                <p className="font-inter text-gray-600">
                  {reviews[currentReview].location}
                </p>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentReview ? 'bg-aegean-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
