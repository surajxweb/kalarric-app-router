import { NextPage } from "next";
import { database } from "@/resources/Database";
import styles from "./TshirtProduct.module.css";
import Image from "next/image";
import Offers from "@/components/Offers";

interface Product {
  productId: number;
  productName: string;
  category: string; // Assuming category is a string
  offerPrice: number;
  imageURL: string[];
  mrp: number;
}

const TshirtProductPage: NextPage = ( ) => {


  return (
    <div className={styles.container}>
      
    </div>
  );
};

export default TshirtProductPage;
