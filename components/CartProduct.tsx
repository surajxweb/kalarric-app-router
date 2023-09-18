import Link from "next/link";
import Image from "next/image";
import styles from "./CartProduct.module.css";
import CartQuantity from "./CartQuantity";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/redux/features/auth-slice";

const CartProduct = ({
  cartID,
  name,
  size,
  qty,
  price,
  mrp,
  image,
}: {
  cartID: string;
  name: string;
  size: string;
  qty: number;
  price: number;
  mrp: number;
  image: string;
}) => {
  const totalmrp = mrp * qty;
  const totalprice = price * qty;


  const dispatch = useDispatch<AppDispatch>();


  const deleteKaro = () => {
      dispatch(removeFromCart(cartID));
  }

  
  return (
    <div className={styles.container}>
      <div className={styles.productContainer}>
        <div className={styles.image_name}>
          <div className={styles.productImage}>
            <Image
              src={image}
              alt='product image'
              height={150}
              width={150}
            />
          </div>
          <div className={styles.productInfo}>
            <div className={styles.name}>{name}</div>
            <div className={styles.size}>Size: {size}</div>
            <div className={styles.qty}>
              <CartQuantity qty={qty} cartID={cartID}/>
              <RiDeleteBin5Fill onClick={deleteKaro} className={styles.icons} size='1.5em' />
            </div>
          </div>
        </div>
        <div className={styles.prices}>
          <div className={styles.mrp}>MRP {totalmrp}</div>
          <div className={styles.price}>₹{totalprice}</div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
