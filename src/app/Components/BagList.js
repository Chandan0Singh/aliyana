import bagsData from '@/data/bags'

export default function BagList({ gender, age }) {
  const filtered = bagsData.filter(
    (bag) => bag.gender === gender && bag.age === age
  )

  if (filtered.length === 0)
    return <p className="mt-6 text-center">No bags available for this selection.</p>

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Recommended Bags</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((bag) => (
          <div key={bag.id} className="border p-4 rounded-xl shadow">
            <img src={bag.image} className="w-full h-48 object-cover rounded" />
            <h3 className="mt-2 text-lg font-semibold">{bag.name}</h3>
            <p className="text-gray-600">₹{bag.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
