import { NextPage } from "next";
import styles from "../tshirts/Tshirts.module.css";
import Image from "next/image";
import banner from "@/resources/banner/2.webp";
import Offers from "@/components/Offers";
import ProductCard from "@/components/ProductCard";
const { request } = require("graphql-request");

const fetchWallets = async () => {
  const endpoint = process.env.GPAPHQL_KA_CHAABI;
  const query = `
  query wallets {
    products(where: {category: {id: "cllyd12hb0pqe0aph15jqpws3"}}) {
      id
      productName
      price
      mrp
      quantities {
        size
        number
      }
      category {
        id
        categoryName
      }
      images {
        id
        productImage{
          url
        }
      }
    }
  }
  `;

  try {
    const walletsResponse = await request(endpoint, query);
    return walletsResponse.products;
  } catch (e) {
    console.log("Failed to fetch Wallets - ", e);
    return null;
  }
};

const WalletsPage: NextPage = async () => {
  const tshirts = await fetchWallets();

  return (
    <div className={styles.container}>
      <Offers />
      <div className={styles.banner}>
        <Image
          placeholder='blur'
          src={banner}
          height={480}
          width={1600}
          alt='tshirts banner'
        />
      </div>
      <h1 className={styles.heading}>Kalarric Wallets</h1>
      <div className={styles.list}>
        {tshirts?.map((product: any) => (
          <ProductCard
            key={product.id}
            name={product.productName}
            price={product.price}
            imageURL1={product.images[0].productImage[0].url}
            imageURL2={product.images[0]?.productImage[1].url}
            mrp={product.mrp}
            id={product.id}
            category={product.category.categoryName}
          />
        ))}
      </div>
    </div>
  );
};

export default WalletsPage;
