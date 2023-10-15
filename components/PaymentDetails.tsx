"use client";

import styles from "./PaymentDetails.module.css";
import { useState } from "react";
import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { initializePaymentCart } from "@/redux/features/auth-slice";
import { loadStripe } from "@stripe/stripe-js";
import { stripepk } from "@/lib/stripe";
import { useAuth } from "@clerk/nextjs";

const PaymentDetails = ({ page }: { page: string }) => {
  const { userId } = useAuth();
  const [codeApplied, setCodeApplied] = useState(0);
  const [code, setCode] = useState("");
  const deleveryAddress = useAppSelector(
    (state) => state.storeReducer.value.deliveryAddress
  );
  const cart = useAppSelector((state) =>
    page === "cart"
      ? state.storeReducer.value.cart
      : state.storeReducer.value.paymentCart
  );
  const router = useRouter();
  const dispatch = useDispatch();

  const totalMrp = cart.reduce(
    (acc, item) => acc + item.mrp * item.quantity,
    0
  );
  const remainingAmt =
    999 - cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = totalMrp > 0 ? (remainingAmt > 0 ? 50 : 0) : 0;
  const taxes = 0;
  const totalAmt =
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0) + shipping;
  const discount = totalAmt - totalMrp;

  const applyCoupon = () => {
    if (codeApplied === 0) {
      // Handle invalid coupon code
      setCodeApplied(2);
    }
  };

  const proceedToPayment = () => {
    dispatch(initializePaymentCart());
    router.push("/checkout");
  };

  const makePayment = async () => {
    console.log("karo payment");

    // Assuming your cart data is stored in a variable named 'cartData'
    const requestPayload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart: cart, // Cart data
        deliveryAddress: deleveryAddress, // Delivery address object
        userId: userId,
      }), // Send the cart data in the request body
    };

    const response = await fetch("/checkout/api/payment", requestPayload);

    if (response.ok) {
      const session = await response.json();

      if (stripepk) {
        const stripe = await loadStripe(stripepk);

        if (stripe) {
          const { error } = await stripe.redirectToCheckout({
            sessionId: session.id,
          });

          if (error) {
            // Handle any errors that occur during the redirect to Stripe's checkout page.
            console.error(error);
          }
        } else {
          console.error("Stripe is null.");
        }
      } else {
        console.error("Session is null.");
      }
    }
  };

  return (
    <div className={styles.payment}>
      <h2>Billing Details</h2>
      <div className={styles.prices}>
        <div className={styles.section}>
          <div className={styles.name}>Cart Total</div>
          <div className={styles.price}>{totalMrp} ₹</div>
        </div>
        <div className={styles.section}>
          <div className={styles.name}>Discount</div>
          <div className={styles.price}>{discount} ₹</div>
        </div>
        <div className={styles.section}>
          <div className={styles.name}>Taxes</div>
          <div className={styles.price}>{taxes} ₹</div>
        </div>
        <div className={styles.section}>
          <div className={styles.name}>Shipping</div>
          <div className={styles.price}>{shipping} ₹</div>
        </div>
        <div className={styles.total}>
          <div className={styles.totalname}>Total Payable Amount</div>
          <div className={styles.price}>{totalAmt} ₹</div>
        </div>
      </div>
      {page === "checkout" && (
        <button
          onClick={makePayment}
          className={styles.paymentbutton}
          disabled={totalMrp > 0 ? false : true}
        >
          Make Payment
        </button>
      )}
      {page === "cart" && (
        <button
          onClick={proceedToPayment}
          className={styles.paymentbutton}
          disabled={totalMrp > 0 ? false : true}
        >
          Place Order
        </button>
      )}
      {remainingAmt > 0 && (
        <div className={styles.remarks}>
          {`Add products worth Rs ${remainingAmt} to get free shippping.`}
        </div>
      )}
      <div className={styles.discount}>
        <input
          onChange={(e) => setCode(e.target.value)}
          placeholder='Enter Discount Code'
          className={styles.input}
        />
        <button onClick={applyCoupon} className={styles.discountButton}>
          Apply
        </button>
      </div>
      {codeApplied !== 0 && (
        <div
          style={{ color: codeApplied === 1 ? "green" : "red" }}
          className={styles.discountFeedback}
        >
          {codeApplied === 1
            ? "Discount Code Applied! ✨"
            : "Invalid Discount Code"}
        </div>
      )}
    </div>
  );
};

export default PaymentDetails;
