import { Route, Routes } from "react-router-dom";
import ProductListPage from "./pages/ProductList/Index";
import ProductDetailsPage from "./pages/ProductDetails";
import CartPage from "./pages/Cart/Index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/product-detail/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
