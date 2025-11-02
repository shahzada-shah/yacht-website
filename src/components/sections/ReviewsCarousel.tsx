import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';
import { getAssetPath } from '../../lib/utils';

interface Review {
  id: string;
  reviewer_name: string;
  rating: number;
  comment: string;
  review_date: string;
}

interface ReviewsCarouselProps {
  reviews: Review[];
}

export const ReviewsCarousel = ({ reviews }: ReviewsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (reviews.length === 0) return null;

  const itemsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const visibleReviews = reviews.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Experiences That Define Us</h2>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <img
                      src={getAssetPath(`/yachts/testimony/test_${String(((Number(review.id) - 1) % 3) + 1).padStart(2, '0')}.png`)}
                      alt={review.reviewer_name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                  {review.reviewer_name}
                </h3>

                <p className="text-gray-700 text-center leading-relaxed mb-6 min-h-[120px]">
                  {review.comment}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-gray-900 text-gray-900" />
                    <span className="font-semibold text-gray-900">({review.rating})</span>
                  </div>
                  <span className="text-sm text-gray-600">
                    {new Date(review.review_date).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-gray-900 w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
