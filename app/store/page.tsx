import { request } from "graphql-request";
import { Product } from "@/types/types";
import styles from "./Store.module.css";
import FilterAndResults from "@/components/FilterAndResults";
import Offers from "@/components/Offers";

const fetchAllProducts = async () => {
  const endpoint = process.env.GPAPHQL_KA_CHAABI || "";
  const query = `
    query all_products {
        products (first: 20) {
          productName
          id
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
    const allProductsResponse: { products: Product[] } = await request(
      endpoint,
      query
    );
    return allProductsResponse.products;
  } catch (e) {
    console.log("Failed to fetch product data - ", e);
    return null;
  }
};

const StorePage = async () => {
  const allProducts = await fetchAllProducts();

  return (
    <>
      {" "}
      <Offers /> <FilterAndResults allProducts={allProducts} />
    </>
  );
};

export default StorePage;
