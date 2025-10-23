import { User } from 'lucide-react';

interface CrewMember {
  id: string;
  name: string;
  role: string;
  avatar_url: string | null;
}

interface CrewSectionProps {
  crewMembers: CrewMember[];
}

export const CrewSection = ({ crewMembers }: CrewSectionProps) => {
  if (crewMembers.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Professional Crew</h2>
            <p className="text-gray-700 leading-relaxed">
              Our experienced crew is dedicated to providing you with the highest level of
              service, ensuring both safety and comfort throughout your journey. With
              professionalism and attention to detail, they create a truly relaxing and
              unforgettable yachting experience.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {crewMembers.map((member) => (
                <div key={member.id} className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center flex-shrink-0">
                    {member.avatar_url ? (
                      <img
                        src={member.avatar_url}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <User className="w-8 h-8 text-gray-500" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
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
