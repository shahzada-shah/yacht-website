interface Specification {
  label: string;
  value: string | number;
}

interface YachtSpecificationsProps {
  name: string;
  description: string;
  specifications: Specification[];
}

export const YachtSpecifications = ({
  name,
  description,
  specifications,
}: YachtSpecificationsProps) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">{name}</h1>

          <p className="text-gray-700 leading-relaxed mb-12">{description}</p>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Specification</h2>

            <div className="space-y-0 border-t border-gray-200">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 py-5 border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-gray-600 font-medium">{spec.label}:</span>
                  <span className="text-gray-900 font-semibold text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
