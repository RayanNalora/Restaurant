import { Link } from "react-router-dom";

import "./WishlistCard.css";

function WishlistCard({ product, onRemove }) {
  return (
    <article className="wishlist-card">
      <div className="wishlist-card__image-wrapper">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="wishlist-card__image"
          />
        </Link>

        <button
          type="button"
          className="wishlist-card__remove"
          onClick={() => onRemove(product)}
          aria-label={`Remove ${product.name} from wishlist`}
        >
          ♥️
        </button>
      </div>

      <div className="wishlist-card__info">
        <h3>{product.name}</h3>

        <div className="wishlist-card__details">
          <span className="wishlist-card__price">
            {product.price} EG
          </span>

          <span className="wishlist-card__rating">
            ★ {product.rating}
          </span>
        </div>

        <Link
          to={`/product/${product.id}`}
          className="wishlist-card__button"
        >
          View Product
        </Link>
      </div>
    </article>
  );
}

export default WishlistCard;
