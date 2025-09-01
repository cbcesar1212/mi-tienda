export default function FloatingContactButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
    >
      📞
    </button>
  );
}
