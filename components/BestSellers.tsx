import React from "react";
import ProductCard from "./ProductCard";
import styles from "./BestSellers.module.css";

interface Product {
  productId: number;
  productName: string;
  price: number;
  imageURL: string[];
  mrp: number;
  category: string;
}

interface BestSellersProps {
  products: Product[];
}

const BestSellers: React.FC<BestSellersProps> = ({ products }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>BEST SELLERS</h2>
      <ul className={styles.hascards}>
        {products.map((product) => (
          <ProductCard
            key={product.productId}
            name={product.productName}
            price={product.price}
            imageURL1={product.imageURL[0]}
            imageURL2={product.imageURL[1]}
            mrp={product.mrp}
            id={product.productId}
            category={product.category}
          />
        ))}
      </ul>
    </div>
  );
};

export default BestSellers;
