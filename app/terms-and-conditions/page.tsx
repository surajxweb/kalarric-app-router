import styles from "../privacypolicy/privacypolicy.module.css";

const TermsAndConditions = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Terms and Conditions at Kalarric</h1>

      <p className={styles.date}>Effective Date: 1st December, 2023</p>

      <p>
        Welcome to Kalarric! These Terms and Conditions govern your use of our
        website and services. By accessing or using our website and services,
        you agree to the terms and conditions described below.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By using this site, you agree to abide by these Terms and Conditions. If
        you do not agree to these terms, please refrain from using our website
        and services.
      </p>

      <h2>2. Intellectual Property Rights</h2>
      <p>
        The designs presented on this site are protected by intellectual
        property rights. Any duplication, reproduction, or unauthorized use of
        the designs is punishable by law.
      </p>

      <h2>3. Cyber Fraud Warning</h2>
      <p>
        Any attempt at generating fake orders by hacking or any other means is
        considered cyber fraud and is punishable by law.
      </p>

      <h2>4. Mischavious Orders</h2>
      <p>
        Making any mischievous order with the intent of refusing to accept the
        order upon delivery will result in the termination of your account.
      </p>

      <h2>5. Changes to Terms and Conditions</h2>
      <p>
        We reserve the right to update and modify these Terms and Conditions at
        any time. Changes will be effective immediately upon posting. Users will
        be notified of changes through prominent notices on the website.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        If you have any questions, concerns, or requests regarding these Terms
        and Conditions, please contact us at:
      </p>
      <p className={styles.email}>hi@kalarric.com</p>
    </div>
  );
};

export default TermsAndConditions;
