import React from 'react';

function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="navbar">
      <h1>Fake Store</h1>
      <button className="cart-button" onClick={onCartClick}>
        Cart ({cartCount})
      </button>
    </nav>
  );
}

export default Navbar;