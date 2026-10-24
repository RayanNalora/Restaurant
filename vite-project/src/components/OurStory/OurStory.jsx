import "./OurStory.css";

function OurStory() {
  return (
    <section className="our-story">
      <div className="our-story__container">
        <div className="our-story__image-wrapper">
          <img
            src="/berg.jpg"
            alt="Delicious food prepared by our restaurant"
            className="our-story__image"
          />

          <div className="our-story__badge">
            <span className="our-story__badge-number">100%</span>
            <span className="our-story__badge-text">
              Fresh Ingredients
            </span>
          </div>
        </div>

        <div className="our-story__content">
          <p className="our-story__subtitle">
            OUR STORY
          </p>

          <h2 className="our-story__title">
            We Serve The Best Food
            <span> With Love</span>
          </h2>

          <p className="our-story__description">
            We believe that great food brings people together.
            Our passion for cooking inspires us to prepare delicious
            meals using carefully selected ingredients.
          </p>

          <p className="our-story__description">
            Every dish is prepared with care, combining quality,
            flavor, and creativity to give our guests a memorable
            dining experience.
          </p>

          <div className="our-story__features">
            <div className="our-story__feature">
              <span className="our-story__feature-icon">✓</span>
              <span>Fresh Ingredients</span>
            </div>

            <div className="our-story__feature">
              <span className="our-story__feature-icon">✓</span>
              <span>Professional Chefs</span>
            </div>

            <div className="our-story__feature">
              <span className="our-story__feature-icon">✓</span>
              <span>Delicious Meals</span>
            </div>

            <div className="our-story__feature">
              <span className="our-story__feature-icon">✓</span>
              <span>Excellent Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
