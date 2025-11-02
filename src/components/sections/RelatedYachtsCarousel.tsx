import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { YachtCard } from '../ui/YachtCard';

interface RelatedYacht {
  id: string;
  name: string;
  price_per_day: number;
  year: number;
  length_ft: number;
  location: string;
  cabins: number;
  guests: number;
  condition?: 'Pre-owned' | 'New' | null;
  is_new: boolean;
}

interface RelatedYachtsCarouselProps {
  yachts: RelatedYacht[];
  currentYachtId: string;
}

export const RelatedYachtsCarousel = ({ yachts, currentYachtId }: RelatedYachtsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredYachts = yachts.filter((yacht) => yacht.id !== currentYachtId);

  if (filteredYachts.length === 0) return null;

  const itemsPerPage = 2;
  const totalPages = Math.ceil(filteredYachts.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const visibleYachts = filteredYachts.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Discover more yachts we suggest</h2>
          <a
            href="/"
            className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors font-semibold"
          >
            Explore whole fleet
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous yachts"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {visibleYachts.map((yacht) => (
              <YachtCard
                key={yacht.id}
                id={yacht.id}
                name={yacht.name}
                price={yacht.price_per_day}
                year={yacht.year}
                length={yacht.length_ft}
                location={yacht.location}
                cabins={yacht.cabins}
                guests={yacht.guests}
                condition={yacht.condition || undefined}
                isNew={yacht.is_new}
                image={`/yachts/${yacht.id}/boat_01_01.png`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next yachts"
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
