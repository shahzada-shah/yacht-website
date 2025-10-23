import { Heart, Calendar, Ruler, MapPin, Bed, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext';

/**
 * YachtCard component props
 * @interface YachtCardProps
 * @property {string} [id] - Optional yacht ID for linking to detail page
 * @property {string} name - The yacht name
 * @property {number} price - Daily rental price
 * @property {number} year - Year the yacht was built
 * @property {number} length - Yacht length in feet
 * @property {string} location - Current yacht location
 * @property {number} cabins - Number of cabins
 * @property {number} guests - Maximum guest capacity
 * @property {'Pre-owned' | 'New'} [condition] - Yacht condition status
 * @property {boolean} [isNew] - Whether the yacht is new (defaults to false)
 */
interface YachtCardProps {
  id?: string;
  name: string;
  price: number;
  year: number;
  length: number;
  location: string;
  cabins: number;
  guests: number;
  condition?: 'Pre-owned' | 'New';
  isNew?: boolean;
}

/**
 * YachtCard Component
 *
 * Displays a yacht listing card with image, details, and specifications.
 * Includes hover animations and can optionally link to a detail page.
 * Features a favorite button and condition badges.
 *
 * @component
 * @example
 * ```tsx
 * <YachtCard
 *   id="1"
 *   name="Ocean Breeze"
 *   price={2500}
 *   year={2020}
 *   length={65}
 *   location="Miami, FL"
 *   cabins={3}
 *   guests={8}
 *   isNew
 * />
 * ```
 *
 * @param {YachtCardProps} props - The yacht card properties
 * @returns {JSX.Element} The yacht card component
 */
export const YachtCard = ({
  id,
  name,
  price,
  year,
  length,
  location,
  cabins,
  guests,
  condition,
  isNew = false,
}: YachtCardProps) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorited = id ? isFavorite(id) : false;

  /**
   * Handles toggling favorite status
   * @param {React.MouseEvent} e - Mouse event
   */
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (id) {
      toggleFavorite({
        id,
        name,
        price,
        year,
        length,
        location,
        cabins,
        guests,
      });
    }
  };
  const cardContent = (
    <article className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-full h-full"
            viewBox="0 0 400 300"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="0" y1="0" x2="400" y2="300" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
            <line x1="400" y1="0" x2="0" y2="300" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
          </svg>
        </div>

        <button
          onClick={handleFavoriteClick}
          className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200 z-10 hover:scale-110"
          aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            className={`w-5 h-5 transition-all duration-200 ${
              favorited ? 'fill-red-500 text-red-500' : 'text-gray-600 hover:text-red-500'
            }`}
          />
        </button>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
              {name}
            </h3>
            <p className="text-xl font-bold text-gray-900">
              ${price.toLocaleString()}{' '}
              <span className="text-sm font-normal text-gray-500">/ day</span>
            </p>
          </div>
          {(condition || isNew) && (
            <span className="flex items-center gap-1 text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
              {isNew && '✦ New'}
              {condition && !isNew && condition}
            </span>
          )}
        </div>

        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>{year}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Ruler className="w-4 h-4" />
            <span>{length} FT</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">{location}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Bed className="w-4 h-4" />
            <span>{cabins} cabins</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600 col-span-2">
            <Users className="w-4 h-4" />
            <span>{guests} guests</span>
          </div>
        </div>
      </div>
    </article>
  );

  if (id) {
    return <Link to={`/yacht/${id}`}>{cardContent}</Link>;
  }

  return cardContent;
};
