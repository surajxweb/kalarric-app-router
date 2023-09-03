import { request } from "graphql-request";
import { Product } from '@/types/types'; 

const fetchAllProducts = async () => {
    const endpoint = process.env.GPAPHQL_KA_CHAABI || "";
    const query = `
    query all_products {
        products {
          productName
          id
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
      
    `
    try {
        const allProductsResponse: { products: Product[] } = await request(endpoint, query);
        return allProductsResponse.products;
      } catch (e) {
        console.log('Failed to fetch product data - ', e);
        return null;
      }
}

const StorePage = async() => {
    const allProducts = await fetchAllProducts();
    console.log(allProducts);
    
    return <div>x`</div>
}


export default StorePage;