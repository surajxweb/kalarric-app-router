import { NextPage } from "next";
import styles from "../tshirts/Tshirts.module.css";
import Image from "next/image";
import banner from "@/resources/banner/2.png";
import Offers from "@/components/Offers";
import ProductCard from "@/components/ProductCard";
const { request } = require("graphql-request");

const fetchWallets = async () => {
  const endpoint = process.env.GPAPHQL_KA_CHAABI;
  const query = `
    query best_selling {
      products(where: {category: {id: "cllyd12hb0pqe0aph15jqpws3"}}) {
        id
        productName
        category {
          id
          categoryName
        }
        price
        mrp
        quantities {
          size
          number
        }
        images {
          id
          imageUrl
        }
      }
    }
  `;

  try {
    const tshirtResponse = await request(endpoint, query);
    return tshirtResponse.products;
  } catch (e) {
    console.log("Failed to fetch Tshirts - ", e);
    return null;
  }
};

const WalletsPage: NextPage = async () => {
  const wallets = await fetchWallets();
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
      <h1 className={styles.heading}>Wallets</h1>
      <div className={styles.list}>
        {wallets.map((product: any) => (
          <ProductCard
            key={product.id}
            name={product.productName}
            price={product.price}
            imageURL1={
              product.images[0]?.imageUrl ||
              "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/gwOo8lCPSZWopkUpx5Pv"
            }
            imageURL2={
              product.images[1]?.imageUrl ||
              "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/gwOo8lCPSZWopkUpx5Pv"
            }
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
