import { updateDeliveryAddress } from "@/redux/features/auth-slice";
import styles from "./AddressCard.module.css";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
// import {updateDeliveryAddress} from "";

const AddressCard = ({
  id,
  fname,
  lname,
  phone,
  lineOne,
  lineTwo,
  street,
  city,
  state,
  country,
  pincode,
}: {
  id: string;
  fname: string;
  lname: string;
  phone: string;
  lineOne: string;
  lineTwo: string;
  street: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
}) => {
  const dispatch = useDispatch();
  const updateAddress = () => {
    dispatch(
      updateDeliveryAddress({
        id: id,
        firstName: fname,
        lastName: lname,
        phone: phone,
        addressLine1: lineOne,
        addressLine2: lineTwo,
        streetName: street,
        city: city,
        state: state,
        country: "India",
        pincode: pincode,
      })
    );
  };
  const isSelected =
    useAppSelector((state) => state.storeReducer.value.deliveryAddress.id) ===
    id
      ? true
      : false;
  return (
    <div
      onClick={updateAddress}
      className={styles.container}
      style={{ border: isSelected ? "2px solid grey" : "none" }}
    >
      <div className={styles.name}>{`${fname} ${lname}`}</div>
      <div className={styles.phone}>{phone}</div>
      <div>{lineOne},</div>
      <div>{lineTwo},</div>
      <div>
        {street}, {city}
      </div>
      <div>
        {state}: {pincode},
      </div>
      <div>{country}</div>
    </div>
  );
};

export default AddressCard;
