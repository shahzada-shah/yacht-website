import { Check, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/**
 * AboutPage Component
 *
 * Displays information about the Yacht Booking platform with a hero section
 * and image gallery. Features smooth animations and responsive design.
 *
 * @component
 * @example
 * ```tsx
 * <AboutPage />
 * ```
 *
 * @returns {JSX.Element} The about page component
 */
export const AboutPage = () => {
  const navigate = useNavigate();

  /**
   * List of key features offered by the platform
   */
  const features = [
    'Simple booking process, even for beginners',
    'Wide selection of yachts and destinations',
    'Extra services tailored to your needs',
    'Transparent pricing with instant budget calculation',
    'Full support from planning to sailing',
  ];

  /**
   * Gallery images placeholder array
   */
  const galleryImages = Array(8).fill(null);

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="w-full aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
            <svg
              className="w-full h-full"
              viewBox="0 0 800 600"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <line x1="0" y1="0" x2="800" y2="600" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
              <line x1="800" y1="0" x2="0" y2="600" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
            </svg>
          </div>

          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Search. Book. Sail. Relax.
            </h1>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              At Yacht Booking, we make yacht chartering simple and accessible for everyone. Our
              platform helps you choose the right yacht, plan your budget, and add extra services
              like a skipper, crew, or even training for a skipper's license — all in just a few
              steps.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 transition-transform duration-200 hover:translate-x-2"
                >
                  <Check className="w-6 h-6 text-gray-900 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-900 text-lg">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => navigate('/')}
              className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 inline-flex items-center gap-2"
            >
              Start Your Search
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {galleryImages.slice(0, 4).map((_, index) => (
            <div
              key={index}
              className="aspect-[2/1] bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <svg
                className="w-full h-full"
                viewBox="0 0 400 200"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                <line x1="0" y1="0" x2="400" y2="200" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                <line x1="400" y1="0" x2="0" y2="200" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
              </svg>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.slice(4, 8).map((_, index) => (
            <div
              key={index + 4}
              className="aspect-[2/1] bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <svg
                className="w-full h-full"
                viewBox="0 0 400 200"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                <line x1="0" y1="0" x2="400" y2="200" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                <line x1="400" y1="0" x2="0" y2="200" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
