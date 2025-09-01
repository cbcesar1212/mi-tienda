import { useMemo, useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const [category, setCategory] = useState("Todos");

  const categories = useMemo(() => ["Todos", ...Array.from(new Set(products.map(p => p.category)))], []);

  const filtered = useMemo(
    () => (category === "Todos" ? products : products.filter(p => p.category === category)),
    [category]
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <h1 className="text-3xl font-bold mb-4">Productos</h1>

      <div className="flex gap-2 flex-wrap mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full border ${
              category === cat ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
