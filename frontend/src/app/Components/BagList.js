import bagsData from "@/data/bags";

export default function BagList({ gender, age }) {
  const filtered = bagsData.filter(
    (bag) => bag.gender === gender && bag.age === age
  );

  if (filtered.length === 0)
    return (
      <p className="mt-6 text-center text-[#4B5563] font-body px-4">
        No bags available for this selection.
      </p>
    );

  return (
    <div className="mt-10 px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-heading text-[#1E1B4B] mb-8 text-center">
        Recommended Bags
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filtered.map((bag) => (
          <div
            key={bag.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={bag.image}
              alt={bag.name}
              className="w-full h-48 sm:h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-semibold text-[#1E1B4B] mb-2">
                {bag.name}
              </h3>
              <p className="text-base sm:text-lg font-medium text-[#C084FC] mb-4">
                ₹{bag.price}
              </p>
              <button
                className="w-full bg-[#C084FC] hover:bg-[#4C1D95] text-white font-medium py-2 rounded-full transition"
                onClick={() => {
                  // add to cart or view detail
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
