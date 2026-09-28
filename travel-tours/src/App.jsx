import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Tours from "./pages/Tours";
import TourDetails from "./pages/TourDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
return (
<>
<Navbar />

<Routes>
<Route path="/" element={<Home />} />
<Route path="/destinations" element={<Destinations />} />
<Route path="/tours" element={<Tours />} />
<Route path="/tour/:tourId" element={<TourDetails />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
</Routes>

<Footer />
</>
);
}

export default App;