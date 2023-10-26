"use client";

import styles from "./PaymentDetails.module.css";
import { useState } from "react";
import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { clearCart, initializePaymentCart } from "@/redux/features/auth-slice";
import { loadStripe } from "@stripe/stripe-js";
import { stripepk } from "@/lib/stripe";
import { useAuth } from "@clerk/nextjs";

const PaymentDetails = ({
  page,
  paymentMethod,
}: {
  page: string;
  paymentMethod: string;
}) => {
  const { userId } = useAuth();
  const [codeApplied, setCodeApplied] = useState(0);
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const deliveryAddress = useAppSelector(
    (state) => state.storeReducer.value.deliveryAddress
  );
  const cart = useAppSelector((state) =>
    page === "cart"
      ? state.storeReducer.value.cart
      : state.storeReducer.value.paymentCart
  );
  const router = useRouter();
  const dispatch = useDispatch();

  const paymentMethodCharge = paymentMethod === "cod" ? 25 : 0;
  const totalMrp = cart.reduce(
    (acc, item) => acc + item.mrp * item.quantity,
    0
  );
  const remainingAmt =
    999 - cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping =
    (totalMrp > 0 ? (remainingAmt > 0 ? 50 : 0) : 0) + paymentMethodCharge;
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

  const createOrder = async () => {
    const requestOrderPayload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        paymentId: `COD_${new Date().getTime()}_${userId}_${Math.floor(
          Math.random() * 1000
        )}`,
        totalAmount: totalAmt,
        userId: userId,
        addressId: deliveryAddress.id,
        tracking: 0,
        prepaid: false,
      }), // Send the cart data in the request body
    };
    const response = await fetch("/api/add-order", requestOrderPayload);
    if (response.ok) {
      const data = await response.json();
      return data.productInOrderId.createOrder.id;
    }
  };

  const addProductToOrder = async (
    quantity: number,
    size: string,
    price: number,
    oid: string,
    pid: string
  ) => {
    const requestProductToOrderPayload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: quantity,
        size: size,
        price: price,
        oid: oid,
        pid: pid,
      }), // Send the cart data in the request body
    };
    const response = await fetch(
      "/api/add-product-to-order",
      requestProductToOrderPayload
    );
  };

  const codKaro = async () => {
    setIsLoading(true);
    const newOrderId = await createOrder();
    for (var i = 0; i < cart.length; i++) {
      addProductToOrder(
        cart[i].quantity,
        cart[i].size,
        cart[i].price,
        newOrderId,
        cart[i].productId
      );
    }

    router.push("/order-success");
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
        deliveryAddress: deliveryAddress, // Delivery address object
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

  const isProductNotAvailable = totalMrp === 0;

  const disableOrder =
    deliveryAddress.firstName.length === 0 || totalMrp === 0 || isLoading;

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
      {page === "checkout" && paymentMethod === "ccdc" && (
        <button
          onClick={makePayment}
          className={styles.paymentbutton}
          disabled={disableOrder}
        >
          Make Payment
        </button>
      )}
      {page === "checkout" && paymentMethod === "cod" && (
        <button
          onClick={codKaro}
          className={styles.paymentbutton}
          disabled={disableOrder}
        >
          Place Order
        </button>
      )}
      {page === "cart" && (
        <button
          onClick={proceedToPayment}
          className={styles.paymentbutton}
          disabled={isProductNotAvailable}
        >
          Proceed to Checkout
        </button>
      )}
      {remainingAmt > 0 && (
        <div className={styles.remarks}>
          {`Add products worth ₹ ${remainingAmt} to get free shippping on prepaid orders.`}
        </div>
      )}
      {paymentMethod === "cod" && (
        <div className={styles.remarks}>
          {`A 25 ₹ Cash on Delivery charge has been added. `}
        </div>
      )}

      <div className={styles.discount}>
        <input
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter Discount Code"
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

// 4242424242424242
// http://localhost:3000/payment-success?success=true&session_id=cs_test_b1CswX6USVAqDJ66SNowX8Gry7rbMpOVG9Ssd10l6kA0wWiUD9qEGDWqav
