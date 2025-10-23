import { User, Settings, Heart, Calendar, LogOut, X, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext';

/**
 * ProfileDropdown component props
 * @interface ProfileDropdownProps
 * @property {boolean} isOpen - Whether the dropdown is open
 * @property {() => void} onClose - Function to close the dropdown
 */
interface ProfileDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * ProfileDropdown Component
 *
 * Displays user profile menu with favorites list.
 * Shows favorited yachts with the ability to view details or remove from favorites.
 *
 * @component
 * @example
 * ```tsx
 * <ProfileDropdown isOpen={true} onClose={() => setIsOpen(false)} />
 * ```
 *
 * @param {ProfileDropdownProps} props - The profile dropdown properties
 * @returns {JSX.Element | null} The profile dropdown component or null if closed
 */
export const ProfileDropdown = ({ isOpen, onClose }: ProfileDropdownProps) => {
  const { favorites, toggleFavorite, totalFavorites } = useFavorites();

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div className="fixed sm:absolute right-0 sm:right-0 top-0 sm:top-full sm:mt-2 w-full sm:w-96 h-full sm:h-auto bg-white sm:rounded-2xl shadow-2xl z-50 overflow-hidden max-h-full sm:max-h-[600px] flex flex-col">
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">John Doe</h4>
                <p className="text-xs text-gray-600">john.doe@email.com</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-110"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button className="flex items-center justify-center gap-2 px-3 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200">
              <Calendar className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-900">Bookings</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-3 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200">
              <Settings className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-900">Settings</span>
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-gray-900">
                Favorites ({totalFavorites})
              </h3>
              {totalFavorites > 0 && (
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              )}
            </div>

            {favorites.length === 0 ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-3">
                  <Heart className="w-6 h-6 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600 mb-1">No favorites yet</p>
                <p className="text-xs text-gray-500">
                  Heart yachts to save them here
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {favorites.map((yacht) => (
                  <div
                    key={yacht.id}
                    className="border border-gray-200 rounded-lg p-3 hover:border-gray-300 transition-all duration-200"
                  >
                    <div className="flex gap-3">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex-shrink-0">
                        <svg
                          className="w-full h-full"
                          viewBox="0 0 64 64"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <line
                            x1="0"
                            y1="0"
                            x2="64"
                            y2="64"
                            stroke="rgba(0,0,0,0.1)"
                            strokeWidth="1"
                          />
                          <line
                            x1="64"
                            y1="0"
                            x2="0"
                            y2="64"
                            stroke="rgba(0,0,0,0.1)"
                            strokeWidth="1"
                          />
                        </svg>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="font-semibold text-gray-900 text-sm line-clamp-1">
                            {yacht.name}
                          </h4>
                          <button
                            onClick={() => toggleFavorite(yacht)}
                            className="p-1 hover:bg-red-50 rounded transition-all duration-200 hover:scale-110 flex-shrink-0"
                            aria-label="Remove from favorites"
                          >
                            <Trash2 className="w-3 h-3 text-red-500" />
                          </button>
                        </div>

                        <p className="text-xs text-gray-600 mb-2">
                          {yacht.length} FT • {yacht.cabins} cabins • {yacht.guests} guests
                        </p>

                        <div className="flex items-center justify-between">
                          <p className="text-sm font-bold text-gray-900">
                            ${yacht.price.toLocaleString()}/day
                          </p>
                          <Link
                            to={`/yacht/${yacht.id}`}
                            onClick={onClose}
                            className="text-xs font-semibold text-gray-900 hover:text-gray-700 transition-colors"
                          >
                            View →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-gray-100 p-4">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 hover:bg-red-50 rounded-lg transition-all duration-200">
            <LogOut className="w-4 h-4 text-red-600" />
            <span className="text-sm font-medium text-red-600">Log Out</span>
          </button>
        </div>
      </div>
    </>
  );
};
