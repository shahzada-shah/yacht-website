import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

/**
 * CartDropdown component props
 * @interface CartDropdownProps
 * @property {boolean} isOpen - Whether the dropdown is open
 * @property {() => void} onClose - Function to close the dropdown
 */
interface CartDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * CartDropdown Component
 *
 * Displays shopping cart items in a dropdown with add/remove functionality.
 * Shows item details, quantity controls, and checkout summary.
 *
 * @component
 * @example
 * ```tsx
 * <CartDropdown isOpen={true} onClose={() => setIsOpen(false)} />
 * ```
 *
 * @param {CartDropdownProps} props - The cart dropdown properties
 * @returns {JSX.Element | null} The cart dropdown component or null if closed
 */
export const CartDropdown = ({ isOpen, onClose }: CartDropdownProps) => {
  const { items, addItem, removeItem, deleteItem, totalPrice } = useCart();

  if (!isOpen) return null;

  const serviceFee = totalPrice > 0 ? totalPrice * 0.05 : 0;
  const total = totalPrice + serviceFee;

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div className="fixed sm:absolute right-0 sm:right-0 top-0 sm:top-full sm:mt-2 w-full sm:w-96 h-full sm:h-auto bg-white sm:rounded-2xl shadow-2xl z-50 overflow-hidden max-h-full sm:max-h-[600px] flex flex-col">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900">Shopping Cart</h3>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-110"
              aria-label="Close cart"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <p className="text-gray-600 mb-2">Your cart is empty</p>
              <p className="text-sm text-gray-500">Add some yachts or services to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-xl p-4">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <svg
                          className="w-full h-full"
                          viewBox="0 0 80 80"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <line x1="0" y1="0" x2="80" y2="80" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                          <line x1="80" y1="0" x2="0" y2="80" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                        </svg>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="font-semibold text-gray-900 text-sm line-clamp-2">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => deleteItem(item.id)}
                          className="p-1 hover:bg-red-50 rounded transition-all duration-200 hover:scale-110 flex-shrink-0"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </button>
                      </div>

                      <p className="text-xs text-gray-600 mb-2 capitalize">{item.type}</p>

                      <div className="flex items-center justify-between">
                        <p className="text-sm font-bold text-gray-900">
                          ${(item.price * item.quantity).toLocaleString()}
                        </p>

                        <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-1 hover:bg-white rounded transition-all duration-200 hover:scale-110"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3 text-gray-700" />
                          </button>
                          <span className="text-sm font-semibold text-gray-900 min-w-[20px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              addItem({
                                id: item.id,
                                name: item.name,
                                type: item.type,
                                price: item.price,
                                image: item.image,
                                metadata: item.metadata,
                              })
                            }
                            className="p-1 hover:bg-white rounded transition-all duration-200 hover:scale-110"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3 text-gray-700" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold text-gray-900">
                  ${totalPrice.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Service fee (5%)</span>
                <span className="font-semibold text-gray-900">
                  ${serviceFee.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-base pt-2 border-t border-gray-200">
                <span className="font-bold text-gray-900">Total</span>
                <span className="font-bold text-gray-900">${total.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-[1.02]">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};
