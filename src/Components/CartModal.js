import React from "react";

function CartModal({ isOpen, cartItems, onClose, onRemove }) {
  if (!isOpen) return null;

  const hasItems = cartItems.length > 0;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <header className="modal__header">
          <h2>Your Cart</h2>
          <button className="modal__close-btn" onClick={onClose}>
            ✕
          </button>
        </header>

        <div className="modal__body">
          {!hasItems && <p>No items in the cart.</p>}

          {hasItems && (
            <ul className="cart-list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-list__item">
                  <div className="cart-list__image-wrapper">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="cart-list__image"
                    />
                  </div>
                  <div className="cart-list__details">
                    <h3 className="cart-list__title">{item.title}</h3>
                    <p className="cart-list__price">
                      ${item.price.toFixed(2)}
                    </p>
                    <button
                      className="btn btn--danger"
                      onClick={() => onRemove(item.id)}
                    >
                      Remove from Cart
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <footer className="modal__footer">
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </footer>
      </div>
    </div>
  );
}

export default CartModal;
