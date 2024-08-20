import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Admin from "./routes/Admin";
import Product from "./routes/Admin/Product";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<Admin />}>
          <Route path="products" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
