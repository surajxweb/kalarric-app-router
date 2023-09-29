"use client";

import PaymentDetails from "@/components/PaymentDetails";
import styles from "./Checkout.module.css";
import Offers from "@/components/Offers";
import AddressForm from "@/components/AddressForm";
import { useState, useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import AddressCard from "@/components/AddressCard";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import ReviewOrder from "@/components/ReviewOrder";
import Link from "next/link";

const Checkout = () => {
  const { userId } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [addressList, setAddressList] = useState<[]>([]);
  const deliveryAddress = useAppSelector(
    (state) => state.storeReducer.value.deliveryAddress
  );
  const paymentCart = useAppSelector(
    (state) => state.storeReducer.value.paymentCart
  );

  useEffect(() => {
    const fetchAddress = async () => {
      const response = await fetch(`/checkout/api/get-address?query=${userId}`);
      const data = await response.json();
      console.log(data);
      setAddressList(data?.addressData?.addresses);
    };
    fetchAddress();
  }, [userId, deliveryAddress]);

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
              onClick={() => setShowForm(!showForm)}
            >
              <div>+</div>
              <div>Add new address.</div>
            </div>
            {showForm && <AddressForm setView={setShowForm} />}
          </div>
          {paymentCart.length > 0 ? (
            <ReviewOrder />
          ) : (
            <Link href={"/cart"}>Go to the cart to initiate order.</Link>
          )}
        </div>

        <PaymentDetails page={"checkout"} />
      </div>
    </>
  );
};

export default Checkout;
