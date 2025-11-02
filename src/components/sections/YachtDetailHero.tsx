
interface YachtDetailHeroProps {
  id: string;
  name: string;
  videoUrl?: string | null;
}

export const YachtDetailHero = ({ id, name }: YachtDetailHeroProps) => {
  return (
    <section className="pt-24 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden group">
            <img src={`/yachts/1/boat_01_02.png`} alt={name} className="absolute inset-0 w-full h-full object-cover" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
              <img src={`/yachts/1/boat_01_03.png`} alt={name} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                +13
              </div>
            </div>

            <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
              <img src={`/yachts/1/boat_01_04.png`} alt={name} className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
