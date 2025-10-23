import { useNavigate } from 'react-router-dom';

/**
 * Hero Component
 *
 * Landing page hero section with animated background, headline,
 * and call-to-action buttons. Features smooth scroll indicator.
 *
 * @component
 * @example
 * ```tsx
 * <Hero />
 * ```
 *
 * @returns {JSX.Element} The hero section component
 */
export const Hero = () => {
  const navigate = useNavigate();

  /**
   * Scrolls smoothly to the yacht listings section
   */
  const scrollToYachts = () => {
    const yachtsSection = document.getElementById('yacht-listings');
    if (yachtsSection) {
      yachtsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  /**
   * Navigates to the About page
   */
  const handleLearnMore = () => {
    navigate('/about');
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 1440 800"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0"
              y1="0"
              x2="1440"
              y2="400"
              stroke="rgba(0,0,0,0.1)"
              strokeWidth="1"
            />
            <line
              x1="1440"
              y1="0"
              x2="0"
              y2="400"
              stroke="rgba(0,0,0,0.1)"
              strokeWidth="1"
            />
            <line
              x1="0"
              y1="400"
              x2="1440"
              y2="800"
              stroke="rgba(0,0,0,0.1)"
              strokeWidth="1"
            />
            <line
              x1="1440"
              y1="400"
              x2="0"
              y2="800"
              stroke="rgba(0,0,0,0.1)"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6 animate-fade-in">
            From Sailing Dreams to Unforgettable Escapes
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 animate-fade-in-up">
            <span className="block text-stroke">Choose the Perfect Yacht</span>
            <span className="block text-stroke">for Your Voyage</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in-delay">
            Discover luxury on the open seas with our curated selection of premium yachts
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <button
              onClick={scrollToYachts}
              className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105"
            >
              Explore Yachts
            </button>
            <button
              onClick={handleLearnMore}
              className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
