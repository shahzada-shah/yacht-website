import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

/**
 * FAQ item interface
 * @interface FAQItem
 * @property {string} question - The FAQ question text
 * @property {string} answer - The FAQ answer text
 * @property {string} category - The category this FAQ belongs to
 */
interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

/**
 * FAQ data organized by category
 */
const faqData: FAQItem[] = [
  {
    category: 'Booking & Reservations',
    question: 'How do I book a yacht?',
    answer:
      'Booking a yacht is simple! Browse our available yachts, select your preferred dates, and complete the booking form. You can add extra services like a skipper or crew during checkout. Once confirmed, you\'ll receive a booking confirmation via email.',
  },
  {
    category: 'Booking & Reservations',
    question: 'What is your cancellation policy?',
    answer:
      'Cancellations made 30+ days before departure receive a full refund minus a 10% processing fee. Cancellations 15-29 days before receive 50% refund. Cancellations within 14 days are non-refundable, but you can reschedule based on availability.',
  },
  {
    category: 'Booking & Reservations',
    question: 'Can I modify my booking after confirmation?',
    answer:
      'Yes, you can modify your booking up to 14 days before departure, subject to availability. Changes may incur additional fees depending on the modifications requested. Contact our support team to discuss your changes.',
  },
  {
    category: 'Payments & Pricing',
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, Mastercard, American Express), debit cards, and bank transfers. A 30% deposit is required at booking, with the remaining balance due 30 days before departure.',
  },
  {
    category: 'Payments & Pricing',
    question: 'Are there any hidden fees?',
    answer:
      'No hidden fees! All pricing is transparent. The displayed yacht price includes the vessel rental. Additional costs like fuel, marina fees, skipper, provisions, and optional services are clearly itemized during checkout.',
  },
  {
    category: 'Payments & Pricing',
    question: 'Do you offer discounts for longer trips?',
    answer:
      'Yes! We offer discounts for bookings of 7+ days. Weekly charters receive 10% off, and monthly charters receive 20% off. Contact us for custom long-term charter rates and seasonal promotions.',
  },
  {
    category: 'Yacht & Safety',
    question: 'Do I need a sailing license?',
    answer:
      'It depends on your destination and whether you hire a skipper. For bareboat charters, you\'ll need a valid sailing license (ICC, RYA, ASA, or equivalent) and proof of sailing experience. If you hire a skipper, no license is required.',
  },
  {
    category: 'Yacht & Safety',
    question: 'What safety equipment is included?',
    answer:
      'All yachts include mandatory safety equipment: life jackets for all passengers, fire extinguishers, flares, first aid kit, VHF radio, navigation equipment, and life raft. Additional equipment varies by yacht and is listed in the specifications.',
  },
  {
    category: 'Yacht & Safety',
    question: 'What happens in case of bad weather?',
    answer:
      'Safety is our priority. Skippers can adjust routes based on weather conditions. In extreme cases where departure is unsafe, we\'ll reschedule your trip or provide a full refund. We monitor weather forecasts closely and communicate proactively.',
  },
  {
    category: 'Services & Extras',
    question: 'Can I hire a skipper or crew?',
    answer:
      'Absolutely! We offer professional skippers and crew members for hire. Skippers cost $150-250/day depending on experience and location. Additional crew members are available for larger yachts. Book these services during checkout.',
  },
  {
    category: 'Services & Extras',
    question: 'Do you provide provisioning services?',
    answer:
      'Yes! We offer provisioning packages where we stock your yacht with food, beverages, and essentials before arrival. Choose from standard, premium, or custom packages. You can also arrange your own provisioning at local marinas.',
  },
  {
    category: 'Services & Extras',
    question: 'Are diving and water sports equipment included?',
    answer:
      'Basic snorkeling equipment is typically included. Additional water sports equipment (diving gear, paddleboards, jet skis) can be rented separately. Check individual yacht listings for included equipment and rental options.',
  },
];

/**
 * FAQPage Component
 *
 * Displays frequently asked questions in an accordion format organized by categories.
 * Features smooth animations, active state management, and responsive design.
 *
 * @component
 * @example
 * ```tsx
 * <FAQPage />
 * ```
 *
 * @returns {JSX.Element} The FAQ page component with accordion functionality
 */
export const FAQPage = () => {
  /**
   * Tracks which FAQ item is currently expanded
   * @type {[number | null, Function]} - Index of expanded item or null if none expanded
   */
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  /**
   * Toggles the expansion state of an FAQ item
   * @param {number} index - The index of the FAQ item to toggle
   */
  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  /**
   * Groups FAQ items by category
   * @returns {Record<string, FAQItem[]>} FAQ items grouped by category key
   */
  const groupedFAQs = faqData.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {} as Record<string, FAQItem[]>);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about yacht booking, payments, safety, and our
            services. Can't find what you're looking for? Contact our support team.
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {Object.entries(groupedFAQs).map(([category, items]) => (
            <div key={category}>
              {/* Category Header */}
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
                {category}
              </h2>

              {/* FAQ Items */}
              <div className="space-y-4">
                {items.map((faq, index) => {
                  const globalIndex = faqData.findIndex((f) => f === faq);
                  const isExpanded = expandedIndex === globalIndex;

                  return (
                    <div
                      key={globalIndex}
                      className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
                    >
                      {/* Question Button */}
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-200 hover:bg-gray-50"
                        aria-expanded={isExpanded}
                        aria-controls={`faq-answer-${globalIndex}`}
                      >
                        <span className="text-lg font-semibold text-gray-900 pr-8">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-6 h-6 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* Answer Content */}
                      <div
                        id={`faq-answer-${globalIndex}`}
                        className={`transition-all duration-300 ease-in-out ${
                          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        } overflow-hidden`}
                      >
                        <div className="px-6 pb-5">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support Section */}
        <div className="max-w-4xl mx-auto mt-16 bg-gray-900 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Our support team is here to help you with any questions or concerns.
          </p>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};
