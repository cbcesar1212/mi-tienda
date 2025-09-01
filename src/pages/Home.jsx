import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-20"> {/* mt-20 agrega espacio desde arriba */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl p-10">
        <h1 className="text-3xl sm:text-4xl font-bold">Bienvenido a Mi Tienda</h1>
        <p className="mt-2 text-white/90">Encuentra lo mejor en ropa, calzado y electrónica.</p>
        <Link 
          to="/productos" 
          className="inline-block mt-5 bg-white text-blue-600 font-semibold px-5 py-2 rounded-lg"
        >
          Ver productos
        </Link>
      </section>
    </div>
  );
}

