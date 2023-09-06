import React from "react";
import ProductCard from "./ProductCard";
import styles from "./HomeSection.module.css";
import { Product } from "@/types/types";

const HomeSection = ({
  products,
  name,
}: {
  products: Product[];
  name: string;
}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{name}</h2>
      <ul className={styles.hascards}>
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            name={product.productName}
            price={product.price}
            imageURL1={product.images[0]?.productImage[0].url}
            imageURL2={product.images[0]?.productImage[1].url}
            mrp={product.mrp}
            id={product.id}
            category={product.category.categoryName}
          />
        ))}
      </ul>
    </div>
  );
};

export default HomeSection;
