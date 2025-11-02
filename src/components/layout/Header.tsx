import { ShoppingCart, Heart, User } from 'lucide-react';
import { useState } from 'react';
import { Logo } from '../ui/Logo';
import { Navigation } from './Navigation';
import { CartDropdown } from '../ui/CartDropdown';
import { ProfileDropdown } from '../ui/ProfileDropdown';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';

/**
 * Header Component
 *
 * Sticky navigation header with logo, main navigation menu, and action buttons.
 * Includes shopping cart, favorites, and user profile dropdowns.
 * Features a glassmorphism effect with backdrop blur.
 *
 * @component
 * @example
 * ```tsx
 * <Header />
 * ```
 *
 * @returns {JSX.Element} The header component with navigation and actions
 */
export const Header = () => {
  const { totalItems } = useCart();
  const { totalFavorites } = useFavorites();

  /**
   * Controls the visibility of the shopping cart dropdown
   */
  const [isCartOpen, setIsCartOpen] = useState(false);

  /**
   * Controls the visibility of the profile dropdown
   */
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100/50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />

          <Navigation />

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="relative">
              <button
                className="p-2 hover:bg-blue-50 rounded-full transition-all duration-200 hover:scale-110 relative"
                aria-label="Shopping cart"
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <ShoppingCart className="w-5 h-5 text-gray-700 hover:text-blue-700 transition-colors" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-fade-in">
                    {totalItems}
                  </span>
                )}
              </button>
              <CartDropdown isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            </div>

            <button
              className="p-2 hover:bg-blue-50 rounded-full transition-all duration-200 hover:scale-110 relative"
              aria-label="Favorites"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <Heart className="w-5 h-5 text-gray-700 hover:text-red-500 transition-colors" />
              {totalFavorites > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-fade-in">
                  {totalFavorites}
                </span>
              )}
            </button>

            <div className="relative">
              <button
                className="p-2 hover:bg-blue-50 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="User account"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <User className="w-5 h-5 text-gray-700 hover:text-blue-700 transition-colors" />
              </button>
              <ProfileDropdown isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
