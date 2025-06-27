import products from '@/data/bags'

export default function ProductDetail({ params }) {
  const product = products.find((item) => item.id === params.slug)

  if (!product) return <div className="p-6">Product not found</div>

  return (
    <div className="p-6">
      <img src={product.image} className="w-full max-w-md rounded mb-4" />
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-gray-700 mt-2 mb-4">₹{product.price}</p>
      <p>{product.description}</p>
    </div>
  )
}
