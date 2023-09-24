"use client";

import Link from "next/link";
import styles from "./ProductInfo.module.css";
import { useState } from "react";
import { Product } from "@/types/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addToCart, addToPaymentCart } from "@/redux/features/auth-slice";
import { useRouter } from "next/navigation";
import MoreProductInfo from "./MoreProductInfo";

const ProductInfo = ({ product }: { product: Product }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isAddedToBag, setIsAddedToBag] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  const router = useRouter();

  const sizeWithStocks = product.quantities?.filter((size) => size.number > 0);

  const sizeSelectHandler = (size: string) => {
    setSelectedSize(size);
    setSizeError(false);
    setIsAddedToBag(false);
  };

  const dispatch = useDispatch<AppDispatch>();

  const justBuyNow = () => {
    selectedSize ? setIsAddedToBag(false) : setSizeError(true);
    if (selectedSize) {
      //add to cart
      dispatch(
        addToPaymentCart({
          cartID: `${product.productName}${selectedSize}`,
          category: `${product.category.categoryName}`,
          productId: product.id,
          productName: product.productName,
          size: selectedSize,
          mrp: product.mrp,
          price: product.price,
          quantity: 1,
          imageURL: product.images[0].productImage[0].url,
        })
      );
      router.push("/checkout");
    }
  };

  const addToCartHandler = () => {
    selectedSize ? setIsAddedToBag(true) : setSizeError(true);
    if (selectedSize) {
      //add to cart
      dispatch(
        addToCart({
          cartID: `${product.productName}${selectedSize}`,
          category: `${product.category.categoryName}`,
          productId: product.id,
          productName: product.productName,
          size: selectedSize,
          mrp: product.mrp,
          price: product.price,
          quantity: 1,
          imageURL: product.images[0].productImage[0].url,
        })
      );
    }
  };

  console.log(product.category.categoryName);

  return (
    <div className={styles.infoContainer}>
      <Link href={`/store/${product.category.categoryName}`}>
        <div className={styles.category}>{product.category.categoryName}</div>
      </Link>
      <h1 className={styles.productTitle}>{product.productName}</h1>
      <div className={styles.description}>{product.productDescription}</div>
      <div className={styles.sizesRow}>
        <div className={styles.select}>Select Size</div>
        <div className={styles.sizes}>
          {sizeWithStocks?.map((size) => (
            <button
              onClick={() => sizeSelectHandler(size.size)}
              className={styles.sizeButton}
              style={{
                backgroundColor: selectedSize === size.size ? "black" : "white",
                color: selectedSize === size.size ? "white" : "black",
              }}
              key={size.size}
            >
              {size.size}
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
        <div className={styles.price}>{`₹ ${product.price}`}</div>
        <div className={styles.mrp}>{`MRP ${product.mrp}`}</div>
      </div>
      <div className={styles.actionButtons}>
        <button onClick={addToCartHandler} className={styles.addButton}>
          ADD TO CART
        </button>
        <button onClick={justBuyNow} className={styles.buyButton}>
          BUY NOW
        </button>
      </div>

      {isAddedToBag && (
        <Link href={"/cart"}>
          <div className={styles.roadToCheckout}>
            Added to cart. Click here to checkout.
          </div>
        </Link>
      )}
      <MoreProductInfo category={product.category.categoryName} />
    </div>
  );
};

export default ProductInfo;
