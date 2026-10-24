import { useState } from "react";

import { NavLink } from "react-router-dom";

import { useCart } from "../CartContext/CartContext";

import "./Navbar.css";

const navLinks = [
  { label: "HOME", path: "/" },
  { label: "ABOUT", path: "/about" },
  { label: "SHOP", path: "/shop" },
  { label: "CONTACT", path: "/contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { cartCount, wishlistCount } = useCart();

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <NavLink
        to="/"
        className="navbar__logo"
        onClick={handleLinkClick}
      >
        <img
          src="/logo-small-inverse 1.png"
          alt="Joe Programming Channel"
        />
      </NavLink>

      {/* Navigation Links */}
      <div
        className={`navbar__links ${
          isMenuOpen ? "navbar__links--open" : ""
        }`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.label}
            to={link.path}
            onClick={handleLinkClick}
            className={({ isActive }) =>
              `navbar__link ${
                isActive ? "navbar__link--active" : ""
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* Actions */}
      <div className="navbar__actions">
        {/* Wishlist */}
        <NavLink
          to="/wishlist"
          className="navbar__action"
          aria-label={`Wishlist: ${wishlistCount} items`}
        >
          ♡

          {wishlistCount > 0 && (
            <span className="navbar__badge">
              {wishlistCount}
            </span>
          )}
        </NavLink>

        {/* Cart */}
        <NavLink
          to="/cart"
          className="navbar__action"
          aria-label={`Shopping cart: ${cartCount} items`}
        >
          🛒

          {cartCount > 0 && (
            <span className="navbar__badge">
              {cartCount}
            </span>
          )}
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <button
        type="button"
        className={`navbar__menu-button ${
          isMenuOpen
            ? "navbar__menu-button--open"
            : ""
        }`}
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label={
          isMenuOpen
            ? "Close navigation menu"
            : "Open navigation menu"
        }
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Navbar;
