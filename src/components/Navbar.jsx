import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();

  const linkCls = ({ isActive }) =>
    "px-3 py-2 rounded-lg text-sm font-medium " +
    (isActive ? "bg-white/20 text-white" : "text-white/90 hover:bg-white/10");

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600/95 backdrop-blur border-b border-blue-500 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-lg">🛒 MiTienda</Link>
        <div className="flex items-center gap-2">
          <NavLink to="/" className={linkCls}>Inicio</NavLink>
          <NavLink to="/productos" className={linkCls}>Productos</NavLink>
          <NavLink to="/carrito" className={linkCls}>
            Carrito {totalItems > 0 && <span className="ml-1 bg-white text-blue-600 px-2 py-0.5 rounded-full text-xs">{totalItems}</span>}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
