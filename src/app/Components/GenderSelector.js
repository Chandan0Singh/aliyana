export default function GenderSelector({ onSelect }) {
  return (
    <div className="text-center mt-10">
      <h2 className="text-3xl font-heading text-[#1E1B4B] mb-6">Select Gender</h2>
      <div className="flex justify-center gap-12 flex-wrap">
        {/* Male */}
        <div
          onClick={() => onSelect('male')}
          className="cursor-pointer group transition transform hover:scale-105"
        >
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-[#C084FC] shadow-md group-hover:shadow-xl">
            <img
              src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg"
              alt="Boy"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-3 text-[#1E1B4B] font-medium text-lg">Boy</p>
        </div>

        {/* Female */}
        <div
          onClick={() => onSelect('female')}
          className="cursor-pointer group transition transform hover:scale-105"
        >
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-[#C084FC] shadow-md group-hover:shadow-xl">
            <img
              src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?semt=ais_hybrid&w=740"
              alt="Girl"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-3 text-[#1E1B4B] font-medium text-lg">Girl</p>
        </div>
      </div>
    </div>
  );
}
