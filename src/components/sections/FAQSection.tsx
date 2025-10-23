import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

export const FAQSection = ({ faqs }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (faqs.length === 0) return null;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Essential Information for Your Journey
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.id}
                  className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-gray-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 text-gray-900" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-900" />
                      )}
                    </div>
                  </button>

                  {openIndex === index && (
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
            <svg
              className="w-full h-full"
              viewBox="0 0 800 600"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="0" y1="0" x2="800" y2="600" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
              <line x1="800" y1="0" x2="0" y2="600" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
