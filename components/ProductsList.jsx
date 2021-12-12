import ProductCard from "./ProductCard";

export default function ProductsList({ products }) {
  if (products.length === 0) return null;

  return (
    <div className="pt-7">
      <h2 className="text-xl text-white mb-3">{products[0].product_name}</h2>
      <hr className="text-white mb-5" />
      <div className="w-[30000px] overflox-x-scroll">
        <div className="bg-secondary flex flex-row rounded-xl py-6 px-5">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
