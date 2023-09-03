import React from "react";
import ProductCard from "./ProductCard";
import styles from "./BestSellers.module.css";
import { Product } from "@/types/types";

const BestSellers = ({ products }: { products: Product[] }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>BEST SELLERS</h2>
      <ul className={styles.hascards}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.productName}
            price={product.price}
            imageURL1={
              product.images[0]?.imageUrl ||
              "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/gwOo8lCPSZWopkUpx5Pv"
            }
            imageURL2={
              product.images[1]?.imageUrl ||
              "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/gwOo8lCPSZWopkUpx5Pv"
            }
            mrp={product.mrp}
            id={product.id}
            category={product.category.categoryName}
          />
        ))}
      </ul>
    </div>
  );
};

export default BestSellers;
