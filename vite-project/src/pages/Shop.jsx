
import { useState } from "react";

import ShopCategories from "../components/ShopCategories/ShopCategories";
import ProductCards from "../components/ProductCards/ProductCards";

import products from "../data/products";
import Hero from "../components/Hero/Hero";
import Titles from "../components/Titles/Titles";

// import "./Shop.css";

export function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <main className="shop-page home">
         <Hero
            backgroundImage="/contact.jpg"
            title="HOME - SHOP"
          />
      <section className="shop-banner">
        <div className="shop-banner__content">
          <p className="shop-banner__breadcrumb">
            HOME - SHOP
          </p>

          <h1 className="shop-banner__title">
            Our Shop
          </h1>
        </div>
      </section>

      <ShopCategories
        onCategoryChange={setSelectedCategory}
      />

      <section className="shop-products">
        <ProductCards products={filteredProducts} />
      </section>
    </main>
  );
}

