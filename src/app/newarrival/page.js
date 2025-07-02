import bagsData from "../../data/bags";
import { isNewArrival } from "../../utils/isNewArrival";
import SearchBar from "../Components/Searchbar";

const NewArrivalPage = () => {
  const newArrivals = bagsData.filter(
    (bag) => bag.arrivalDate && isNewArrival(bag.arrivalDate)
  );

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-3xl font-serif font-bold text-[#1E1B4B] mb-8 text-center">
        🆕 New Arrivals
      </h1>

      <SearchBar />

      {newArrivals.length === 0 ? (
        <p className="text-center text-gray-500">
          No new arrivals at the moment.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newArrivals.map((bag) => (
            <div
              key={bag.id}
              className="bg-[#FDF4FF] rounded-xl shadow p-4 hover:shadow-lg transition-all duration-300"
            >
              <img
                src={bag.image}
                alt={bag.name}
                className="h-60 object-cover w-full rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-[#1E1B4B]">
                {bag.name}
              </h2>
              <p className="text-gray-700 mt-1">₹{bag.price}</p>
              {bag.sale && (
                <span className="text-green-600 text-sm font-medium mt-1 block">
                  {bag.sale} off
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewArrivalPage;
