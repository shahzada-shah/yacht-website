import { useState } from 'react';
import { Hero } from '../components/sections/Hero';
import { SearchSection, SearchFilters } from '../components/sections/SearchSection';
import { YachtListings } from '../components/sections/YachtListings';

/**
 * HomePage Component
 *
 * Main landing page that composes the hero section, search filters,
 * and yacht listings. Manages search state and passes filters to listings.
 *
 * @component
 * @example
 * ```tsx
 * <HomePage />
 * ```
 *
 * @returns {JSX.Element} The home page component
 */
export const HomePage = () => {
  /**
   * Active search filters state
   */
  const [searchFilters, setSearchFilters] = useState<SearchFilters | null>(null);

  /**
   * Handle search filter updates
   * @param {SearchFilters} filters - New filter values from search
   */
  const handleSearch = (filters: SearchFilters) => {
    setSearchFilters(filters);

    const listingsSection = document.getElementById('yacht-listings');
    if (listingsSection) {
      listingsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Hero />
      <SearchSection onSearch={handleSearch} />
      <YachtListings filters={searchFilters} />
    </>
  );
};
