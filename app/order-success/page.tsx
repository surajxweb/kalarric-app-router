"use client"

import Offers from "@/components/Offers";
import Image from "next/image";
import success from "@/resources/tick.png";
import styles from "../payment-success/PaymentSuccess.module.css";
import { clearCart } from "@/redux/features/auth-slice";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

interface Props {
  searchParams: {
    session_id?: string;
    success?: boolean | string;
  };
}

const OrderSuccess =  () => {
  const dispatch = useDispatch<AppDispatch>();

  dispatch(clearCart());
  return (
    <>
      <Offers />
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={success}
            alt="payment successfull"
            height={900}
            width={900}
          />
        </div>
        <div className={styles.text1}>
          Yayy! Order Successfully Placed. Thank you for shopping at Kalarric.
        </div>
        <div className={styles.text2}>
          Your payment invoice will be sent to your registered Email ID shortly.
        </div>
        <div className={styles.links}>
          <Link className={styles.link} href={"/"}>
            Back To Home
          </Link>
          <Link className={styles.link} href={"/orders"}>
            Order History
          </Link>
          <Link className={styles.link} href={"/support"}>
            Customer Support
          </Link>
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;
