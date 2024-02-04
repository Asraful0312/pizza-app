import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Home } from "./pages/Home";
import Heading from "./components/shared/Heading";
import Footer from "./components/shared/Footer";
import Cart from "./pages/Cart";

function App() {
  return (
    <main>
      <Heading />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
