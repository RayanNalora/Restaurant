import { useCart } from "../../components/CartContext/CartContext";
import WishlistEmpty from "../../components/WishlistGrid/WishlistEmpty/WishlistEmpty";
import WishlistGrid from "../../components/WishlistGrid/WishlistGrid";
import './Wishlist.css'


function Wishlist() {
  const {
    wishlistItems,
    toggleWishlist,
  } = useCart();

  return (
    <section className="wishlist">
      <div className="wishlist__container">

        {wishlistItems.length === 0 ? (
          <WishlistEmpty />
        ) : (
          <WishlistGrid
            products={wishlistItems}
            onRemove={toggleWishlist}
          />
        )}
      </div>
    </section>
  );
}

export default Wishlist;
