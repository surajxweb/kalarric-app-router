"use client";

import PaymentDetails from "@/components/PaymentDetails";
import React, { useState, useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import AddressCard from "@/components/AddressCard";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import ReviewOrder from "@/components/ReviewOrder";
import Link from "next/link";
import AddressForm from "@/components/AddressForm";
import Offers from "@/components/Offers";
import styles from "./Checkout.module.css";

const Checkout = () => {
  const { userId } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [addressList, setAddressList] = useState<[]>([]);
  const paymentCart = useAppSelector(
    (state) => state.storeReducer.value.paymentCart
  );
  const deliveryAddress = useAppSelector(
    (state) => state.storeReducer.value.deliveryAddress
  );

  useEffect(() => {
    // Call fetchAddress when the component mounts
    const fetchAddress = async () => {
      const response = await fetch(`/checkout/api/get-address?query=${userId}`);
      const data = await response.json();
      setAddressList(data?.addressData?.addresses);
    };

    fetchAddress(); // Now it won't trigger an infinite loop
  }, [userId, deliveryAddress]); // Ensure it only runs when userId changes

  return (
    <>
      <Offers />

      <div className={styles.container}>
        <div className={styles.addressContainer}>
          <h2>Checkout</h2>
          <h3>Select a delivery address.</h3>
          <div className={styles.addressList}>
            {addressList.length > 0 &&
              addressList.map((address: any) => (
                <AddressCard
                  id={address.id}
                  key={address.id}
                  fname={address.firstName}
                  lname={address.lastName}
                  phone={address.phoneNumber}
                  lineOne={address.lineOne}
                  lineTwo={address.lineTwo}
                  street={address.street}
                  city={address.city}
                  state={address.state}
                  country={address.country}
                  pincode={address.pincode}
                />
              ))}
            <div
              className={styles.addCard}
              // onClick={() => setShowForm(!showForm)}
            >
              {/* <div>+</div> */}
              <div>Add new address at the payment page.</div>
            </div>
            {showForm && (
              <AddressForm
                clerkUserID={userId ? userId : ""}
                setView={setShowForm}
              />
            )}
          </div>
          {/* <h3>Select a payment method.</h3>
          <div className={styles.paymentOptionsList}>
            Stripe
          </div> */}
          {paymentCart.length > 0 ? (
            <ReviewOrder />
          ) : (
            <Link className={styles.emptyCart} href={"/cart"}>
              Go to the cart to initiate the order.
            </Link>
          )}
        </div>
        <PaymentDetails page={"checkout"} />
        {/* You may add your PaymentDetails component here */}
      </div>
    </>
  );
};

export default Checkout;
