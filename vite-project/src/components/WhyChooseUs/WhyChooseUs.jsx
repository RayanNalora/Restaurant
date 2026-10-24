import "./WhyChooseUs.css";

const features = [
  {
    id: 1,
    icon: "🥬",
    title: "Fresh Ingredients",
    description:
      "We use carefully selected fresh ingredients to deliver delicious meals.",
  },
  {
    id: 2,
    icon: "👨‍🍳",
    title: "Expert Chefs",
    description:
      "Our professional chefs prepare every dish with passion and creativity.",
  },
  {
    id: 3,
    icon: "🍽️",
    title: "Quality Food",
    description:
      "We care about every detail to give you an exceptional dining experience.",
  },
  {
    id: 4,
    icon: "🚚",
    title: "Fast Service",
    description:
      "We work hard to serve your favorite meals quickly and with care.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="why-choose-us__container">
        <div className="why-choose-us__heading">
          <p className="why-choose-us__subtitle">
            WHY CHOOSE US
          </p>

          <h2 className="why-choose-us__title">
            Why People Love
            <span> Our Food</span>
          </h2>

          <p className="why-choose-us__description">
            Great taste, fresh ingredients, and excellent service
            make every visit special.
          </p>
        </div>

        <div className="why-choose-us__grid">
          {features.map((feature) => (
            <article
              className="why-choose-us__card"
              key={feature.id}
            >
              <div className="why-choose-us__icon">
                {feature.icon}
              </div>

              <h3 className="why-choose-us__card-title">
                {feature.title}
              </h3>

              <p className="why-choose-us__card-description">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
