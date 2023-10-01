import Link from "next/link";
import Image from "next/image";
import styles from "./CartProduct.module.css";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  removeFromCart,
  updateCartItemQuantity,
} from "@/redux/features/auth-slice";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 600,
  minWidth: 300,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const CartProduct = ({
  productID,
  cartID,
  name,
  size,
  qty,
  price,
  mrp,
  image,
  category,
}: {
  productID: string;
  cartID: string;
  name: string;
  size: string;
  qty: number;
  price: number;
  mrp: number;
  image: string;
  category: string;
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const totalmrp = mrp * qty;
  const totalprice = price * qty;

  const dispatch = useDispatch<AppDispatch>();

  const deleteKaro = () => {
    dispatch(removeFromCart(cartID));
  };

  const quanityChange = (type: string) => {
    dispatch(updateCartItemQuantity({ cartID, type: type }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.productContainer}>
        <div className={styles.image_name}>
          <Link href={`/store/${category}/${productID}`}>
            <div className={styles.productImage}>
              <Image src={image} alt='product image' height={150} width={150} />
            </div>
          </Link>
          <div className={styles.productInfo}>
            <div className={styles.name}>{name}</div>
            <div className={styles.size}>Size: {size}</div>

            <div className={styles.quantity}>
              <button
                className={styles.qbutton}
                onClick={() => {
                  quanityChange("minus");
                }}
                disabled={qty === 1 ? true : false}
              >
                -
              </button>
              <div className={styles.qtext}>{qty}</div>
              <button
                className={styles.qbutton}
                onClick={() => {
                  quanityChange("plus");
                }}
                disabled={qty >= 3 ? true : false}
              >
                +
              </button>
            </div>

            {/* start modal  */}
            <div>
              <div className={styles.removeCont} onClick={handleOpen}>
                <div className={styles.rmtext}>Remove from Cart</div>
                <RiDeleteBin5Fill className={styles.icons} size='1.5em' />
              </div>

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
              >
                <Box sx={style}>
                  <h3 id='modal-modal-title'>
                    Are you sure you want to remove item from Cart?
                  </h3>
                  <div className={styles.modalDes} id='modal-modal-description'>
                    Every product at Kalarric comes with a 7 day stress free
                    return and exchange.
                  </div>
                  <div className={styles.deleteButtons}>
                    <button onClick={deleteKaro} className={styles.yesButton}>
                      Yes
                    </button>
                    <button onClick={handleClose} className={styles.noButton}>
                      No
                    </button>
                  </div>
                </Box>
              </Modal>
            </div>
            {/* end modal */}
          </div>
        </div>
        <div className={styles.prices}>
          <div className={styles.mrp}>MRP {totalmrp}</div>
          <div className={styles.price}> ₹{totalprice}</div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
