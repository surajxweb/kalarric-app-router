import styles from "../privacypolicy/privacypolicy.module.css";
import Link from "next/link";

const PaymentPolicy = () => {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Payment Policy at Kalarric</h1>
  
        <p className={styles.date}>Effective Date: 1st August, 2023</p>
  
        <p>
          Thank you for choosing Kalarric for your online shopping needs. This
          Payment Policy explains how payments are processed for purchases made on
          our website.
        </p>
  
        <h2>1. Payment Methods</h2>
        <p>
          We offer a variety of payment methods to make your shopping experience
          convenient. Our accepted payment methods include:
        </p>
        <ul>
          <li>All popular Debit and Credit cards</li>
          <li>UPI</li>
          <li>Wallets</li>
          <li>Cash on Delivery</li>
        </ul>
        
  
        <h2>2. Payment Processing</h2>
        <p>
          Payments made through Stripe and PhonePay are securely processed on our
          platform. For Cash on Delivery orders, payment will be collected by the
          delivery personnel at the time of order delivery.
        </p>
  
        <h2>3. Amazon Shipping for Cash on Delivery</h2>
        <p>
          If you choose Cash on Delivery, please note that the shipping of your
          order will be handled by Amazon Shipping.
        </p>
  
        <h2>4. Payment Security</h2>
        <p>
          We prioritize the security of your payment information. Our platform
          employs industry-standard security measures to protect your sensitive
          data during the payment process.
        </p>
  
        <h2>5. More Information</h2>
        <p>
          For more detailed information about our Shipping and Return Policy, click
          <Link href="/shippingandreturns" className={styles.newLinks}>
            {" "}
            here
          </Link>
          .
        </p>
        <p>
          For customer support, click
          <Link href="/support" className={styles.newLinks}>
            {" "}
            here
          </Link>
          .
        </p>
      </div>
    );
  };
  
  export default PaymentPolicy;