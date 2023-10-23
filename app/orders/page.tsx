"use client";

import Offers from "@/components/Offers";
import styles from "./Orders.module.css";
import React, { useState, useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import DropDown from "@/components/Dropdown";
import Image from "next/image";
import Loader from "@/components/Loader";

const Orders = () => {
  const { userId } = useAuth();
  const [isLoaoding, setIsLoading] = useState(false);
  const [ordersData, setOrdersData] = useState<[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      const response = await fetch(`/orders/api?query=${userId}`);
      const data = await response.json();

      setOrdersData(data?.ordersData.orders);
      setIsLoading(false);
    };

    fetchOrders();
  }, [userId]);

  return (
    <>
      <Offers />
      <div className={styles.container}>
        <h1 className={styles.heading}>Your Orders</h1>
        {isLoaoding && (
          <div
            className={`${styles.historyContainer} ${styles.loaderContainer}`}
          >
            <Loader />
            <div>Loading Order History</div>
          </div>
        )}

        {ordersData.length > 0 ? (
          ordersData.map((order: any) => (
            <div key={order.id} className={styles.historyContainer}>
              <div className={styles.info}>
                <div className={styles.infoData}>
                  <div className={styles.iquestions}>
                    <div className={styles.iquestion}>Order for</div>
                    <div className={styles.address}>
                      <div>{`${order.address.firstName} ${order.address.lastName}`}</div>
                      <DropDown address={order.address} />
                    </div>
                  </div>
                  <div className={styles.iquestions}>
                    <div className={styles.iquestion}>Order placed on</div>
                    <div className={styles.ianswer}>
                      {new Date(order.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                  <div className={styles.iquestions}>
                    <div className={styles.iquestion}>Total Price</div>
                    <div className={styles.ianswer}>{order.totalAmount} ₹</div>
                  </div>
                  <div className={styles.iquestions}>
                    <div className={styles.iquestion}>Order Type</div>
                    <div className={styles.ianswer}>
                      {order.prepaid ? "Prepaid" : "Cash on Delivery"}
                    </div>
                  </div>
                  {/* <div className={styles.iquestions}>
                    <div className={styles.iquestion}>Status</div>
                    <div className={styles.ianswer}>{order.tracking}</div>
                  </div> */}
                </div>
                <div className={styles.ordernumber}>
                  <div className={styles.iquestion}>Order ID</div>
                  <div className={styles.ianswer}>{order.id}</div>
                </div>
              </div>
              <div className={styles.products}>
                {order.productInOrders.map((product: any) => (
                  <div className={styles.product} key={product.productId}>
                    <div className={styles.image}>
                      <Image
                        src={product.product.images[0].productImage[0].url}
                        height={400}
                        width={300}
                        alt="product image"
                      />
                    </div>
                    <div className={styles.pname}>
                      {product.product.productName}
                    </div>
                    <div className={styles.aquestions}>
                      <div className={styles.iquestion}>Size</div>
                      <div className={styles.size}>{product.size}</div>
                    </div>
                    <div className={styles.aquestions}>
                      <div className={styles.iquestion}>Quantity</div>
                      <div className={styles.quantity}>{product.quantity}</div>
                    </div>

                    <div className={styles.aquestions}>
                      <div className={styles.iquestion}>Price</div>
                      <div className={styles.price}>{product.price} ₹</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className={styles.error}>
            {!isLoaoding && "No orders found."}
          </div>
        )}
      </div>
    </>
  );
};

export default Orders;
