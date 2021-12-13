import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProductCard from "./ProductCard";

// i decided to put 3 products in a row instead of 4 (as shown in design)
// since the text is collapsing together and it didn't look good when decreasing
// the font size to solve the problem

const config = {
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: <LeftArrow />,
  nextArrow: <RightArrow />,
};

export default function ProductsList({ products }) {
  if (products.length === 0) return null;

  return (
    <div className="pt-7">
      <h2 className="text-xl text-white mb-3">{products[0].product_name}</h2>
      <hr className="text-white mb-5" />
      <div className="bg-secondary text-white w-[970px] rounded-xl py-6 px-5">
        <Slider {...config}>
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

function LeftArrow({ className, style, onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      style={{
        ...style,
        color: "white",
        left: "-100px",
        width: "100px",
        height: "40px",
      }}
      viewBox="0 0 24 24"
      stroke="currentColor"
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  );
}

function RightArrow({ className, style, onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      style={{
        ...style,
        color: "white",
        right: "-100px",
        width: "100px",
        height: "40px",
      }}
      viewBox="0 0 24 24"
      stroke="currentColor"
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}
