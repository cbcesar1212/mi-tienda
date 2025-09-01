export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid sm:grid-cols-3 gap-6">
        <div>
          <h4 className="text-white font-semibold mb-2">MiTienda</h4>
          <p className="text-sm">Tu mercado online con productos de calidad.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Enlaces</h4>
          <ul className="space-y-1 text-sm">
            <li><a className="hover:underline" href="/">Inicio</a></li>
            <li><a className="hover:underline" href="/productos">Productos</a></li>
            <li><a className="hover:underline" href="/carrito">Carrito</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Contacto</h4>
          <p className="text-sm">correo@mitienda.com</p>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 text-center text-sm">© 2025 MiTienda.</div>
    </footer>
  );
}
