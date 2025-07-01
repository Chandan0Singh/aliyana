import products from '@/data/bags'

export default function ProductDetail({ params }) {
  const product = products.find((item) => item.id === params.slug)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-lg">
        🛍️ Product not found
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-10 max-w-5xl mx-auto bg-white text-[#1E1B4B]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-serif font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-medium text-black mb-2">₹{product.price}</p>
          {product.sale && (
            <p className="text-green-600 font-semibold mb-4">{product.sale} off</p>
          )}
          <p className="text-gray-700 mb-6">{product.description}</p>

          <button className="px-6 py-3 bg-[#C084FC] text-white rounded-full text-sm uppercase hover:bg-[#4C1D95] transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
