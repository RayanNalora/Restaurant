

import WishlistCard from "./WishlistCard/WishlistCard";
import "./WishlistGrid.css";

function WishlistGrid({ products, onRemove }) {
  return (
    <div className="wishlist-grid">
      {products.map((product) => (
        <WishlistCard
          key={product.id}
          product={product}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default WishlistGrid;
