import { useNavigate } from 'react-router-dom';
import heroImage from '/hero_img.png';

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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Golden hour warmth overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-orange-300/5 to-yellow-200/10"></div>
        
        {/* Lens haze / gradient overlay: dark left for text, bright right for yacht showcase */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-slate-800/30 via-45% to-transparent"></div>
        
        {/* Subtle vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 py-32">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-semibold text-white/90 uppercase tracking-[0.2em] mb-8 animate-fade-in">
            From Sailing Dreams to Unforgettable Escapes
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-6 animate-fade-in-up leading-[1.1] drop-shadow-2xl">
            Choose the Perfect Yacht
            <br />
            for Your Voyage
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/95 mb-10 max-w-xl leading-relaxed animate-fade-in-delay drop-shadow-lg">
            Discover luxury on the open seas with our curated selection of premium yachts
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 animate-fade-in-delay-2">
            <button
              onClick={scrollToYachts}
              className="group relative px-10 py-4 bg-white text-gray-900 font-bold text-base rounded-full hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-white/20 transform hover:-translate-y-1 hover:scale-[1.02] overflow-hidden"
            >
              <span className="relative z-10">Explore Yachts</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={handleLearnMore}
              className="group px-10 py-4 bg-transparent border-2 border-white text-white font-bold text-base rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-xl backdrop-blur-sm transform hover:-translate-y-1 hover:scale-[1.02]"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-7 h-11 border-2 border-white/60 rounded-full flex items-start justify-center p-2 backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-white rounded-full shadow-lg"></div>
        </div>
      </div>
    </section>
  );
};
