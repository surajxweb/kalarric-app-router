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
import Loader from "@/components/Loader";
import PaymentOptions from "@/components/PaymentOptions";

const Checkout = () => {
  const { userId } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [addressList, setAddressList] = useState<[]>([]);
  const [paymentOption, setPaymentOption] = useState("ccdc");

  const paymentCart = useAppSelector(
    (state) => state.storeReducer.value.paymentCart
  );
  const deliveryAddress = useAppSelector(
    (state) => state.storeReducer.value.deliveryAddress
  );

  useEffect(() => {
    // Call fetchAddress when the component mounts
    setIsLoading(true);
    const fetchAddress = async () => {
      const response = await fetch(`/checkout/api/get-address?query=${userId}`);
      const data = await response.json();
      setAddressList(data?.addressData?.addresses);
      setIsLoading(false);
    };

    fetchAddress();
    // Now it won't trigger an infinite loop
  }, [userId]); // Ensure it only runs when userId changes

  return (
    <>
      <Offers />

      <div className={styles.container}>
        <div className={styles.addressContainer}>
          <h2>Checkout</h2>
          <h3>Select a delivery address.</h3>
          <div className={styles.addressList}>
            {isLoading && (
              <div className={styles.addCard}>
                <Loader />
                <div>Loading Address</div>
              </div>
            )}
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
            {!isLoading && (
              <div
                className={styles.addCard}
                onClick={() => setShowForm(!showForm)}
              >
                <div>+</div>
                <div>Add new address.</div>
              </div>
            )}
            {showForm && (
              <AddressForm
                clerkUserID={userId ? userId : ""}
                setView={setShowForm}
              />
            )}
          </div>
          {/* <div className={styles.paymentSection}>
           
            <h3>Select a payment method.</h3>
            <PaymentOptions
              paymentOption={paymentOption}
              setPaymentOption={setPaymentOption}
            />
          </div> */}
          {paymentCart.length > 0 ? (
            <ReviewOrder paymentMethod={paymentOption} />
          ) : (
            <Link className={styles.emptyCart} href={"/cart"}>
              Go to the cart to initiate the order.
            </Link>
          )}
        </div>
        <PaymentDetails paymentMethod={paymentOption} page={"checkout"} />
      </div>
    </>
  );
};

export default Checkout;
