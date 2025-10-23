import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

/**
 * Favorite yacht interface
 * @interface FavoriteYacht
 * @property {string} id - Unique yacht identifier
 * @property {string} name - Yacht name
 * @property {number} price - Daily rental price
 * @property {number} year - Year built
 * @property {number} length - Yacht length in feet
 * @property {string} location - Current location
 * @property {number} cabins - Number of cabins
 * @property {number} guests - Guest capacity
 */
export interface FavoriteYacht {
  id: string;
  name: string;
  price: number;
  year: number;
  length: number;
  location: string;
  cabins: number;
  guests: number;
}

/**
 * Favorites context value interface
 * @interface FavoritesContextValue
 * @property {FavoriteYacht[]} favorites - Array of favorite yachts
 * @property {(yacht: FavoriteYacht) => void} toggleFavorite - Adds or removes yacht from favorites
 * @property {(yachtId: string) => boolean} isFavorite - Checks if yacht is in favorites
 * @property {() => void} clearFavorites - Removes all favorites
 * @property {number} totalFavorites - Total number of favorited yachts
 */
interface FavoritesContextValue {
  favorites: FavoriteYacht[];
  toggleFavorite: (yacht: FavoriteYacht) => void;
  isFavorite: (yachtId: string) => boolean;
  clearFavorites: () => void;
  totalFavorites: number;
}

/**
 * Favorites context
 */
const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined);

const FAVORITES_STORAGE_KEY = 'yacht-booking-favorites';

/**
 * FavoritesProvider Component
 *
 * Provides favorites state and management functions to the application.
 * Persists favorites to localStorage for data persistence across sessions.
 *
 * @component
 * @example
 * ```tsx
 * <FavoritesProvider>
 *   <App />
 * </FavoritesProvider>
 * ```
 *
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Child components
 * @returns {JSX.Element} The favorites provider component
 */
export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  /**
   * Favorites state with localStorage initialization
   */
  const [favorites, setFavorites] = useState<FavoriteYacht[]>(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading favorites from localStorage:', error);
      return [];
    }
  });

  /**
   * Persist favorites to localStorage whenever they change
   */
  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error('Error saving favorites to localStorage:', error);
    }
  }, [favorites]);

  /**
   * Toggles a yacht in the favorites list (add if not present, remove if present)
   * @param {FavoriteYacht} yacht - The yacht to toggle
   */
  const toggleFavorite = (yacht: FavoriteYacht) => {
    setFavorites((prevFavorites) => {
      const exists = prevFavorites.some((fav) => fav.id === yacht.id);

      if (exists) {
        return prevFavorites.filter((fav) => fav.id !== yacht.id);
      }

      return [...prevFavorites, yacht];
    });
  };

  /**
   * Checks if a yacht is in the favorites list
   * @param {string} yachtId - ID of the yacht to check
   * @returns {boolean} True if yacht is favorited
   */
  const isFavorite = (yachtId: string): boolean => {
    return favorites.some((fav) => fav.id === yachtId);
  };

  /**
   * Clears all favorites
   */
  const clearFavorites = () => {
    setFavorites([]);
  };

  /**
   * Total number of favorited yachts
   */
  const totalFavorites = favorites.length;

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        clearFavorites,
        totalFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

/**
 * useFavorites Hook
 *
 * Custom hook to access favorites context.
 * Must be used within a FavoritesProvider.
 *
 * @example
 * ```tsx
 * const { favorites, toggleFavorite, isFavorite } = useFavorites();
 * ```
 *
 * @returns {FavoritesContextValue} Favorites context value
 * @throws {Error} If used outside of FavoritesProvider
 */
export const useFavorites = () => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }

  return context;
};
