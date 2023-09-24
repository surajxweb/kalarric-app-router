import styles from "./MoreProductInfo.module.css";
import { useState } from "react";

const MoreProductInfo = ({ category }: { category: string }) => {
  const [viewInfo, setViewInfo] = useState(true);

  const toggleView = (showInfo: boolean) => {
    setViewInfo(showInfo);
  };

  return (
    <div className={styles.container}>
      <div className={styles.actionButtons}>
        <div
          onClick={() => toggleView(true)}
          className={`${styles.button} ${viewInfo ? styles.activeTab : ""}`}
        >
          Product Info
        </div>
        <div
          onClick={() => toggleView(false)}
          className={`${styles.button} ${!viewInfo ? styles.activeTab : ""}`}
        >
          Delivery and Returns
        </div>
      </div>
      <div className={styles.content}>
        {viewInfo ? (
          <div>
            <span className={styles.questions}>
              <span className={styles.question}>Material</span>
              <span className={styles.answer}>100% Cotton (240 GSM)</span>
            </span>
            <span className={styles.questions}>
              <span className={styles.question}>Country of Origin</span>
              <span className={styles.answer}>India</span>
            </span>
            <span className={styles.questions}>
              <span className={styles.question}>Weight</span>
              <span className={styles.answer}>100 grams</span>
            </span>
            <span className={styles.questions}>
              <span className={styles.question}>Dimensions</span>
              <span className={styles.answer}> 4 in X 6 in</span>
            </span>
          </div>
        ) : (
          <div>
            <span className={styles.questions}>
              <span className={styles.question}>
                <span className={styles.text}>Fast delivery</span>
              </span>
              <span className={styles.answer}>
                Your package will arrive in 3-5 business days at your pick up
                location or at the comfort of your home.
              </span>
            </span>
            <span className={styles.questions}>
              <span className={styles.question}>
                <span className={styles.text}>Simple exchanges</span>
              </span>
              <span className={styles.answer}>
                Is the fit not quite right? No worries! We&#39;ll exchange your
                product for a new one.
              </span>
            </span>
            <span className={styles.questions}>
              <span className={styles.question}>
                <span className={styles.text}>Easy returns</span>
              </span>
              <span className={styles.answer}>
                Just return your product and we&#39;ll refund your money. No
                questions asked! We&#39;ll do our best to make sure your return
                is hassle-free.
              </span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoreProductInfo;
