import { NextPage } from "next";
import { database } from "@/resources/Database";
import styles from "./Tshirts.module.css";
import Image from "next/image";
import banner from "@/resources/banner/1.png";
import Offers from "@/components/Offers";
import ProductCard from "@/components/ProductCard";
const { request } = require("graphql-request");

const fetchTshirts = async () => {
  const endpoint = process.env.GPAPHQL_KA_CHAABI;
  const query = `
    query best_selling {
      products(where: {category: {id: "cllyd3aeb0prh0aphuiym7aae"}}) {
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

const TshirtsPage: NextPage = async () => {
  const tshirts = await fetchTshirts();

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
      <h1 className={styles.heading}>Oversized Tshirts</h1>
      <div className={styles.list}>
        {tshirts.map((product: any) => (
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

export default TshirtsPage;
