import { useState } from "react";

import { useCart } from "../CartContext/CartContext";

import "./ProductCards.css";

import { Link } from "react-router-dom";

import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";


function ProductCards({ products = [] }) {
  const {
    addToCart,
    toggleWishlist,
    isFavorite,
  } = useCart();

  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 4;

  const maxIndex = Math.max(
    products.length - visibleCards,
    0
  );

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < maxIndex ? prev + 1 : maxIndex
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : 0
    );
  };

  const progress =
    maxIndex === 0
      ? 100
      : ((currentIndex + 1) / (maxIndex + 1)) * 100;

  return (
    <div className="product-slider">
      {/* Cards */}
      <div className="product-slider__viewport">
        <div
          className="product-slider__track"
          style={{
            transform: `translateX(-${currentIndex * 25}%)`,
          }}
        >
          {products.map((product) => {
            const favorite = isFavorite(product.id);

            return (
              <article
                className="product-card"
                key={product.id}
              >
                <div className="product-card__image-wrapper">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-card__image"
                    />
                  </Link>

                  {product.isNew && (
                    <span className="product-card__new">
                      New
                    </span>
                  )}

                  {/* Wishlist Button */}
                  <button
                      className={`product-card__wishlist ${
                      favorite ? "product-card__wishlist--active" : ""
                    }`}
                    type="button"
                    onClick={() => toggleWishlist(product)}
                    aria-label={
                      favorite
                        ? `Remove ${product.name} from wishlist`
                        : `Add ${product.name} to wishlist`
                    }
                    aria-pressed={favorite}
                  >
                    {favorite ? <FaHeart /> : <FaRegHeart />}
                  </button>

                </div>

                <div className="product-card__info">
                  <div className="product-card__top">
                    <span className="product-card__price">
                      {product.price} EG
                    </span>

                    <span className="product-card__rating">
                      <span className="product-card__star">
                        ★
                      </span>

                      {product.rating}
                    </span>
                  </div>

                  <h3 className="product-card__name">
                    {product.name}
                  </h3>

                  <ul className="product-card__details">
                    {product.details?.map((detail) => (
                      <li key={detail}>
                        <span>✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <button
                    className="product-card__button"
                    type="button"
                    onClick={() => addToCart(product)}
                  >
                    Add To Cart
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Slider Controls */}
      <div className="product-slider__controls">
        <div className="product-slider__progress">
          <span
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
[10/24/2026 4:02 PM] Rayan Natora: <div className="product-slider__arrows">
          <button
            type="button"
            className="product-sliderarrow product-sliderarrow--previous"
            onClick={handlePrevious}
            aria-label="Previous products"
          >
            ←
          </button>

          <button
            type="button"
            className="product-sliderarrow product-sliderarrow--next"
            onClick={handleNext}
            aria-label="Next products"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCards;
