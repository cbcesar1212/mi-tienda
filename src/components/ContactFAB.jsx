import { useState } from "react";

function ContactFAB() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        📞
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-80 shadow-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
            <h2 className="text-lg font-bold mb-4">Contáctanos</h2>
            <form className="flex flex-col space-y-3">
              <input
                type="text"
                placeholder="Tu nombre"
                className="border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Tu correo"
                className="border p-2 rounded"
              />
              <textarea
                placeholder="Escribe tu mensaje"
                className="border p-2 rounded"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactFAB;
