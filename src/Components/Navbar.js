import React from "react";

function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="navbar">
      <div className="navbar__brand">Fake Store Cart</div>

      <button className="navbar__cart-btn" onClick={onCartClick}>
        Cart <span className="navbar__cart-count">({cartCount})</span>
      </button>
    </nav>
  );
}

export default Navbar;
