"use client";

import { database } from "@/resources/Database";
import Link from "next/link";
import styles from "@/app/store/ProductPage.module.css";
import Offers from "@/components/Offers";
import ProductImage from "@/components/ProductImage";
import InfoTabs from "@/components/ProductInfoTabs";
import { useState } from "react";

interface Product {
  productId: number;
  productName: string;
  category: string;
  description: string;
  productInfo: {
    material: string;
    origin: string;
    weight: string;
    dimension: string;
  };
  quantity: { name: string; number: number }[];
  mrp: number;
  price: number;
  imageURL: string[];
}

interface Account {
  rollNo: number;
  name: string;
  email: string;
  number: number;
  address: {
    line1: string;
    line2: string;
    city: string;
    pincode: number;
    nation: string;
  };
  orderHistory: {
    date: string;
    totalPrice: number;
    purchasedProducts: { productId: number; pricePaid: number }[];
  }[];
}

interface Database {
  products: Product[];
  accounts: Account[];
}

// Define the type for the Next.js page component props
interface WalletProductPageProps {
  params: {
    id: string;
  };
}

const WalletProductPage: React.FC<WalletProductPageProps> = ({ params }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isAddedToBag, setIsAddedToBag] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  const product: Product[] = database.products.filter(
    (product) =>
      product.productId === parseInt(params.id) &&
      product.category === "wallets"
  );

  const objectWithStocks: { name: string; number: number }[] | undefined =
    product[0]?.quantity?.filter((size) => size.number > 0);

  const sizeSelectHandler = (size: string) => {
    setSelectedSize(size);
    setSizeError(false);
    setIsAddedToBag(false);
  };

  const addToCartHandler = () => {
    //add to cart
    selectedSize ? setIsAddedToBag(true) : setSizeError(true);
  };

  return (
    <>
      <Offers />
      {product?.length > 0 ? (
        <div className={styles.container}>
          <div className={styles.productContainer}>
            <div className={styles.imageContainer}>
              <div className={styles.images}>
                <ProductImage
                  thumbnails={"left"}
                  imageURLs={product[0].imageURL}
                />
              </div>
              <div className={styles.mobile_images}>
                <ProductImage
                  thumbnails={"bottom"}
                  imageURLs={product[0].imageURL}
                />
              </div>
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
                  {objectWithStocks?.map((size) => (
                    <button
                      onClick={() => sizeSelectHandler(size.name)}
                      className={styles.sizeButton}
                      style={{
                        backgroundColor:
                          selectedSize === size.name ? "black" : "white",
                        color: selectedSize === size.name ? "white" : "black",
                      }}
                      key={size.name}
                    >
                      {size.name}
                    </button>
                  ))}
                </div>
                {sizeError && (
                  <div className={styles.sizeError}>
                    Select a valid size. We&apos;re not good at guessing.
                  </div>
                )}
              </div>
              <div className={styles.prices}>
                <div className={styles.price}>{`₹ ${product[0].price}`}</div>
                <div className={styles.mrp}>{`MRP ${product[0].mrp}`}</div>
              </div>
              <button onClick={addToCartHandler} className={styles.button}>
                ADD TO CART
              </button>
              {isAddedToBag && (
                <Link href={"/cart"}>
                  <div className={styles.roadToCheckout}>
                    Added to cart. Click here to checkout.
                  </div>
                </Link>
              )}
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

export default WalletProductPage;
