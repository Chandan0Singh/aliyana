export default function GenderSelector({ onSelect }) {
  return (
    <div className="text-center mt-10 px-4">
      <h2 className="text-3xl font-heading text-[#1E1B4B] mb-6">
        Select Gender
      </h2>
      <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
        {/* Male */}
        <button
          onClick={() => onSelect("male")}
          className="group transition transform hover:scale-105 focus:outline-none"
        >
          <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-4 border-[#C084FC] shadow-md group-hover:shadow-xl transition-shadow">
            <img
              src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg"
              alt="Boy"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-3 text-[#1E1B4B] font-medium text-base sm:text-lg">
            Boy
          </p>
        </button>

        {/* Female */}
        <button
          onClick={() => onSelect("female")}
          className="group transition transform hover:scale-105 focus:outline-none"
        >
          <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-4 border-[#C084FC] shadow-md group-hover:shadow-xl transition-shadow">
            <img
              src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?semt=ais_hybrid&w=740"
              alt="Girl"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-3 text-[#1E1B4B] font-medium text-base sm:text-lg">
            Girl
          </p>
        </button>
      </div>
    </div>
  );
}
