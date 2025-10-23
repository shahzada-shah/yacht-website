import { YachtDetailHero } from '../components/sections/YachtDetailHero';
import { YachtSpecifications } from '../components/sections/YachtSpecifications';
import { BookingSidebar } from '../components/ui/BookingSidebar';
import { CrewSection } from '../components/sections/CrewSection';
import { ReviewsCarousel } from '../components/sections/ReviewsCarousel';
import { FAQSection } from '../components/sections/FAQSection';
import { RelatedYachtsCarousel } from '../components/sections/RelatedYachtsCarousel';

const hardcodedYacht = {
  id: '1',
  name: 'Luxury Yacht Golden Horizon 68',
  description:
    'is the embodiment of modern luxury and refined style. It is designed for peaceful sea voyages and unforgettable holidays with loved ones. The spacious deck and elegant interior give a feeling of freedom and harmony. This yacht is the perfect choice for those who appreciate comfort, privacy, and an atmosphere of true luxury.',
  price_per_day: 2400,
  year: 2021,
  length_ft: 68,
  draft_ft: 5.2,
  location: 'Los Angeles, USA',
  cabins: 4,
  berths: 8,
  guests: 8,
  video_url: null,
};

const hardcodedCrew = [
  { id: '1', name: 'John Miller', role: 'Captain', avatar_url: null },
  { id: '2', name: 'Anna Lopez', role: 'First Mate', avatar_url: null },
  { id: '3', name: 'Emily Carter', role: 'Stewardess', avatar_url: null },
  { id: '4', name: 'Marco Rossi', role: 'Chef', avatar_url: null },
];

const hardcodedReviews = [
  {
    id: '1',
    reviewer_name: 'Michael R.',
    rating: 4.8,
    comment:
      "Our trip on Golden Horizon 68 was simply unforgettable. The crew was attentive and professional, and every detail was taken care of. We can't wait to come back!",
    review_date: '2025-09-13',
  },
  {
    id: '2',
    reviewer_name: 'Sophie L.',
    rating: 4.8,
    comment:
      'The yacht is stunning, with elegant interiors and a spacious deck perfect for relaxing. It felt like a floating five-star hotel. Highly recommended for anyone who loves luxury.',
    review_date: '2025-09-13',
  },
  {
    id: '3',
    reviewer_name: 'Daniel K.',
    rating: 4.8,
    comment:
      'We had the most amazing family vacation aboard this yacht. The food, the service, and the atmosphere exceeded all our expectations. Truly a dream experience.',
    review_date: '2025-09-13',
  },
];

const hardcodedFaqs = [
  {
    id: '1',
    question: 'How many guests can the yacht accommodate?',
    answer: 'Golden Horizon 68 can comfortably host up to 8 guests in 4 luxurious cabins.',
  },
  {
    id: '2',
    question: 'Is the crew included in the charter price?',
    answer:
      'Yes, our professional crew is included in the base charter rate. They are dedicated to ensuring you have an exceptional experience.',
  },
  {
    id: '3',
    question: 'What is included in the daily charter rate?',
    answer:
      'The daily rate includes the yacht, crew, fuel for standard cruising, water toys, and basic amenities. Premium services and provisions can be arranged.',
  },
  {
    id: '4',
    question: 'Are water toys or activities available on board?',
    answer:
      'Yes, we offer a selection of water toys including jet skis, paddleboards, snorkeling equipment, and fishing gear.',
  },
  {
    id: '5',
    question: 'How do we book the yacht?',
    answer:
      'Booking is simple - select your dates, specify guest count, and complete the reservation. Our team will contact you within 24 hours to finalize details.',
  },
];

const hardcodedRelatedYachts = [
  {
    id: '5',
    name: 'Luxury Yacht Diamond Breeze 60',
    price_per_day: 1800,
    year: 2020,
    length_ft: 60,
    location: 'Los Angeles, USA',
    cabins: 4,
    guests: 8,
    is_new: true,
  },
  {
    id: '6',
    name: 'Luxury Yacht Imperial Star 95',
    price_per_day: 6200,
    year: 2021,
    length_ft: 95,
    location: 'Los Angeles, USA',
    cabins: 7,
    guests: 14,
    condition: 'Pre-owned' as const,
    is_new: false,
  },
];

export const YachtDetailPage = () => {
  const yacht = hardcodedYacht;
  const crew = hardcodedCrew;
  const reviews = hardcodedReviews;
  const faqs = hardcodedFaqs;
  const relatedYachts = hardcodedRelatedYachts;

  const specifications = [
    { label: 'Year', value: yacht.year },
    { label: 'People', value: yacht.guests },
    { label: 'Cabins', value: yacht.cabins },
    { label: 'Draft', value: `${yacht.draft_ft} ft` },
    { label: 'Length', value: `${yacht.length_ft} ft` },
    { label: 'Berths', value: yacht.berths },
  ];

  return (
    <div className="min-h-screen">
      <YachtDetailHero name={yacht.name} videoUrl={yacht.video_url} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          <div className="lg:col-span-2">
            <YachtSpecifications
              name={yacht.name}
              description={
                yacht.description ||
                'This yacht is the embodiment of modern luxury and refined style. It is designed for peaceful sea voyages and unforgettable holidays with loved ones. The spacious deck and elegant interior give a feeling of freedom and harmony. This yacht is the perfect choice for those who appreciate comfort, privacy, and an atmosphere of true luxury.'
              }
              specifications={specifications}
            />
          </div>

          <div className="lg:col-span-1">
            <BookingSidebar pricePerDay={yacht.price_per_day} yachtName={yacht.name} />
          </div>
        </div>
      </div>

      <CrewSection crewMembers={crew} />
      <ReviewsCarousel reviews={reviews} />
      <FAQSection faqs={faqs} />
      <RelatedYachtsCarousel yachts={relatedYachts} currentYachtId={yacht.id} />
    </div>
  );
};
