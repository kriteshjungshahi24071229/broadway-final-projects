import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCart } from "./context/CartContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

export default function App() {
const { notification, totalItems } = useCart();

return (
<BrowserRouter>
<ScrollToTop />

<Navbar />

{notification && (
<div className="cart-notification">
<div className="cart-notification-icon">🛒</div>

<div>
<strong>Added to Cart!</strong>

<p>{notification.name}</p>

<span>
Cart: {totalItems}{" "}
{totalItems === 1 ? "item" : "items"}
</span>
</div>
</div>
)}

<Routes>
<Route path="/" element={<Home />} />

<Route path="/shop" element={<Shop />} />

<Route path="/categories" element={<Categories />} />

<Route path="/about" element={<About />} />

<Route path="/contact" element={<Contact />} />

<Route
path="/product/:id"
element={<ProductDetails />}
/>

<Route path="/cart" element={<Cart />} />

<Route path="/checkout" element={<Checkout />} />
</Routes>

<Footer />
</BrowserRouter>
);
}