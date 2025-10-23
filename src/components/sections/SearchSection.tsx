import { Search, ChevronDown, MapPin, Anchor, DollarSign, Users } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

/**
 * SearchSection component props
 * @interface SearchSectionProps
 * @property {(filters: SearchFilters) => void} onSearch - Callback when search is performed
 */
interface SearchSectionProps {
  onSearch: (filters: SearchFilters) => void;
}

/**
 * Search filter values interface
 * @interface SearchFilters
 * @property {string} location - Selected location
 * @property {string} yachtType - Selected yacht type
 * @property {number} minPrice - Minimum price filter
 * @property {number} maxPrice - Maximum price filter
 * @property {number} minGuests - Minimum guest capacity
 */
export interface SearchFilters {
  location: string;
  yachtType: string;
  minPrice: number;
  maxPrice: number;
  minGuests: number;
}

/**
 * Available locations for yacht charter
 */
const locations = [
  'Los Angeles, USA',
  'Miami, USA',
  'Monaco',
  'Ibiza, Spain',
  'Caribbean',
  'Mediterranean',
];

/**
 * Available yacht types
 */
const yachtTypes = [
  'All Yachts',
  'Motor Yacht',
  'Sailing Yacht',
  'Catamaran',
  'Luxury Yacht',
];

/**
 * Price range options
 */
const priceRanges = [
  { label: 'Any Price', min: 0, max: Infinity },
  { label: '$1,000 - $2,000', min: 1000, max: 2000 },
  { label: '$2,000 - $3,000', min: 2000, max: 3000 },
  { label: '$3,000 - $5,000', min: 3000, max: 5000 },
  { label: '$5,000+', min: 5000, max: Infinity },
];

/**
 * Guest capacity options
 */
const guestOptions = [1, 2, 4, 6, 8, 10, 12, 14];

/**
 * SearchSection Component
 *
 * Advanced yacht search form with location, type, price, and guest filters.
 * Features functional dropdowns with click-outside-to-close behavior.
 * Positioned below the hero section for proper layering.
 *
 * @component
 * @example
 * ```tsx
 * <SearchSection onSearch={(filters) => handleSearch(filters)} />
 * ```
 *
 * @param {SearchSectionProps} props - Component properties
 * @returns {JSX.Element} The search section component
 */
export const SearchSection = ({ onSearch }: SearchSectionProps) => {
  /**
   * Selected location state
   */
  const [location, setLocation] = useState('Los Angeles, USA');

  /**
   * Selected yacht type state
   */
  const [yachtType, setYachtType] = useState('All Yachts');

  /**
   * Selected price range state
   */
  const [priceRange, setPriceRange] = useState(priceRanges[0]);

  /**
   * Selected guest count state
   */
  const [guests, setGuests] = useState(4);

  /**
   * Dropdown open states
   */
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  /**
   * Refs for dropdown containers
   */
  const locationRef = useRef<HTMLDivElement>(null);
  const typeRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);
  const guestsRef = useRef<HTMLDivElement>(null);

  /**
   * Handle click outside dropdowns to close them
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        openDropdown &&
        !locationRef.current?.contains(target) &&
        !typeRef.current?.contains(target) &&
        !priceRef.current?.contains(target) &&
        !guestsRef.current?.contains(target)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  /**
   * Toggle dropdown visibility
   * @param {string} dropdownName - Name of dropdown to toggle
   */
  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  /**
   * Handle search button click
   */
  const handleSearch = () => {
    onSearch({
      location,
      yachtType,
      minPrice: priceRange.min,
      maxPrice: priceRange.max,
      minGuests: guests,
    });
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative" ref={locationRef}>
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4" />
                Location
              </label>
              <button
                onClick={() => toggleDropdown('location')}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all text-left flex items-center justify-between hover:bg-gray-50"
              >
                <span className="text-gray-900">{location}</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform ${
                    openDropdown === 'location' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openDropdown === 'location' && (
                <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-64 overflow-y-auto">
                  {locations.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => {
                        setLocation(loc);
                        setOpenDropdown(null);
                      }}
                      className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                        location === loc ? 'bg-gray-100 font-semibold' : ''
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative" ref={typeRef}>
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-2">
                <Anchor className="w-4 h-4" />
                Type
              </label>
              <button
                onClick={() => toggleDropdown('type')}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all text-left flex items-center justify-between hover:bg-gray-50"
              >
                <span className="text-gray-900">{yachtType}</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform ${
                    openDropdown === 'type' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openDropdown === 'type' && (
                <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-xl z-50">
                  {yachtTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setYachtType(type);
                        setOpenDropdown(null);
                      }}
                      className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                        yachtType === type ? 'bg-gray-100 font-semibold' : ''
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative" ref={priceRef}>
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4" />
                Price
              </label>
              <button
                onClick={() => toggleDropdown('price')}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all text-left flex items-center justify-between hover:bg-gray-50"
              >
                <span className="text-gray-900">{priceRange.label}</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform ${
                    openDropdown === 'price' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openDropdown === 'price' && (
                <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-xl z-50">
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => {
                        setPriceRange(range);
                        setOpenDropdown(null);
                      }}
                      className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                        priceRange.label === range.label ? 'bg-gray-100 font-semibold' : ''
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative" ref={guestsRef}>
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-2">
                <Users className="w-4 h-4" />
                Guests
              </label>
              <button
                onClick={() => toggleDropdown('guests')}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all text-left flex items-center justify-between hover:bg-gray-50"
              >
                <span className="text-gray-900">{guests} guests</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform ${
                    openDropdown === 'guests' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openDropdown === 'guests' && (
                <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-64 overflow-y-auto">
                  {guestOptions.map((count) => (
                    <button
                      key={count}
                      onClick={() => {
                        setGuests(count);
                        setOpenDropdown(null);
                      }}
                      className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                        guests === count ? 'bg-gray-100 font-semibold' : ''
                      }`}
                    >
                      {count} {count === 1 ? 'guest' : 'guests'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-end">
              <button
                onClick={handleSearch}
                className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 font-semibold"
              >
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
