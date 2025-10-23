import { Anchor } from 'lucide-react';

/**
 * Loader Component
 *
 * Minimalistic animated loading indicator with yacht anchor logo.
 * Features smooth fade animations and subtle icon rotation.
 * Displayed during initial page load and route transitions.
 *
 * @component
 * @example
 * ```tsx
 * <Loader />
 * ```
 *
 * @returns {JSX.Element} The loader component
 */
export const Loader = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="relative inline-block">
          <Anchor className="w-8 h-8 text-gray-900 animate-spin-slow" />
        </div>
      </div>
    </div>
  );
};
