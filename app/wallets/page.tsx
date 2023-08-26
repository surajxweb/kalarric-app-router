import { NextPage } from "next";
import { database } from "@/resources/Database";
import styles from "../tshirts/Tshirts.module.css";
import Image from "next/image";
import banner from "@/resources/banner/2.png";
import Offers from "@/components/Offers";
import ProductCard from "@/components/ProductCard";

interface Product {
  productId: number;
  productName: string;
  category: string; // Assuming category is a string
  offerPrice: number;
  imageURL: string[];
  mrp: number;
}

const WalletsPage: NextPage = () => {
  const wallets: Product[] = database.products.filter(
    (product) => product.category === "wallets"
  );

  return (
    <div className={styles.container}>
      <Offers />
      <div className={styles.banner}><Image src={banner} height={480} width={1600} alt="tshirts banner" /></div>
      <h1 className={styles.heading}>Wallets</h1>
      <div className={styles.list}>
        {wallets.map((tshirt) => (
          <ProductCard
            key={tshirt.productId}
            name={tshirt.productName}
            price={tshirt.offerPrice}
            imageURL1={tshirt.imageURL[0]}
            imageURL2={tshirt.imageURL[1]}
            mrp={tshirt.mrp}
            id={tshirt.productId}
            category={tshirt.category}
          />
        ))}
      </div>
    </div>
  );
};

export default WalletsPage;
