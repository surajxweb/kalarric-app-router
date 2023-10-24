import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { BsTruck } from "react-icons/bs";
import { BsFillChatFill } from "react-icons/bs";
import { BsCurrencyRupee } from "react-icons/bs";
import { AiOutlineLock } from "react-icons/ai";
import HomeSection from "@/components/HomeSection";
import Offers from "@/components/Offers";
import headerImage from "@/resources/banner/one.webp";
import header_mobile from "@/resources/banner/one_mobile.webp";
import sale from "@/resources/banner/sale.webp";
import sale_mobile from "@/resources/banner/sale_mobile.webp";
const { request } = require("graphql-request");

const fetchBestSellingProducts = async () => {
  const endpoint = process.env.GPAPHQL_KA_CHAABI;
  const query = `
  query best_selling {
    products(where: {collection: {id: "cllyd4h110p8o0bodcn7zti6f"}}) {
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
    const bestSellingResponse = await request(endpoint, query);
    return bestSellingResponse.products;
  } catch (e) {
    console.log("Failed to fetch Best Selling Products - ", e);
    return null;
  }
};

const fetchKalarricOneProducts = async () => {
  const endpoint = process.env.GPAPHQL_KA_CHAABI;
  const query = `
  query kalarricOne {
    products(where: {collection: {id: "clm61i70t2rt00bo1j5rryo67"}}) {
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
    const kalarricOneResponse = await request(endpoint, query);
    return kalarricOneResponse.products;
  } catch (e) {
    console.log("Failed to fetch Kalarric One Products - ", e);
    return null;
  }
};

const Home = async () => {
  const bestSellingProducts = await fetchBestSellingProducts();
  const kalarricOneProducts = await fetchKalarricOneProducts();

  return (
    <main className={styles.main}>
      <Offers />
      <Link href={"/store"}>
        <div className={styles.headerImage}>
          <Image
            placeholder="blur"
            src={headerImage}
            alt="header image"
            height={600}
            width={1536}
          />
        </div>
      </Link>
      <Link href={"/store"}>
        <div className={styles.headerImage_mobile}>
          <Image
            placeholder="blur"
            src={header_mobile}
            alt="header image"
            height={400}
            width={350}
          />
        </div>
      </Link>
      <div className={styles.info}>
        <div className={styles.sec}>
          <BsTruck size="4em" color="#b3b3b3" />
          <div className={styles.text}>
            <div className={styles.question}>EASY SHIPPING AND RETURNS</div>
            <div className={styles.answer}>
              Free shipping availble on prepaid all orders above ₹999.
            </div>
          </div>
        </div>
        <div className={styles.sec}>
          <BsFillChatFill size="4em" color="#b3b3b3" />
          <div className={styles.text}>
            <div className={styles.question}>24X7 CUSTOMER SUPPORT</div>
            <div className={styles.answer}>
              We offer 24x7 costumer support because we care.
            </div>
          </div>
        </div>
        <div className={styles.sec}>
          <BsCurrencyRupee size="4em" color="#b3b3b3" />
          <div className={styles.text}>
            <div className={styles.question}>MONEY BACK GUARANTEE</div>
            <div className={styles.answer}>
              100% Money back guarantee ensured.
            </div>
          </div>
        </div>
        <div className={styles.sec}>
          <AiOutlineLock size="4em" color="#b3b3b3" />
          <div className={styles.text}>
            <div className={styles.question}>100% SECURE PAYMENT</div>
            <div className={styles.answer}>
              Best payment technology in the industry.
            </div>
          </div>
        </div>
      </div>

      <HomeSection products={bestSellingProducts} name={"BestSellers"} />
      <HomeSection products={kalarricOneProducts} name={"One Wallets"} />

      <div className={styles.sale}>
        <Link href={"/store/wallets"}>
          <Image
            placeholder="blur"
            src={sale}
            alt="wallet banner"
            height={600}
            width={1536}
          />
        </Link>
      </div>
      <div className={styles.sale_mobile}>
        <Link href={"/store/wallets"}>
          <Image
            placeholder="blur"
            src={sale_mobile}
            alt="wallet banner"
            height={400}
            width={350}
          />
        </Link>
      </div>
      {/* <h1 className={`${chillfont.className} ${styles.title}`}>KALARRIC</h1> */}
      <div className={`${styles.homegrown}  ${styles.tricolorBackground}`}>
        HOMEGROWN INDIAN BRAND
      </div>
    </main>
  );
};

export default Home;

// npm add -D encoding
