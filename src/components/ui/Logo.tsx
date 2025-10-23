import { Anchor } from 'lucide-react';

/**
 * Logo Component
 *
 * Renders the Yacht Booking brand logo with an anchor icon and text.
 * Features a smooth rotation animation on hover.
 *
 * @component
 * @example
 * ```tsx
 * <Logo />
 * ```
 *
 * @returns {JSX.Element} The logo component
 */
export const Logo = () => {
  return (
    <a href="/" className="flex items-center gap-2 group">
      <div className="relative">
        <Anchor className="w-8 h-8 text-gray-900 transform group-hover:rotate-12 transition-transform duration-300" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-lg font-bold text-gray-900 tracking-tight">YACHT</span>
        <span className="text-sm font-medium text-gray-600">BOOKING</span>
      </div>
    </a>
  );
};
