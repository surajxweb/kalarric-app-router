"use client";

import Offers from "@/components/Offers";
import CartProduct from "@/components/CartProduct";
import styles from "./Cart.module.css";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { useAppSelector } from "@/redux/store";
import PaymentDetails from "@/components/PaymentDetails";

const Cart = () => {
  const cart = useAppSelector((state) => state.storeReducer.value.cart);
  const { userId } = useAuth();

  return (
    <>
      <Offers />
      <div className={styles.container}>
        <div className={styles.info}>
          {!userId && (
            <div className={styles.signin}>
              <div className={styles.text}>
                <h2>Already have an account?</h2>
                <div>Sign in for a better experience.</div>
              </div>
              <Link href='/sign-in' className={styles.signinbutton}>
                SIGN IN
              </Link>
            </div>
          )}
          <div className={styles.products}>
            <h2>Shopping Bag</h2>
            {cart.length > 0 ? (
              <div className={styles.productList}>
                {cart.map((product) => (
                  <CartProduct
                    key={product.cartID}
                    name={product.productName}
                    size={product.size}
                    qty={product.quantity}
                    price={product.price}
                    mrp={product.mrp}
                    image={product.imageURL}
                    cartID={product.cartID}
                    category={product.category}
                    productID={product.productId}
                  />
                ))}
              </div>
            ) : (
              <Link href={"/"} className={styles.emptyCart}>
                Shopping Bag is empty. Continue shopping.
              </Link>
            )}
          </div>
        </div>
        <PaymentDetails page={"cart"} />
      </div>
    </>
  );
};

export default Cart;
