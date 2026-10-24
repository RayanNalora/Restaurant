import './Titles.css';

function Titles({
  subtitle,
  title ,
}) {
  return (
    <header className="most-selling-header">
      <p className="most-selling-header__subtitle">
        {subtitle}
      </p>

      <h2 className="most-selling-header__title">
        {title}
      </h2>
    </header>
  );
}

export default Titles;
