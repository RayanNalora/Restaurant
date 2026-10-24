import './Hero.css';

function Hero({
  backgroundImage,
  title,
  description,
  buttonText,
  buttonHref = '#shop',
}) {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero__overlay"></div>

      <div className="hero__content">
        <h1 className="hero__title">
          {title}
        </h1>

        <p className="hero__description">
          {description}
        </p>
        {buttonText &&
        <a
          href={buttonHref}
          className="hero__button"
        >
          {buttonText}
        </a>
        }
      </div>
    </section>
  );
}

export default Hero;
