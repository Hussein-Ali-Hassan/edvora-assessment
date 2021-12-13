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
      alert(error.message);
    }
  };

  return { products, loading, fetchProducts };
}
