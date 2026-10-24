import { useParams, Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

import products from "../../data/products";
import "./ProductDetails.css";
import { useCart } from "../CartContext/CartContext";
import Titles from "../Titles/Titles";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((item) =>
     String(item.id) === id
  );
 
console.log("Product ID from URL:", id);
console.log("Products array:", products);
console.log("Found product:", product);
  if (!product) {
    return (
      <main className="product-details__not-found">
        <h2>Product Not Found</h2>

        <Link to="/">
          Back To Home
        </Link>
      </main>
    );
  }

  return (
    <div>
      
      <main className="product-details">
      <Titles
      subtitle="Burgers"
      title="Burger Spicy Large"
      />
        <div className="product-details__container">

          <div className="product-details__image-wrapper">
            <img
              src={product.image}
              alt={product.name}
              className="product-details__image"
            />

            <button
              type="button"
              className="product-details__favorite"
              aria-label="Add to favorites"
            >
              <FaHeart />
            </button>
          </div>

          <div className="product-details__content">

            <h1 className="product-details__title">
              {product.name}
            </h1>

            <p className="product-details__description">
              {product.description}
            </p>

            <p className="product-details__price">
              {product.price} EG
            </p>

            <button
              type="button"
              className="product-details__add-button"
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>

          </div>

        </div>
      </main>
    </div>
  );
}

export default ProductDetails;
