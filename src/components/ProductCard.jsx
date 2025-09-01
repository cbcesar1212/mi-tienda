import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
      <div className="w-full h-48 bg-gray-100">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="text-lg font-bold text-blue-600 mt-1">S/ {product.price}</p>

        <div className="mt-3 flex items-center gap-2">
          <input
            type="number"
            min={1}
            value={qty}
            onChange={(e) => setQty(parseInt(e.target.value || "1", 10))}
            className="w-16 border rounded-lg px-2 py-1"
          />
          <button
            onClick={() => addToCart(product, qty)}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
