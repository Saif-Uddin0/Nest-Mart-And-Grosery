import ShopCard from "../CategoriesSection/ShopCard/ShopCard";

const ShopCards = ({ products }) => {
  return (
    <div className="mt-4">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:items-center">
        <p className="text-gray-600 text-lg sm:text-xl">
          We found {products.length} items for you!
        </p>

        <div className="flex items-center gap-2">
          <button className="text-gray-600 text-sm px-5 py-2 bg-white rounded-md shadow-sm hover:shadow-md transition">
            Show: 50
          </button>
          <button className="text-gray-600 text-sm px-5 py-2 bg-white rounded-md shadow-sm hover:shadow-md transition">
            Sort by price
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div
        className="
        grid 
        grid-cols-2
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        2xl:grid-cols-5
        gap-5
        mt-8
      "
      >
        {products.map((product) => (
          <div key={product.id} className="h-full">
            <ShopCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCards;
