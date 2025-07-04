export default function AgeSelector({ gender, onSelect }) {
  const ageGroups = [
    {
      label: "Child",
      value: "child",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJw89gObP0j0lvkln8lblsjprjSiPuUt79Vg&s",
    },
    {
      label: "Teen",
      value: "teen",
      img: "https://thumbs.dreamstime.com/b/beautiful-teen-girl-home-white-dress-26754674.jpg",
    },
    {
      label: "Adult",
      value: "adult",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT89jmVCERjEE51emOAckIUWtESoGvyUNHqKw&s",
    },
    {
      label: "Elder",
      value: "elder",
      img: "https://media.istockphoto.com/id/517234226/photo/i-see-no-good-reason-to-act-my-age.jpg?s=612x612&w=0&k=20&c=qx2j21ZtwPWJuvrLD8uvegXz9z4YSQQnflUyGlBkyic=",
    },
  ];

  return (
    <div className="mt-10 text-center px-4">
      <h2 className="text-2xl sm:text-3xl font-heading text-[#1E1B4B] mb-6">
        Select Age Group
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 justify-center">
        {ageGroups.map((age) => (
          <div
            key={age.value}
            onClick={() => onSelect(age.value)}
            className="cursor-pointer group transition transform hover:scale-105"
          >
            <div className="overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition duration-300 bg-white">
              <img
                src={age.img}
                alt={age.label}
                className="w-full h-28 sm:h-32 object-cover"
              />
            </div>
            <p className="mt-2 text-[#1E1B4B] font-medium text-xs sm:text-sm uppercase tracking-wide">
              {age.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
