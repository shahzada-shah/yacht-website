import { Calendar, Users, Plus } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';

/**
 * BookingSidebar component props
 * @interface BookingSidebarProps
 * @property {number} pricePerDay - Daily rental price for the yacht
 * @property {string} yachtName - Name of the yacht being booked
 */
interface BookingSidebarProps {
  pricePerDay: number;
  yachtName: string;
}

/**
 * BookingSidebar Component
 *
 * Sticky sidebar for yacht booking with date selection, guest count,
 * optional crew services, and dynamic price calculation.
 * Displays real-time pricing breakdown including discounts and taxes.
 *
 * @component
 * @example
 * ```tsx
 * <BookingSidebar pricePerDay={2500} yachtName="Ocean Breeze" />
 * ```
 *
 * @param {BookingSidebarProps} props - The booking sidebar properties
 * @returns {JSX.Element} The booking sidebar component
 */
export const BookingSidebar = ({ pricePerDay, yachtName }: BookingSidebarProps) => {
  const { addItem } = useCart();

  /**
   * Selected booking date
   */
  const [selectedDate, setSelectedDate] = useState('');

  /**
   * Number of guests for the booking
   */
  const [guests, setGuests] = useState('4');

  /**
   * Whether crew services are included in the booking
   */
  const [includeCrew, setIncludeCrew] = useState(false);

  /**
   * Number of days for the booking
   */
  const [days] = useState(4);

  const subtotal = pricePerDay * days;
  const crewCost = includeCrew ? 3300 : 0;
  const discount = 300;
  const total = subtotal + crewCost - discount;

  /**
   * Handles adding yacht booking to cart
   */
  const handleBookNow = () => {
    addItem({
      id: `yacht-${yachtName.toLowerCase().replace(/\s+/g, '-')}`,
      name: `${yachtName} - ${days} days`,
      type: 'yacht',
      price: total,
      metadata: {
        pricePerDay,
        days,
        guests,
        includeCrew,
        selectedDate,
      },
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
      <div className="space-y-4">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar className="w-4 h-4 inline mr-2" />
            Choose your date
          </label>
          <input
            type="text"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            placeholder="Select dates"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-gray-50 transition-all duration-200"
          />
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Users className="w-4 h-4 inline mr-2" />
            Guests
          </label>
          <input
            type="text"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-gray-50 transition-all duration-200"
          />
        </div>

        <div className="pt-4 border-t border-gray-100">
          <button className="w-full flex items-center justify-between text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            <span>Add other services</span>
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-between py-3">
          <span className="text-sm font-medium text-gray-700">Crew</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={includeCrew}
              onChange={(e) => setIncludeCrew(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-900"></div>
          </label>
        </div>

        <button
          onClick={handleBookNow}
          className="w-full bg-gray-900 text-white font-semibold py-4 rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02]"
        >
          Add to cart
        </button>

        <div className="space-y-2 pt-4 border-t border-gray-100">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">${pricePerDay.toLocaleString()} × {days} days</span>
            <span className="font-semibold text-gray-900">${subtotal.toLocaleString()}</span>
          </div>

          {includeCrew && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Cost of captain x {days} days</span>
              <span className="font-semibold text-gray-900">${crewCost.toLocaleString()}</span>
            </div>
          )}

          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Discount</span>
            <span className="font-semibold text-green-600">-${discount}</span>
          </div>

          <div className="flex justify-between text-base pt-2 border-t border-gray-100">
            <span className="font-bold text-gray-900">Total (including taxes)</span>
            <span className="font-bold text-gray-900">${total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
