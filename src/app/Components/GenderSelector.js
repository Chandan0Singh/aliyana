export default function GenderSelector({ onSelect }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Select Gender</h2>
      <div className="flex justify-center gap-10">
        <div onClick={() => onSelect('male')} className="cursor-pointer">
          <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg" alt="Boy" className="w-32 rounded-full" />
          <p>Boy</p>
        </div>
        <div onClick={() => onSelect('female')} className="cursor-pointer">
          <img src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?semt=ais_hybrid&w=740" alt="Girl" className="w-32 rounded-full" />
          <p>Girl</p>
        </div>
      </div>
    </div>
  )
}
