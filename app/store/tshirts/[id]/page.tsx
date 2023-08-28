"use client";

import { database } from "@/resources/Database";
import Link from "next/link";
import styles from "@/app/store/ProductPage.module.css";
import Offers from "@/components/Offers";
import ProductImage from "@/components/ProductImage";
import InfoTabs from "@/components/ProductInfoTabs";

// Define the type for the Next.js page component props
interface TshirtProductPageProps {
  params: {
    id: string;
  };
}

const TshirtProductPage = ({ params }: { params: { id: string } }) => {
  const product = database.products.filter(
    (product) =>
      product.productId === parseInt(params.id) &&
      product.category === "tshirts"
  );

  const objectWithStocks = product[0].quantity.filter(
    (size: any) => size.number > 0
  );

  return (
    <>
      <Offers />
      {product.length > 0 ? (
        <div className={styles.container}>
          <div className={styles.productContainer}>
            <div className={styles.imageContainer}>
              <ProductImage imageURLs={product[0].imageURL} />
            </div>
            <div className={styles.infoContainer}>
              <Link href={`/store/${product[0].category}`}>
                <div className={styles.category}>{product[0].category}</div>
              </Link>
              <h1 className={styles.productTitle}>{product[0].productName}</h1>
              <div className={styles.description}>{product[0].description}</div>
              <div className={styles.sizesRow}>
                <div className={styles.select}>Select Size</div>
                <div className={styles.sizes}>
                  {objectWithStocks.map((size) => (
                    <button key={size.name}>{size.name}</button>
                  ))}
                </div>
              </div>
              <div className={styles.prices}>
                <div className={styles.price}>{`₹ ${product[0].price}`}</div>
                <div className={styles.mrp}>{`MRP ${product[0].mrp}`}</div>
              </div>
              <button className={styles.button}>ADD TO CART</button>
              <InfoTabs info={product[0].productInfo} />
            </div>
          </div>
        </div>
      ) : (
        <div>Product Not Found!</div>
      )}
    </>
  );
};

export default TshirtProductPage;
