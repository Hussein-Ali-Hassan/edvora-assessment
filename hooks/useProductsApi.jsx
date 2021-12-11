import { useState } from "react";

export default function useProductsApi() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
      setLoading(true);
      
    const result = await fetch("/api/products");
    const data = await result.json();
    
    setProducts(data.products);
    setLoading(false);
};

  return { products, loading, fetchProducts };
}
