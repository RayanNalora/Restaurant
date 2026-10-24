import { Link } from "react-router-dom";

import "./WishlistEmpty.css";

function WishlistEmpty() {
  return (
    <div className="wishlist-empty">
      <span className="wishlist-empty__icon">
        ♡
      </span>

      <h2>Your wishlist is empty</h2>

      <p>
        You haven't added any products to your wishlist yet.
      </p>

      <Link
        to="/shop"
        className="wishlist-empty__button"
      >
        Explore Products
      </Link>
    </div>
  );
}

export default WishlistEmpty;
