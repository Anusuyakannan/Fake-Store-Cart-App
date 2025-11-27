import React from "react";

function ProductCard({ product, onAddToCart }) {
  const { image, title, price } = product;

  return (
    <article className="product-card">
      <div className="product-card__image-wrapper">
        <img src={image} alt={title} className="product-card__image" />
      </div>

      <div className="product-card__body">
        <h2 className="product-card__title">{title}</h2>
        <p className="product-card__price">${price.toFixed(2)}</p>

        <button
          className="btn btn--primary"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
