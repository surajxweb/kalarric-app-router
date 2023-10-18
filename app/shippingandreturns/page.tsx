import styles from "./shippingandreturns.module.css";
import Link from "next/link";

const ShippingReturns = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Shipping and Returns</h1>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Shipping Information</h2>
        <p>
          We offer free standard shipping on all prepaid orders within the
          India. Orders are typically processed and shipped within 1-2 business
          days. Please allow 3-5 business days for delivery.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Returns Policy</h2>
        <p>
          We want you to be completely satisfied with your purchase. If you are
          not satisfied with your order, we offer a 30-day return policy, no
          questions asked.
        </p>
        <p>
          To initiate a return, please contact our customer support team with
          your order details. Once your return is approved, you will receive
          instructions on how to package and send back the item to our
          designated return address.
          {/* return procedure */}
        </p>
        <p>
          Once we receive the returned item, we will process your refund within
          3-5 business days. {/* pending charges */}
        </p>
        <p>
          If you have any further questions or need assistance with your return,
          please do not hesitate to contact support.
        </p>

        <Link href={"/support"} className={styles.button}>
          Contact Support
        </Link>
      </div>
    </div>
  );
};

export default ShippingReturns;
