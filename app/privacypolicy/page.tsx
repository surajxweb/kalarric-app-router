import styles from "./privacypolicy.module.css";

const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Privacy Policy at Kalarric</h1>

      <p className={styles.date}>Effective Date: 1st December, 2023</p>

      <p>
        Welcome to Kalarric! This Privacy Policy outlines how we collect, use,
        and protect your personal information when you interact with our website
        and services. By accessing or using our website and services, you agree
        to the terms and practices described in this Privacy Policy.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We may collect various types of information from users of our website
        and services, including:
      </p>
      <ul>
        <li>
          Personal Information: Such as your name, email address, contact
          details, and any other information you provide voluntarily when
          contacting us or creating an account.
        </li>
        <li>
          Usage Data: Information about how you interact with our website,
          including IP address, browser type, pages visited, and other
          analytical data.
        </li>
        <li>
          Cookies and Similar Technologies: We use cookies and similar
          technologies to enhance your user experience and gather data about
          your usage patterns.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information collected for the following purposes:</p>
      <ul>
        <li>
          Providing Services: To process orders, deliver products, and provide
          customer support.
        </li>
        <li>
          Improving User Experience: To analyze website usage and improve our
          services, content, and user interface.
        </li>
        <li>
          Communication: To respond to inquiries, send updates, newsletters, and
          promotional materials.
        </li>
        <li>
          Legal Compliance: To comply with applicable laws, regulations, and
          protect our rights and interests.
        </li>
      </ul>

      <h2>3. Data Sharing and Disclosure</h2>
      <p>We may share your information in the following circumstances:</p>
      <ul>
        <li>
          Service Providers: We may share data with trusted third-party service
          providers who assist us in operating our business and providing
          services to you.
        </li>
        <li>
          Legal Obligations: We may share information when required by law or to
          protect our rights and the safety of others.
        </li>
        <li>
          Business Transfers: In the event of a merger, acquisition, or sale of
          assets, your information may be transferred to the new entity.
        </li>
      </ul>

      <h2>4. Payment Processing and Shipping</h2>
      <p>
        For payment processing, we use third-party services such as PhonePe and
        Stripe. Your payment information is processed by them, and you are
        subject to their respective privacy policies.
      </p>
      <p>
        Additionally, for order fulfillment, we use Amazon Shipping. Necessary
        information, including shipping details, may be shared with Amazon
        Shipping to complete your order.
      </p>

      <h2>5. Security</h2>
      <p>
        We take reasonable measures to protect your personal information from
        unauthorized access, use, or disclosure. However, no method of data
        transmission over the internet or electronic storage is completely
        secure, and we cannot guarantee absolute security.
      </p>

      <h2>6. Your Choices and Rights</h2>
      <p>
        You have the right to access, correct, and delete your personal
        information. You can also opt-out of receiving marketing communications
        from us at any time.
      </p>

      <h2>7. Changes to this Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices or legal requirements. Please review this page
        periodically for any updates.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have any questions, concerns, or requests regarding this Privacy
        Policy or our data practices, please contact us at:
      </p>
      <p className={styles.email}>hi@kalarric.com</p>
    </div>
  );
};

export default PrivacyPolicy;
