import { Link } from "react-router-dom";
import "./AboutCTA.css";

function AboutCTA() {
  return (
    <section className="about-cta">
      <div className="about-cta__overlay">
        <div className="about-cta__content">
          <p className="about-cta__subtitle">
            DISCOVER OUR MENU
          </p>

          <h2 className="about-cta__title">
            Ready To Taste
            <span> Something Amazing?</span>
          </h2>

          <p className="about-cta__description">
            Explore our delicious menu and discover your next
            favorite meal, prepared with passion and fresh ingredients.
          </p>

          <Link to="/shop" className="about-cta__button">
            Explore Our Menu
            <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutCTA;
