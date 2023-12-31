import styles from "./shippingandreturns.module.css";
import Link from "next/link";

const ShippingReturns = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Shipping and Returns at Kalarric</h1>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Shipping Information</h2>
        <p>
          We offer free standard shipping on all prepaid orders within India.
          Orders are typically processed and shipped within 1-2 business days.
          Please allow 4-6 business days for delivery. The shipping is handled
          by either ShipRocket or Amazon Shipping for a reliable and efficient
          delivery experience.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Returns Policy</h2>
        <p>
          We want you to be completely satisfied with your purchase. If you are
          not satisfied with your order, we offer a 30-day return policy, no
          questions asked.
        </p>
        <h3 className={styles.subSectionTitle}>Return Criteria</h3>
        <p>
          For a product to be accepted for return, it must meet the following
          criteria:
        </p>
        <ul className={styles.subList}>
          <li>Product must be unused.</li>
          <li>Product tags must be intact.</li>
          <li>There should be no damage from the customer&#39;s end.</li>
        </ul>
        <p> </p>
        <p>
          To initiate a return, please contact our customer support team with
          your order details. Once your return is approved, you will receive
          instructions on how to package and send back the item to our
          designated return address.
        </p>
        <p>
          Once we receive the returned item, we will process your refund within
          2-3 business days. The return process is facilitated by either
          ShipRocket or Amazon Shipping to ensure a smooth and efficient return
          experience.
        </p>
        <p>
          If you have any further questions or need assistance with your return,
          please do not hesitate to
          <Link href={"/support"} className={styles.newLink}>
            {" "}
            contact support
          </Link>
          .
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Refunds Policy</h2>
        <p>
          <strong>1. If you cancel the Order:</strong> The full amount will be
          refunded to you, including shipping charges and COD charges if any.
        </p>
        <p>
          <strong>2. If you return the product:</strong> Shipping charges and
          COD charges charged at the time while placing the order will be
          deducted. Additionally, a Reverse Shipping charge of Rs.100 will be
          charged, and the balance amount will be refunded to you.
        </p>
        <h3 className={styles.subSectionTitle}>Mode of Refund:</h3>
        <p>
          <strong>1. Prepaid Orders:</strong> The amount will be refunded to
          the same account from which the order has been placed. Once we receive
          the product, the amount will be processed in 1-2 working days. Your
          money will be reflected in your account in 5-7 working days.
        </p>
        <p>
          <strong>2. COD Orders:</strong> The amount will be transferred to the
          Bank Account mentioned while placing the Return Request, and your
          amount will be reflected in your account within 7 working days of the
          details.
        </p>
      </div>
    </div>
  );
};

export default ShippingReturns;
