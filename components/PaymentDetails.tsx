"use client";

import styles from "./PaymentDetails.module.css";
import { useState } from "react";
import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { initializePaymentCart } from "@/redux/features/auth-slice";

const PaymentDetails = ({ page }: { page: string }) => {
  const [codeApplied, setCodeApplied] = useState(0);
  const [code, setCode] = useState("");
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
  let totalAmt = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const remainingAmt = 999 - totalAmt;
  const shipping = remainingAmt > 0 ? 50 : 0;
  const taxes = 0;
  const discount = totalAmt - totalMrp;

  const applyCoupon = () => {
    if (codeApplied === 0) {
      if (code === "OCTOBER") {
        // Calculate the discount (10% off)
        const discountAmount = totalAmt * 0.1;

        // Apply the discount to the totalAmt
        totalAmt -= discountAmount;

        // Update the codeApplied state to indicate that the coupon has been applied
        setCodeApplied(1);
      } else {
        // Handle invalid coupon code
        setCodeApplied(2);
      }
    }
  };

  const proceedToPayment = () => {
    dispatch(initializePaymentCart());
    router.push("/checkout");
  };

  const makePayment = () => {
    console.log("karo bc payment");
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
      <button
        onClick={page === "cart" ? proceedToPayment : makePayment}
        className={styles.paymentbutton}
      >
        Place Order
      </button>
      {remainingAmt > 0 && (
        <div className={styles.remarks}>
          {`Add products worth Rs ${remainingAmt} to get free delivery.`}
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
