import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./components/ProductList";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";       
import ContactFAB from "./components/ContactFAB";


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex-1 mt-14">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ProductList />} />
          <Route path="/carrito" element={<Checkout />} />
        </Routes>
      </div>

      <Footer />
      <ContactFAB />
    </div>
  );
}

export default App;
