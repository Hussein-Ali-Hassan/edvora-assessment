import { useEffect } from "react";

import FilterBox from "@/components/FilterBox";
import ProductsList from "@/components/ProductsList";
import Skeleton from "@/components/Skeleton";
import useProductsApi from "@/hooks/useProductsApi";
import useFilterProducts from "@/hooks/useFilterProducts";
import getUniqueValues from "@/utils/getUniquValues";

export default function Home() {
  const { products, loading, fetchProducts } = useProductsApi();
  const {
    setFilterNameParam,
    setFilterCityParam,
    setFilterStateParam,
    filterProducts,
  } = useFilterProducts();

  useEffect(() => {
    fetchProducts();
  }, []);

  // get the unique products_name, state, and city among all products
  const uniqueProductsName = getUniqueValues(products, "product_name");
  const uniqueProductsState = getUniqueValues(products, "address", "state");
  const uniqueProductsCity = getUniqueValues(products, "address", "city");

  // categorize the (filtered )products each into its company belonging to
  //  to render each array of products in a separate list
  const categorizedProducts = uniqueProductsName.map((product_name) =>
    filterProducts(products).filter(
      (product) => product.product_name === product_name
    )
  );

  return (
    <main className="p-10 flex flex-row gap-8">
      <section>
        <div className="px-9 py-7 bg-secondary col-span-1 rounded-lg">
          <p className="text-xl text-gray-500 mb-2.5">Filters</p>
          <hr className="text-white mb-7" />
          <div className="mb-3">
            <FilterBox
              items={uniqueProductsName}
              setFilterParam={setFilterNameParam}
              label="Products"
            />
          </div>
          <div className="mb-3">
            <FilterBox
              items={uniqueProductsState}
              setFilterParam={setFilterStateParam}
              label="State"
            />
          </div>
          <div className="mb-3">
            <FilterBox
              items={uniqueProductsCity}
              setFilterParam={setFilterCityParam}
              label="City"
            />
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-4xl text-white text-opacity-80 font-bold font-sans">
          Edvora
        </h1>
        <p className="text-2xl font-medium text-white text-opacity-40 mt-4">
          Products
        </p>
        {loading ? (
          <Skeleton />
        ) : categorizedProducts.length === 0 ? (
          <p className="text-2xl font-medium text-white mt-6">
            No products to show
          </p>
        ) : (
          <section className="pt-3">
            {categorizedProducts.map((products) => (
              <ProductsList products={products} />
            ))}
          </section>
        )}
      </section>
    </main>
  );
}
