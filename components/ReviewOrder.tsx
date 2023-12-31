import { useAppSelector } from "@/redux/store";
import styles from "./ReviewOrder.module.css";
import Image from "next/image";

const ReviewOrder = ({ paymentMethod }: { paymentMethod: string }) => {
  const paymentCart = useAppSelector(
    (state) => state.storeReducer.value.paymentCart
  );
  const deliveryAddress = useAppSelector(
    (state) => state.storeReducer.value.deliveryAddress
  );

  const today = new Date();

  // Calculate the date four days from today
  // const fourDaysFromNow = new Date(today);
  // fourDaysFromNow.setDate(today.getDate() + 4);

  // Calculate the date six days from today
  const fiveDaysFromNow = new Date(today);
  fiveDaysFromNow.setDate(today.getDate() + 5);

  // Format the dates as strings (e.g., "YYYY-MM-DD")
  const formatDate = (date: any) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const year = date.getFullYear();
    const month = monthNames[date.getMonth()];
    const day = String(date.getDate());

    return `${day} ${month}, ${year}`;
  };

  return (
    <div className={styles.container}>
      <h3>Review Order</h3>
      <div className={styles.reviewContainer}>
        <div className={styles.cartItems}>
          <div className={styles.question}>Cart Items</div>
          {paymentCart.map((item: any) => (
            <div className={styles.product} key={item.cartID}>
              <div className={styles.image}>
                <Image
                  src={item.imageURL}
                  height={80}
                  width={60}
                  alt="product image"
                />{" "}
              </div>
              <div className={styles.productInfo}>
                <div className={styles.productName}>{item.productName}</div>
                <div className={styles.qty}>Quantity: {item.quantity}</div>
                <div className={styles.size}>
                  Size: <span className={styles.sizeNumber}>{item.size}</span>
                </div>
                <div className={styles.price}>
                  Price: {item.price} ₹ x {item.quantity} ={" "}
                  {item.price * item.quantity} ₹
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.moreInfo}>
          {deliveryAddress.firstName.length > 0 ? (
            <div className={styles.section}>
              <div className={styles.question}>Selected Delivery Address:</div>
              <div
                className={styles.name}
              >{`${deliveryAddress.firstName} ${deliveryAddress.lastName}`}</div>
              <div className={styles.phone}>{deliveryAddress.phone}</div>
              <div>{deliveryAddress.addressLine1},</div>
              <div>{deliveryAddress.addressLine2},</div>
              <div>
                {deliveryAddress.streetName}, {deliveryAddress.city}
              </div>
              <div>
                {deliveryAddress.state}: {deliveryAddress.pincode},
              </div>
              <div>{deliveryAddress.country}</div>
            </div>
          ) : (
            <div className={styles.section}>
              <div
                style={{ color: "red" }}
                className={`${styles.question} ${styles.error}`}
              >
                Delivery Address Not Selected.
              </div>
            </div>
          )}
          <div className={styles.section}>
            <div className={styles.question}>Estimated Deliery Date:</div>
            <div>{formatDate(fiveDaysFromNow)}</div>
          </div>
          <div className={styles.section}>
            <div className={styles.question}>Payment Method:</div>
            <div>
              {paymentMethod === "ccdc"
                ? "Credit/Debit Card"
                : paymentMethod === "cod"
                ? "Cash on delivery"
                : "Payment method not selected"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewOrder;
