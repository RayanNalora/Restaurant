import { useState } from "react";
import categories from "../../data/categories";
import "./ShopCategories.css";

function ShopCategories({ onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);

    onCategoryChange(categoryName);
  };

  return (
    <section className="shop-categories">
      <div className="shop-categories__heading">
        <p className="shop-categories__subtitle">
          SHOP BY CATEGORY
        </p>

        <h2 className="shop-categories__title">
          SHOP BY CATEGORY
        </h2>
      </div>

      <div className="shop-categories__list">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`shop-category ${
              selectedCategory === category.name
                ? "shop-category--active"
                : ""
            }`}
            onClick={() => handleCategoryClick(category.name)}
          >
            <div className="shop-category__image-wrapper">
              <img
                src={category.image}
                alt={category.name}
                className="shop-category__image"
              />

              {selectedCategory === category.name && (
                <span className="shop-category__check">
                  ✓
                </span>
              )}
            </div>

            <span className="shop-category__name">
              {category.name}
            </span>
          </button>
        ))}
      </div>
      <button
        type="button"
        className={`shop-category ${
            selectedCategory === "All"
            ? "shop-category--active"
            : ""
        }`}
        onClick={() => handleCategoryClick("All")}
        >
        <span className="shop-category__name">
            All
        </span>
        </button>

    </section>
  );
}

export default ShopCategories;
