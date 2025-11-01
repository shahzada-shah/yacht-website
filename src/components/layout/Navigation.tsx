import { Link, useLocation } from 'react-router-dom';

/**
 * Navigation item interface
 * @interface NavigationItem
 * @property {string} label - The display text for the navigation link
 * @property {string} href - The route path or hash link
 */
interface NavigationItem {
  label: string;
  href: string;
}

/**
 * Navigation menu items configuration
 */
const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'FAQ', href: '/faq' },
];

/**
 * Navigation Component
 *
 * Renders the main navigation menu with active state highlighting.
 * Supports both React Router links and hash links.
 * Active navigation items are styled with bold font weight.
 *
 * @component
 * @example
 * ```tsx
 * <Navigation />
 * ```
 *
 * @returns {JSX.Element} The navigation menu component
 */
export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="hidden md:block" aria-label="Main navigation">
      <ul className="flex items-center gap-8">
        {navigationItems.map((item) => {
          const isActive = location.pathname === item.href;
          const isHashLink = item.href.startsWith('#');

          return (
            <li key={item.label}>
              {isHashLink ? (
                <a
                  href={item.href}
                  className={`text-sm transition-all duration-200 hover:text-blue-700 ${
                    isActive ? 'text-blue-700 font-bold' : 'text-gray-600 font-medium'
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.href}
                  className={`text-sm transition-all duration-200 hover:text-blue-700 ${
                    isActive ? 'text-blue-700 font-bold' : 'text-gray-600 font-medium'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
