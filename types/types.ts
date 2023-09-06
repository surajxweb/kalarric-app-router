// types.ts
interface Image {
  id: string;
  productImage: { url: string }[]; // Array of objects with 'url' property
}

interface Product {
  id: string;
  productName: string;
  productDescription: string;
  price: number;
  mrp: number;
  category: Category;
  quantities: Quantity[];
  images: Image[];
}

interface Category {
  id: string;
  categoryName: string;
}

interface Quantity {
  size: string;
  number: number;
}

export interface ProductCardProps {
  name: string;
  price: number;
  imageURL1: string;
  imageURL2: string;
  mrp: number;
  id: string;
  category: string;
}

export type { Product, Category, Quantity, Image };
