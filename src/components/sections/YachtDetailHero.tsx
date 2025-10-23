import { Play } from 'lucide-react';

interface YachtDetailHeroProps {
  name: string;
  videoUrl?: string | null;
}

export const YachtDetailHero = ({ name, videoUrl }: YachtDetailHeroProps) => {
  return (
    <section className="pt-24 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-full h-full"
                viewBox="0 0 800 450"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="0" y1="0" x2="800" y2="450" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                <line x1="800" y1="0" x2="0" y2="450" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
              </svg>
            </div>

            {videoUrl && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 hover:scale-110 group-hover:shadow-xl">
                  <Play className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" />
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
              <svg
                className="w-full h-full"
                viewBox="0 0 400 400"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="0" y1="0" x2="400" y2="400" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                <line x1="400" y1="0" x2="0" y2="400" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
              </svg>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                +13
              </div>
            </div>

            <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
              <svg
                className="w-full h-full"
                viewBox="0 0 400 400"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="0" y1="0" x2="400" y2="400" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                <line x1="400" y1="0" x2="0" y2="400" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
