import { Waves, Anchor, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getAssetPath } from '../lib/utils';

/**
 * Service item interface
 * @interface Service
 * @property {any} icon - The Lucide icon component for the service
 * @property {string} title - The service title
 * @property {string} subtitle - The service subtitle/heading
 * @property {string} description - Detailed service description
 * @property {string} pricing - Pricing information
 * @property {string[]} badges - Skill level badges (Beginner, Amateur, Professional)
 */
interface Service {
  icon: any;
  title: string;
  subtitle: string;
  description: string;
  pricing: string;
  badges: string[];
  image: string;
}

/**
 * Available services configuration
 */
const services: Service[] = [
  {
    icon: Waves,
    title: 'Diving',
    subtitle: 'Underwater Explorer',
    description:
      'Get certified to dive with our expert instructors! Learn essential skills, explore local dive sites, and discover the wonders of the underwater world.',
    pricing: '$80-$150 per dive | $400-$600 per course',
    badges: ['Beginner', 'Professional'],
    image: getAssetPath('/services/service_01.png'),
  },
  {
    icon: Anchor,
    title: 'Sailing Lessons',
    subtitle: 'Learn to Sail',
    description:
      'Get hands-on experience in steering, trimming sails, and understanding wind patterns. Perfect start for future skippers or those who want to enjoy sailing as a hobby.',
    pricing: '$300-$600 per weekend course | $1200-$1500 per full program',
    badges: ['Beginner', 'Amateur'],
    image: getAssetPath('/services/service_02.png'),
  },
  {
    icon: Anchor,
    title: 'Skipper License Training',
    subtitle: 'Become a Captain',
    description:
      'Intensive training to prepare for your international skipper license. Includes navigation, safety at sea, docking, and night sailing.',
    pricing: '$700-$1500 per course (5-7 days)',
    badges: ['Amateur', 'Professional'],
    image: getAssetPath('/services/service_03.png'),
  },
];

/**
 * ServicesPage Component
 *
 * Displays available yacht-related services including diving, sailing lessons,
 * and skipper license training. Each service card includes details, pricing,
 * and an add-to-cart action.
 *
 * @component
 * @example
 * ```tsx
 * <ServicesPage />
 * ```
 *
 * @returns {JSX.Element} The services page component
 */
export const ServicesPage = () => {
  const { addItem } = useCart();

  /**
   * Handles adding a service to the cart
   * @param {Service} service - The service to add
   */
  const handleAddToCart = (service: Service) => {
    addItem({
      id: `service-${service.title.toLowerCase().replace(/\s+/g, '-')}`,
      name: service.subtitle,
      type: 'service',
      price: parseInt(service.pricing.match(/\d+/)?.[0] || '0'),
      image: service.image,
      metadata: {
        description: service.description,
        badges: service.badges,
      },
    });
  };
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 text-center mb-16 leading-tight">
          Services that will make your
          <br />
          trip unforgettable
        </h1>

        <div className="space-y-6 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-gray-100 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              <div className="p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <service.icon className="w-6 h-6 text-gray-900" />
                      <span className="font-semibold text-gray-900">{service.title}</span>
                    </div>
                    <div className="flex gap-2">
                      {service.badges.map((badge, badgeIndex) => (
                        <span
                          key={badgeIndex}
                          className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h2 className="text-4xl font-bold text-gray-900 mb-4">{service.subtitle}</h2>

                  <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <p className="text-gray-900 font-semibold">{service.pricing}</p>
                </div>
              </div>

              <div className="relative aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                <img
                  src={getAssetPath(`/services/service_${String(index + 1).padStart(2, '0')}.png`)}
                  alt={`${service.subtitle} image`}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <button
                  onClick={() => handleAddToCart(service)}
                  className="absolute bottom-6 right-6 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-200 hover:scale-105 flex items-center gap-2 shadow-lg"
                >
                  Add to cart
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                    <Plus className="w-4 h-4 text-white" />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105"
          >
            View all services
          </button>
        </div>
      </div>
    </div>
  );
};
