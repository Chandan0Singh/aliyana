import bagsData from "../../data/bags";
import { isNewArrival } from "../../utils/isNewArrival";

const NewArrivalPage = () => {
  const newArrivals = bagsData.filter(
    (bag) => bag.arrivalDate && isNewArrival(bag.arrivalDate)
  );

  return (
    <div className="flex ">
      <div className="w-[11rem]"></div>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">🆕 New Arrivals</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-[65vh] overflow-auto pr-[2rem] custom-scrollbar w-full">
          {newArrivals.map((bag) => (
            <div key={bag.id} className="bg-white rounded shadow p-4">
              <img
                src={bag.image}
                alt={bag.name}
                className="h-60 object-cover w-full rounded mb-4"
              />
              <h2 className="text-lg font-semibold">{bag.name}</h2>
              <p className="text-gray-600">₹{bag.price}</p>
              {bag.sale && (
                <span className="text-green-600 text-sm">{bag.sale} off</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivalPage;
