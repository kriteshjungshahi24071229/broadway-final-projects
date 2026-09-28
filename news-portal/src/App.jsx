import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";
import BreakingNews from "./components/BreakingNews";

import Home from "./pages/Home";
import Latest from "./pages/Latest";
import Categories from "./pages/Categories";
import Article from "./pages/Article";
import About from "./pages/About";
import Contact from "./pages/Contact";

import CategoryNews from "./pages/CategoryNews";

export default function App() {
return (
<BrowserRouter>
<ScrollToTop />

<Navbar />
<BreakingNews />

<Routes>
<Route path="/" element={<Home />} />
<Route path="/latest" element={<Latest />} />
<Route path="/categories" element={<Categories />} />
<Route path="/article/:articleId" element={<Article />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/category/:categoryName" element={<CategoryNews />} />
</Routes>

<Footer />
</BrowserRouter>
);
}