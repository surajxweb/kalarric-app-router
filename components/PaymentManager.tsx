"use client";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { clearCart } from "@/redux/features/auth-slice";
import { useAuth } from "@clerk/nextjs";
import { useAppSelector } from "@/redux/store";
import { useEffect } from "react";

const PaymentManager = ({ paymentId }: { paymentId: string }) => {
  const { userId } = useAuth();
  const dispatch = useDispatch<AppDispatch>();

  const deliveryAddress = useAppSelector(
    (state) => state.storeReducer.value.deliveryAddress
  );
  const cart = useAppSelector((state) => state.storeReducer.value.paymentCart);
  const remainingAmt =
    999 - cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = remainingAmt > 0 ? 50 : 0;
  const totalAmt =
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0) + shipping;

  useEffect(() => {
    const paymentDoneHandeller = async () => {
      console.log("PAYMENT HANDLER CALLED");
      const newOrderId = await createOrder();
      console.log("new order id: ", newOrderId);
    };

    const createOrder = async () => {
      const requestOrderPayload = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentId: `PREPAID_${paymentId}`,
          totalAmount: totalAmt,
          userId: userId,
          addressId: deliveryAddress.id,
          tracking: 0,
          prepaid: true,
        }),
      };
      try {
        const response = await fetch("/api/add-order", requestOrderPayload);

        const data = await response.json();
        const newOrderId = data.productInOrderId.createOrder.id;
        for (var i = 0; i < cart.length; i++) {
          console.log("I am running");
          addProductToOrder(
            cart[i].quantity,
            cart[i].size,
            cart[i].price,
            newOrderId,
            cart[i].productId
          );
        }
      } catch (e) {
        console.log("Adding order failed.");
      }
      dispatch(clearCart());
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

    console.log("calling is begining");

    paymentDoneHandeller();
  });

  return <div style={{ height: "0", width: "0" }}></div>;
};

export default PaymentManager;
