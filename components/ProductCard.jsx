import dayjs from "dayjs";

export default function ProductCard({ product }) {
  return (
    <div
      className="bg-primary rounded-sm p-3 text-white text-opacity-50 mx-4"
      key={product.date}
    >
      <div className="grid grid-cols-2 gap-1">
        <div className="flex flex-col justify-between">
          <img
            src={product.image}
            alt={product.product_name}
            className="w-[80px] h-[80px] object-cover rounded-md"
          />
          {/* the UI protoype didn't specify what to render, so I chose the city for more precision */}
          <span className="mt-2">{product.address.city}</span>
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-white text-opacity-100">{product.product_name}</p>
          <p>{product.brand_name}</p>
          <p className="text-white text-opacity-100">
            $ {product.price.toFixed(2)}
          </p>
          <p className="mt-2">
            Date: {dayjs(product.date).format("DD:MM:YYYY")}
          </p>
        </div>
      </div>
      <p className="mt-1.5">{product.discription}</p>
    </div>
  );
}
