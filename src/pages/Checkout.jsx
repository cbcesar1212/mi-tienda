import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePayment = () => {
    if (cart.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }
    alert("¡Pago simulado realizado con éxito!");
    clearCart(); // opcional: vaciar carrito tras el pago
  };

  return (
    <div className="max-w-4xl mx-auto p-4 mt-20">
      <h2 className="text-2xl font-bold mb-4">Resumen del Carrito</h2>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.name} x {item.quantity}</span>
              <span>S/ {(item.price * item.quantity).toFixed(2)}</span>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500">✖</button>
            </div>
          ))}
          <div className="mt-4 font-bold">Total: S/ {total.toFixed(2)}</div>

          {/* Botón de simulación de pago */}
          <button
            onClick={handlePayment}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Pagar
          </button>

          <button
            onClick={clearCart}
            className="mt-2 ml-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Vaciar Carrito
          </button>
        </>
      )}
    </div>
  );
}
