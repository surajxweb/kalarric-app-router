import Offers from "@/components/Offers";
import { stripe } from "@/lib/stripe";
import Image from "next/image";
import success from "@/resources/success.webp";
import styles from "./PaymentSuccess.module.css";
import Link from "next/link";

interface Props {
  searchParams: {
    session_id?: string;
    success?: boolean | string;
  };
}

const PaymentSuccess = async ({ searchParams }: Props) => {
  const sessionID = searchParams?.session_id ?? "";
  const checkoutSession = await stripe.checkout.sessions.retrieve(sessionID);
  const customerDetails = checkoutSession?.customer_details;
  console.log("lelo detail cutomer ka: ", customerDetails);

  return (
    <>
      <Offers />
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={success}
            alt='payment successfull'
            height={900}
            width={900}
          />
        </div>
        <div className={styles.text1}>
          Yayy! Payment Successful. Thank you for shopping at Kalarric.
        </div>
        <div className={styles.text2}>
          Your payment invoice will be sent to{" "}
          {customerDetails
            ? customerDetails?.email
            : "your registered email address"}
          .
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

export default PaymentSuccess;
