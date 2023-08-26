import { NextPage } from "next";
import { database } from "@/resources/Database";
import styles from "./Tshirts.module.css";
import Image from "next/image";
import banner from "@/resources/banner/1.png";
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

const TshirtsPage: NextPage = () => {
  const tshirts: Product[] = database.products.filter(
    (product) => product.category === "tshirts"
  );

  return (
    <div className={styles.container}>
      <Offers />
      <div className={styles.banner}><Image src={banner} height={480} width={1600} alt="tshirts banner" /></div>
      <h1 className={styles.heading}>Oversized Tshirts</h1>
      <div className={styles.list}>
        {tshirts.map((tshirt) => (
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

export default TshirtsPage;
