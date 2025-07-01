import products from '@/data/bags'
import ProductCard from '../Components/ProductCard'

export default function ProductsPage() {
  return (
    <div className="min-h-screen px-6 py-10 bg-[#FDF4FF] text-[#1E1B4B]">
      <h1 className="text-4xl font-serif font-bold text-center mb-12">👜 Our Handbags</h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
