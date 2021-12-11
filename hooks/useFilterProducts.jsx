import { useState } from "react";

export default function useFilterProducts() {
  const [filterNameParam, setFilterNameParam] = useState("");
  const [filterCityParam, setFilterCityParam] = useState("");
  const [filterStateParam, setFilterStateParam] = useState("");

  // Filter the products based on filter params
  // return all products if no filter param was provided
  const filterProducts = (products) => {
    return products
      .filter((product) =>
        filterNameParam ? product.product_name === filterNameParam : true
      )
      .filter((product) =>
        filterCityParam ? product.address.city === filterCityParam : true
      )
      .filter((product) =>
        filterStateParam ? product.address.state === filterStateParam : true
      );
  };

  return {
    setFilterNameParam,
    setFilterCityParam,
    setFilterStateParam,
    filterProducts,
  };
}
