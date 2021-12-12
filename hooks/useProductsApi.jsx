import { useState } from "react";

export default function useProductsApi() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const result = await fetch("/api/products");
      const data = await result.json();

      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("An error occured, please try reloading the page");
    }
  };

  return { products, loading, fetchProducts };
}
