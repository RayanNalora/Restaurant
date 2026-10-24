import { useCart } from "../../components/CartContext/CartContext";
import Hero from "../../components/Hero/Hero";
import "./Cart.css";

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main className="cart-page">
       <Hero
        backgroundImage="/berger.jpg"
         title="Home-Shop"
        
      />
      <div className="cart-page__container">
        
        <h1 className="cart-page__title">
          {cartCount} Items In Cart
        </h1>
        
        <section className="home__content">
          <div className="cart-page__layout">

            {/* Products */}
            <section className="cart-page__items">

              {cartItems.map((item) => (
                <article
                  className="cart-item"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item__image"
                  />

                  <div className="cart-item__info">

                    <h2 className="cart-item__name">
                      {item.name}
                    </h2>

                    <p className="cart-item__price">
                      {item.price} EG
                    </p>

                    <div className="cart-item__details">
                      {item.details?.map((detail) => (
                        <span key={detail}>
                          {detail}
                        </span>
                      ))}
                    </div>

                  </div>

                  <div className="cart-item__quantity">

                    <button
                      type="button"
                      onClick={() => decreaseQuantity(item.id)}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      onClick={() => increaseQuantity(item.id)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>

                  </div>

                </article>
              ))}

            </section>

            {/* Summary */}
            <aside className="cart-summary">

              <div className="cart-summary__row">
                <span>TOTAL</span>
                <span>{cartTotal} EG</span>
              </div>

              <div className="cart-summary__row">
                <span>SHIPPING</span>
                <span>FREE</span>
              </div>

              <div className="cart-summary__divider" />

              <button
                type="button"
                className="cart-summary__checkout"
              >
                Checkout
              </button>

            </aside>

          </div>
         </section>
      </div>
    </main>
  );
}

export default Cart;
