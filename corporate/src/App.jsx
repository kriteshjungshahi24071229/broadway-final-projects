import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import ScrollToTop from "./ScrollToTop";
import ProjectDetails from "./pages/ProjectDetails";

export default function App() {
return (
<BrowserRouter>

<ScrollToTop />

<Navbar />

<Routes>

<Route path="/" element={<Home />} />

<Route path="/about" element={<About />} />

<Route path="/services" element={<Services />} />

<Route path="/projects" element={<Projects />} />

<Route
path="/projects/:projectId"
element={<ProjectDetails />}
/>

<Route path="/team" element={<Team />} />

<Route path="/contact" element={<Contact />} />

</Routes>

<Footer />

</BrowserRouter>

);
}