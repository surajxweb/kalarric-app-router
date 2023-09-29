import styles from "./MoreProductInfo.module.css";
import { useState } from "react";

const MoreProductInfo = ({
  category,
  description,
}: {
  category: string;
  description: string;
}) => {
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
            <div className={styles.questions}>
              <div className={styles.question}>Description</div>
              <div className={styles.answer}>{description}</div>
            </div>
            <div className={styles.questions}>
              <div className={styles.question}>Material</div>
              <div className={styles.answer}>
                {category === "tshirts"
                  ? "Best Quality 100% Cotton"
                  : "Genuine Leather"}
              </div>
            </div>
            <div className={styles.questions}>
              <div className={styles.question}>Country of Origin</div>
              <div className={styles.answer}>India</div>
            </div>
            <div className={styles.questions}>
              <div className={styles.question}>Weight</div>
              <div className={styles.answer}>
                {category === "tshirts" ? "240 GSM" : "50 Grams"}
              </div>
            </div>
            {/* <div className={styles.questions}>
              <div className={styles.question}>Dimensions</div>
              <div className={styles.answer}>4 in X 6 in</div>
            </div> */}
          </div>
        ) : (
          <div>
            <div className={styles.questions}>
              <div className={styles.question}>
                <div className={styles.text}>Fast delivery</div>
              </div>
              <div className={styles.answer}>
                Your package will arrive in 3-5 business days at your pick up
                location or at the comfort of your home.
              </div>
            </div>
            <div className={styles.questions}>
              <div className={styles.question}>
                <div className={styles.text}>Simple exchanges</div>
              </div>
              <div className={styles.answer}>
                Is the fit not quite right? No worries! We&#39;ll exchange your
                product for a new one.
              </div>
            </div>
            <div className={styles.questions}>
              <div className={styles.question}>
                <div className={styles.text}>Easy returns</div>
              </div>
              <div className={styles.answer}>
                Just return your product and we&#39;ll refund your money. No
                questions asked! We&#39;ll do our best to make sure your return
                is hassle-free.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoreProductInfo;
