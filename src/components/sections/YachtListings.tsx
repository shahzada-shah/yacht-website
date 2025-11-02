import { YachtCard } from '../ui/YachtCard';
import { SearchFilters } from './SearchSection';

/**
 * Yacht data interface
 * @interface Yacht
 * @property {string} id - Unique yacht identifier
 * @property {string} name - Yacht name
 * @property {number} price - Daily rental price
 * @property {number} year - Year built
 * @property {number} length - Yacht length in feet
 * @property {string} location - Current location
 * @property {number} cabins - Number of cabins
 * @property {number} guests - Guest capacity
 * @property {'Pre-owned' | 'New'} [condition] - Yacht condition
 * @property {boolean} [isNew] - Whether yacht is new
 * @property {string} [type] - Yacht type classification
 * @property {string} [image] - Path to yacht main image
 * @property {string[]} [images] - Array of additional image paths
 */
interface Yacht {
  id: string;
  name: string;
  price: number;
  year: number;
  length: number;
  location: string;
  cabins: number;
  guests: number;
  condition?: 'Pre-owned' | 'New';
  isNew?: boolean;
  type?: string;
  image?: string;
  images?: string[];
}

/**
 * Available yachts data
 */
const yachts: Yacht[] = [
  {
    id: '1',
    name: 'Luxury Yacht Crystal Wave 55',
    price: 1200,
    year: 2020,
    length: 55,
    location: 'Los Angeles, USA',
    cabins: 3,
    guests: 6,
    condition: 'Pre-owned',
    type: 'Motor Yacht',
    image: '/yachts/1/boat_01_01.png',
    images: [
      '/yachts/1/boat_01_01.png',
      '/yachts/1/boat_01_02.png',
      '/yachts/1/boat_01_03.png',
      '/yachts/1/boat_01_04.png',
    ],
  },
  {
    id: '2',
    name: 'Luxury Yacht Golden Horizon 68',
    price: 2400,
    year: 2021,
    length: 68,
    location: 'Los Angeles, USA',
    cabins: 4,
    guests: 8,
    isNew: true,
    type: 'Sailing Yacht',
    image: '/yachts/2/boat_01_01.png',
    images: [
      '/yachts/2/2_1.png',
      '/yachts/2/2_2.png',
      '/yachts/2/2_3.png',
      '/yachts/2/2_4.png',
    ],
  },
  {
    id: '3',
    name: 'Luxury Yacht Silver Pearl 72',
    price: 3000,
    year: 2019,
    length: 72,
    location: 'Los Angeles, USA',
    cabins: 5,
    guests: 10,
    condition: 'Pre-owned',
    type: 'Luxury Yacht',
    image: '/yachts/3/boat_01_01.png',
    images: [
      '/yachts/3/3_1.png',
      '/yachts/3/3_2.png',
      '/yachts/3/3_3.png',
      '/yachts/3/3_4.png',
    ],
  },
  {
    id: '4',
    name: 'Luxury Yacht Infinity Dream 80',
    price: 4500,
    year: 2022,
    length: 80,
    location: 'Miami, USA',
    cabins: 6,
    guests: 12,
    condition: 'Pre-owned',
    type: 'Motor Yacht',
    image: '/yachts/4/boat_01_01.png',
    images: [
      '/yachts/4/4_1.png',
      '/yachts/4/4_2.png',
      '/yachts/4/4_3.png',
      '/yachts/4/4_4.png',
    ],
  },
  {
    id: '5',
    name: 'Luxury Yacht Diamond Breeze 60',
    price: 1800,
    year: 2020,
    length: 60,
    location: 'Monaco',
    cabins: 4,
    guests: 8,
    isNew: true,
    type: 'Catamaran',
    image: '/yachts/5/boat_01_01.png',
    images: [
      '/yachts/5/5_1.png',
      '/yachts/5/5_2.png',
      '/yachts/5/5_3.png',
      '/yachts/5/5_4.png',
    ],
  },
  {
    id: '6',
    name: 'Luxury Yacht Imperial Star 95',
    price: 6200,
    year: 2023,
    length: 95,
    location: 'Ibiza, Spain',
    cabins: 7,
    guests: 14,
    condition: 'Pre-owned',
    type: 'Luxury Yacht',
    image: '/yachts/6/boat_01_01.png',
    images: [
      '/yachts/6/6_1.png',
      '/yachts/6/6_2.png',
      '/yachts/6/6_3.png',
      '/yachts/6/6_4.png',
    ],
  },
  {
    id: '7',
    name: 'Caribbean Explorer 58',
    price: 1600,
    year: 2021,
    length: 58,
    location: 'Caribbean',
    cabins: 3,
    guests: 6,
    isNew: true,
    type: 'Sailing Yacht',
    image: '/yachts/7/boat_01_01.png',
    images: [
      '/yachts/7/7_1.png',
      '/yachts/7/7_2.png',
      '/yachts/7/7_3.png',
      '/yachts/7/7_4.png',
    ],
  },
  {
    id: '8',
    name: 'Mediterranean Voyager 75',
    price: 3800,
    year: 2022,
    length: 75,
    location: 'Mediterranean',
    cabins: 5,
    guests: 10,
    condition: 'Pre-owned',
    type: 'Motor Yacht',
    image: '/yachts/8/boat_01_01.png',
    images: [
      '/yachts/8/8_1.png',
      '/yachts/8/8_2.png',
      '/yachts/8/8_3.png',
      '/yachts/8/8_4.png',
    ],
  },
];

