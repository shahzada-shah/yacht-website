import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

/**
 * Footer Component
 *
 * Site footer with contact form, navigation links, company information,
 * social media links, and developer credits.
 * Features interactive Kazi Digital Studio credits with fade-in/out animation.
 *
 * @component
 * @example
 * ```tsx
 * <Footer />
 * ```
 *
 * @returns {JSX.Element} The footer component
 */
export const Footer = () => {
  /**
   * State to control visibility of developer credits
   */
  const [showCredits, setShowCredits] = useState(false);

  /**
   * Handle click on Kazi Digital Studio to show credits with fade animation
   */
  const handleCreditsClick = () => {
    setShowCredits(true);

    setTimeout(() => {
      setShowCredits(false);
    }, 4000);
  };

  return (
    <footer className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Have you any questions?</h2>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-6 py-4 bg-gray-200 rounded-2xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200"
              />

              <textarea
                placeholder="Message"
                rows={5}
                className="w-full px-6 py-4 bg-gray-200 rounded-2xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none transition-all duration-200"
              />

              <button
                type="submit"
                className="w-full py-4 bg-white border border-gray-300 rounded-2xl text-gray-900 font-semibold hover:bg-gray-50 transition-all duration-200 hover:scale-[1.02]"
              >
                Send
              </button>

              <p className="text-xs text-gray-600">
                By submitting an application, you agree to our{' '}
                <a href="#" className="underline hover:text-gray-900">
                  privacy policy
                </a>
                .
              </p>
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:pt-16">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">COMPANY</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1"
                  >
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1"
                  >
                    CAREERS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1"
                  >
                    PRESS & MEDIA
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1"
                  >
                    SUSTAINABILITY
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">EXPERIENCES</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1"
                  >
                    YACHT CHARTER
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1"
                  >
                    TRAINING PROGRAMS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1"
                  >
                    DIVING & WATER SPORTS
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1"
                  >
                    PRIVATE EVENTS
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">SUPPORT</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/faq"
                    className="text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1"
                  >
                    TERMS & CONDITIONS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1"
                  >
                    PRIVACY POLICY
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-gray-900 transition-all duration-200 inline-block hover:translate-x-1"
                  >
                    SAFETY STANDARDS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-gray-300">
          <div className="space-y-1">
            <p className="text-gray-700">742 Ocean Breeze Drive, Miami, USA</p>
            <p className="text-gray-700">+1 (305) 555-2489</p>
            <p className="text-gray-700">concierge@yachtbooking.com</p>
          </div>

          <div className="flex flex-col md:items-end gap-3">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-gray-900">Follow us:</span>
              <a
                href="#"
                className="p-2 hover:bg-gray-200 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-700" />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-gray-200 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-700" />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-gray-200 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-gray-700" />
              </a>
            </div>
            <p className="text-sm text-gray-600">© 2025 Yacht Booking</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-300 text-center">
          <p className="text-sm text-gray-600 mb-2">
            DEVELOPED BY{' '}
            <button
              onClick={handleCreditsClick}
              className="font-bold text-gray-900 hover:text-gray-700 transition-colors duration-200 underline underline-offset-2"
            >
              KAZI DIGITAL STUDIO
            </button>
          </p>

          {showCredits && (
            <p className="text-xs text-gray-600 animate-fade-in-out">
              Shahzada Shah - Lead Senior Developer | Jimmy Carrera - Lead Designer
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};
