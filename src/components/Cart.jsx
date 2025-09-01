import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Cart() {
  const { items, removeItem, updateQty, subtotal, clearCart } = useCart();
  const [processing, setProcessing] = useState(false);
  const delivery = items.length ? 15 : 0;
  const total = subtotal + delivery;

  const pay = async () => {
    if (!items.length) return alert("Tu carrito está vacío");
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      clearCart();
      alert("¡Pago realizado con éxito! (simulado)");
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <h1 className="text-3xl font-bold mb-6">Carrito</h1>

      {!items.length ? (
        <p className="text-gray-600">No hay productos en el carrito.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {items.map(p => (
              <div key={p.id} className="flex gap-4 bg-white rounded-xl shadow p-4">
                <img src={p.image} alt={p.name} className="w-24 h-24 object-cover rounded-lg" />
                <div className="flex-1">
                  <h3 className="font-semibold">{p.name}</h3>
                  <p className="text-sm text-gray-500">{p.category}</p>
                  <p className="font-medium mt-1">S/ {p.price}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <input
                      type="number"
                      min={1}
                      value={p.qty}
                      onChange={(e) => updateQty(p.id, parseInt(e.target.value || "1", 10))}
                      className="w-20 border rounded-lg px-2 py-1"
                    />
                    <button onClick={() => removeItem(p.id)} className="text-red-600 hover:underline">Quitar</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="bg-white rounded-xl shadow p-4 h-fit">
            <h2 className="font-semibold mb-3 text-lg">Resumen</h2>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between"><span>Subtotal</span><span>S/ {subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Envío</span><span>S/ {delivery.toFixed(2)}</span></div>
              <div className="border-t my-2"></div>
              <div className="flex justify-between font-semibold text-lg"><span>Total</span><span>S/ {total.toFixed(2)}</span></div>
            </div>
            <button
              disabled={processing}
              onClick={pay}
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg disabled:opacity-60"
            >
              {processing ? "Procesando..." : "Pagar (simulado)"}
            </button>
          </aside>
        </div>
      )}
    </div>
  );
}
