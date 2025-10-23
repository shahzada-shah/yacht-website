import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

/**
 * Cart item interface
 * @interface CartItem
 * @property {string} id - Unique identifier for the cart item
 * @property {string} name - Item name
 * @property {'yacht' | 'service'} type - Type of item (yacht or service)
 * @property {number} price - Item price
 * @property {number} quantity - Quantity of items
 * @property {string} [image] - Optional image URL
 * @property {Record<string, any>} [metadata] - Additional item metadata
 */
export interface CartItem {
  id: string;
  name: string;
  type: 'yacht' | 'service';
  price: number;
  quantity: number;
  image?: string;
  metadata?: Record<string, any>;
}

/**
 * Cart context value interface
 * @interface CartContextValue
 * @property {CartItem[]} items - Array of cart items
 * @property {(item: Omit<CartItem, 'quantity'>) => void} addItem - Adds item to cart or increments quantity
 * @property {(itemId: string) => void} removeItem - Removes one quantity of item or removes entirely if quantity is 1
 * @property {(itemId: string) => void} deleteItem - Completely removes item from cart
 * @property {() => void} clearCart - Removes all items from cart
 * @property {number} totalItems - Total number of items in cart
 * @property {number} totalPrice - Total price of all items in cart
 */
interface CartContextValue {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (itemId: string) => void;
  deleteItem: (itemId: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

/**
 * Cart context
 */
const CartContext = createContext<CartContextValue | undefined>(undefined);

const CART_STORAGE_KEY = 'yacht-booking-cart';

/**
 * CartProvider Component
 *
 * Provides cart state and management functions to the application.
 * Manages adding, removing, and clearing items from the shopping cart.
 * Persists cart data to localStorage for data persistence across sessions.
 *
 * @component
 * @example
 * ```tsx
 * <CartProvider>
 *   <App />
 * </CartProvider>
 * ```
 *
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Child components
 * @returns {JSX.Element} The cart provider component
 */
export const CartProvider = ({ children }: { children: ReactNode }) => {
  /**
   * Cart items state with localStorage initialization
   */
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return [];
    }
  });

  /**
   * Persist cart to localStorage whenever it changes
   */
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [items]);

  /**
   * Adds an item to the cart or increments quantity if it already exists
   * @param {Omit<CartItem, 'quantity'>} item - Item to add (without quantity)
   */
  const addItem = (item: Omit<CartItem, 'quantity'>) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);

      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }

      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  /**
   * Removes one quantity of an item or removes it entirely if quantity is 1
   * @param {string} itemId - ID of the item to remove
   */
  const removeItem = (itemId: string) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === itemId);

      if (!existingItem) return prevItems;

      if (existingItem.quantity === 1) {
        return prevItems.filter((i) => i.id !== itemId);
      }

      return prevItems.map((i) =>
        i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
      );
    });
  };

  /**
   * Completely removes an item from the cart regardless of quantity
   * @param {string} itemId - ID of the item to delete
   */
  const deleteItem = (itemId: string) => {
    setItems((prevItems) => prevItems.filter((i) => i.id !== itemId));
  };

  /**
   * Clears all items from the cart
   */
  const clearCart = () => {
    setItems([]);
  };

  /**
   * Total number of items in the cart
   */
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  /**
   * Total price of all items in the cart
   */
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        deleteItem,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

/**
 * useCart Hook
 *
 * Custom hook to access cart context.
 * Must be used within a CartProvider.
 *
 * @example
 * ```tsx
 * const { items, addItem, removeItem } = useCart();
 * ```
 *
 * @returns {CartContextValue} Cart context value
 * @throws {Error} If used outside of CartProvider
 */
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};