/**
 * YachtListings component props
 * @interface YachtListingsProps
 * @property {SearchFilters | null} filters - Active search filters to apply
 */
interface YachtListingsProps {
  filters: SearchFilters | null;
}

/**
 * YachtListings Component
 *
 * Displays a grid of yacht cards with filtering capabilities.
 * Filters yachts based on location, type, price, and guest capacity.
 * Shows filtered results or all yachts if no filters applied.
 *
 * @component
 * @example
 * ```tsx
 * <YachtListings filters={searchFilters} />
 * ```
 *
 * @param {YachtListingsProps} props - Component properties
 * @returns {JSX.Element} The yacht listings section component
 */
export const YachtListings = ({ filters }: YachtListingsProps) => {
  /**
   * Filter yachts based on search criteria
   * @param {Yacht[]} yachts - All available yachts
   * @param {SearchFilters | null} filters - Active filters
   * @returns {Yacht[]} Filtered yacht list
   */
  const filterYachts = (yachts: Yacht[], filters: SearchFilters | null): Yacht[] => {
    if (!filters) return yachts;

    return yachts.filter((yacht) => {
      const matchesLocation = yacht.location === filters.location;

      const matchesType =
        filters.yachtType === 'All Yachts' ||
        yacht.type === filters.yachtType ||
        yacht.name.toLowerCase().includes(filters.yachtType.toLowerCase());

      const matchesPrice =
        yacht.price >= filters.minPrice &&
        (filters.maxPrice === Infinity || yacht.price <= filters.maxPrice);

      const matchesGuests = yacht.guests >= filters.minGuests;

      return matchesLocation && matchesType && matchesPrice && matchesGuests;
    });
  };

  const filteredYachts = filterYachts(yachts, filters);

  return (
    <section id="yacht-listings" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Available Yachts</h2>
          <p className="text-gray-600">
            {filteredYachts.length} {filteredYachts.length === 1 ? 'yacht' : 'yachts'} found
            {filters && ' matching your search'}
          </p>
        </div>

        {filteredYachts.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No yachts found</h3>
            <p className="text-gray-600">
              Try adjusting your search filters to find more options
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredYachts.map((yacht, index) => (
              <YachtCard
                key={yacht.id}
                id={yacht.id}
                name={yacht.name}
                price={yacht.price}
                year={yacht.year}
                length={yacht.length}
                location={yacht.location}
                cabins={yacht.cabins}
                guests={yacht.guests}
                condition={yacht.condition}
                isNew={yacht.isNew}
                image={yacht.image}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
