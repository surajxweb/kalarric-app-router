import ProductCard from "./ProductCard";
import styles from "./StoreProducts.module.css";

const StoreProducts = ({ productsToShow }: any) => {
  return (
    <div className={styles.container}>
      {productsToShow.map((product: any) => (
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
  );
};

export default StoreProducts;
