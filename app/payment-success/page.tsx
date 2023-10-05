import Offers from "@/components/Offers";
import { stripe } from "@/lib/stripe";
import Image from "next/image";
import success from "@/resources/success.webp";
import styles from "./PaymentSuccess.module.css";
const { request } = require("graphql-request");
import Link from "next/link";

interface Props {
  searchParams: {
    session_id?: string;
    success?: boolean | string;
  };
}

const PaymentSuccess = async ({ searchParams }: Props) => {
  const sessionID = searchParams?.session_id ?? "";
  const checkoutSession = await stripe.checkout.sessions.retrieve(sessionID);
  const customerDetails = checkoutSession?.customer_details;
  const cart = checkoutSession?.metadata?.cart;
  const deliveryAddress = checkoutSession?.metadata?.deliveryAddress;

  const cartObject = JSON.parse(cart ?? "");
const deliveryAddressObject = JSON.parse(deliveryAddress ?? "");

  // console.log("lelo detail session ka: ", sessionID);
  console.log("lelo id checkout session ka: ", checkoutSession.client_reference_id);
  // console.log("lelo detail cutomer ka: ", customerDetails);


  // console.log("cart deko:", cartObject);
  // console.log("deliveryAddress dekho:", deliveryAddressObject);

  const totalAmount = checkoutSession?.amount_total ? checkoutSession.amount_total / 100 : 0;

  console.log(cartObject);

  const fetchAllPayemntIds = async () => {
    const endpoint = process.env.GPAPHQL_KA_CHAABI;
    const query = `
    query allPaymentIds {
      orders  {
        paymentId
      }
    }
    
    `;
  
    try {
      const payemntIdResponse = await request(endpoint, query);
      return payemntIdResponse;
    } catch (e) {
      console.log("Failed to fetch payment id - ", e);
      return null;
    }
  }
  

  const addOrder = async () => {
    const endpoint = process.env.GPAPHQL_KA_CHAABI;
    const query = `
    mutation {
      createOrder(
        data: {
          paymentId: ${checkoutSession.id}
          totalAmount: ${totalAmount}
          costumer: {connect: {clerkUserId: "${checkoutSession.client_reference_id}"}}
          address: {connect: {id: "${deliveryAddressObject.id}"}}
        }
      ) {
        id
      }
    }
    `;
  
    try {
      const createOrderResponseID = await request(endpoint, query);
      return createOrderResponseID;
    } catch (e) {
      console.log("Failed to add order - ", e);
      return null;
    }
  };

  const addProductToOrder = async ( quantity : any, size: any, price:any, pid: any, oid:any) => {
    const endpoint = process.env.GPAPHQL_KA_CHAABI;
    const query = `
    mutation {
      createProductInOrder(
        data: {
          quantity: ${quantity}
          size:"${size}"
          price: ${price}
          order: { connect: {id: "${oid}" }}
          product: {connect: {id:"${pid}"}}
        }
      ) {
        id
      }
    }
    
    `;
  
    try {
      const addProductToOrderResponseID = await request(endpoint, query);
      return addProductToOrderResponseID.products;
    } catch (e) {
      console.log("Failed to add products to order - ", e);
      return null;
    }
  };

  // const paymentIds = await fetchAllPayemntIds();
  // const currPaymentId = checkoutSession.id;
  // const exists = paymentIds.data.orders.some((order : any )=> order.paymentId === currPaymentId);
  // console.log(exists);


  return (

    <>
      <Offers />
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={success}
            alt='payment successfull'
            height={900}
            width={900}
          />
        </div>
        <div className={styles.text1}>
          Yayy! Payment Successful. Thank you for shopping at Kalarric.
        </div>
        <div className={styles.text2}>
          Your payment invoice will be sent to{" "}
          {customerDetails
            ? customerDetails?.email
            : "your registered email address"}
          .
        </div>
        <div className={styles.links}>
          <Link className={styles.link} href={"/"}>
            Back To Home
          </Link>
          <Link className={styles.link} href={"/orders"}>
            Order History
          </Link>
          <Link className={styles.link} href={"/support"}>
            Customer Support
          </Link>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
