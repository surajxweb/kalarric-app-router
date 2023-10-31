import styles from "./OtherProducts.module.css";
const { request } = require("graphql-request");
import RecommendationCard from "./RecommendationCard";

const fetchTshirts = async (id: string, type: string) => {
  const category =
    type === "tshirts"
      ? "cllyd3aeb0prh0aphuiym7aae"
      : "cllyd12hb0pqe0aph15jqpws3";
  const endpoint = process.env.GPAPHQL_KA_CHAABI;
  const query = `
    query tshirts {
      products(where: { 
        category: { id: "${category}" },
        id_not: "${id}"
      }) {
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
          productImage {
            url
          }
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

const OtherProducts = async ({
  category,
  id,
}: {
  category: string;
  id: string;
}) => {
  const otherProducts = await fetchTshirts(id, category);
  return (
    <div className={styles.container}>
      <h2>People Also Bought</h2>
      <div className={styles.list}>
        {otherProducts?.map((product: any) => (
          <RecommendationCard
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

export default OtherProducts;
