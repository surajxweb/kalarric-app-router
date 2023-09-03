import Link from "next/link";
import styles from "@/app/store/ProductPage.module.css";
import Offers from "@/components/Offers";
import ProductImage from "@/components/ProductImage";
const { request } = require('graphql-request');
import ProductInfo from "@/components/ProductInfo";
import { Product } from '@/types/types'; 

const fetchProductDetails = async (id: string) => {
  const endpoint = process.env.GPAPHQL_KA_CHAABI;
  const query = `
    query product_by_id {
      products(where: { id: "${id}" }) {
        productName
        productDescription
        id
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
    const bestSellingResponse = await request(endpoint, query);
    return bestSellingResponse.products[0];
  } catch (e) {
    console.log('Failed to fetch product data - ', e);
    return null;
  }
};

const WalletProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await fetchProductDetails(params.id);
  console.log(product);
 


  return (
    <>
      <Offers />
     {product ? (
        <div className={styles.container}>
          <div className={styles.productContainer}>
            <div className={styles.imageContainer}>
              {/* <div className={styles.images}>
                <ProductImage
                  thumbnails={"left"}
                  images={product.images}
                />
              </div>
              <div className={styles.mobile_images}>
                <ProductImage
                  thumbnails={"bottom"}
                  images={product.images}
                />
              </div> */}
            </div>
            <ProductInfo product={product} />
           
          </div>
        </div>
      ) : (
        <div>Product Not Found!</div>
      )}
    </>
  );
};


export default WalletProductPage;