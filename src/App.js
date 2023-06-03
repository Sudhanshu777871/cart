import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Footer from "./components/Footer";
import About from "./components/About";
import Support from "./components/Support";
import Billing from "./components/Billing";

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
      
      <Route path="/" element={<Product/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/billing" element={<Billing/>}/>
      <Route path="/support" element={<Support/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
