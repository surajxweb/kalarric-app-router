import { updateDeliveryAddress } from "@/redux/features/auth-slice";
import styles from "./AddressForm.module.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "@clerk/nextjs";

const AddressForm = ({
  setView,
  clerkUserID,
}: {
  setView: any;
  clerkUserID: string;
}) => {
  const { userId } = useAuth();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: "",
    phone: "",
    firstName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    streetName: "",
    city: "",
    state: "",
    pincode: "",
    country: "India",
    userId: clerkUserID,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch(
      `/checkout/api/add-address?firstName=${formData.firstName}&lastName=${formData.lastName}&phone=${formData.phone}&addressLine1=${formData.addressLine1}&addressLine2=${formData.addressLine2}&streetName=${formData.streetName}&city=${formData.city}&state=${formData.state}&pincode=${formData.pincode}&country=${formData.country}&clerkID=${clerkUserID}`
    );
    if (response.ok) {
      const data = await response.json();
      const idAfterMutation = data.id;
      if (idAfterMutation) {
        setFormData({ ...formData, id: idAfterMutation });
      }
      dispatch(updateDeliveryAddress(formData));
      setView(false);
    } else {
      console.error("Address creation failed.");
    }
  };

  return (
    <div className={styles.formcontainer}>
      <h3>Enter new address.</h3>
      <form onSubmit={handleSubmit}>
        <label className={styles.formlabel}>
          Phone:
          <input
            type='text'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            className={styles.forminput}
            required
          />
        </label>

        <label className={styles.formlabel}>
          First Name:
          <input
            type='text'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            className={styles.forminput}
            required
          />
        </label>

        <label className={styles.formlabel}>
          Last Name:
          <input
            type='text'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            className={styles.forminput}
            required
          />
        </label>

        <label className={styles.formlabel}>
          Address Line 1:
          <input
            type='text'
            name='addressLine1'
            value={formData.addressLine1}
            onChange={handleChange}
            className={styles.forminput}
            required
          />
        </label>

        <label className={styles.formlabel}>
          Address Line 2:
          <input
            type='text'
            name='addressLine2'
            value={formData.addressLine2}
            onChange={handleChange}
            className={styles.forminput}
          />
        </label>

        <label className={styles.formlabel}>
          Street Name:
          <input
            type='text'
            name='streetName'
            value={formData.streetName}
            onChange={handleChange}
            className={styles.forminput}
            required
          />
        </label>

        <label className={styles.formlabel}>
          City:
          <input
            type='text'
            name='city'
            value={formData.city}
            onChange={handleChange}
            className={styles.forminput}
            required
          />
        </label>

        <label className={styles.formlabel}>
          State:
          <select
            name='state'
            value={formData.state}
            onChange={handleChange}
            className={styles.forminput}
          >
            <option value='Andaman and Nicobar Islands'>
              Andaman and Nicobar Islands
            </option>
            <option value='Andhra Pradesh'>Andhra Pradesh</option>
            <option value='Arunachal Pradesh'>Arunachal Pradesh</option>
            <option value='Assam'>Assam</option>
            <option value='Bihar'>Bihar</option>
            <option value='Chandigarh'>Chandigarh</option>
            <option value='Chhattisgarh'>Chhattisgarh</option>
            <option value='Dadar and Nagar Haveli'>
              Dadar and Nagar Haveli
            </option>
            <option value='Daman and Diu'>Daman and Diu</option>
            <option value='Delhi'>Delhi</option>
            <option value='Goa'>Goa</option>
            <option value='Gujarat'>Gujarat</option>
            <option value='Haryana'>Haryana</option>
            <option value='Himachal Pradesh'>Himachal Pradesh</option>
            <option value='Jammu and Kashmir'>Jammu and Kashmir</option>
            <option value='Jharkhand'>Jharkhand</option>
            <option value='Karnataka'>Karnataka</option>
            <option value='Kerala'>Kerala</option>
            <option value='Lakshadweep'>Lakshadweep</option>
            <option value='Madhya Pradesh'>Madhya Pradesh</option>
            <option value='Maharashtra'>Maharashtra</option>
            <option value='Manipur'>Manipur</option>
            <option value='Meghalaya'>Meghalaya</option>
            <option value='Mizoram'>Mizoram</option>
            <option value='Nagaland'>Nagaland</option>
            <option value='Odisha'>Odisha</option>
            <option value='Puducherry'>Puducherry</option>
            <option value='Punjab'>Punjab</option>
            <option value='Rajasthan'>Rajasthan</option>
            <option value='Sikkim'>Sikkim</option>
            <option value='Tamil Nadu'>Tamil Nadu</option>
            <option value='Telangana'>Telangana</option>
            <option value='Tripura'>Tripura</option>
            <option value='Uttar Pradesh'>Uttar Pradesh</option>
            <option value='Uttarakhand'>Uttarakhand</option>
            <option value='West Bengal'>West Bengal</option>
          </select>
        </label>

        <label className={styles.formlabel}>
          Pincode:
          <input
            type='text'
            name='pincode'
            value={formData.pincode}
            onChange={handleChange}
            className={styles.forminput}
            required
          />
        </label>

        <label className={styles.formlabel}>
          Country:
          <select
            name='country'
            value={formData.country}
            onChange={handleChange}
            className={styles.forminput}
          >
            <option value='India'>India</option>
          </select>
        </label>
        <br />

        <button type='submit' className={styles.submibutton}>
          Submit
        </button>
        <button onClick={() => setView(false)} className={styles.cancelButton}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddressForm;
