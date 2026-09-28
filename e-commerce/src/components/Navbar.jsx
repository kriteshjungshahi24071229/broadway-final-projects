import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Navbar.css";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="navbar">

      <div className="logo">
        <NavLink to="/">
          <img
            src="/images/techspreelogo.png"
            alt="TechSpree Logo"
          />
        </NavLink>
      </div>

      <div className="nav-links">

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Shop
        </NavLink>

        <NavLink
          to="/categories"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Categories
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          About Us
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Contact
        </NavLink>

      </div>

      <div className="nav-actions">
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `cart-link ${isActive ? "active" : ""}`
          }
        >
          🛒 Cart ({totalItems})
        </NavLink>
      </div>

    </nav>
  );
}