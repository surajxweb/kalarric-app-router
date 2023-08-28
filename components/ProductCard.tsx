"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./ProductCard.module.css";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  price: number;
  imageURL1: string;
  imageURL2: string;
  mrp: number;
  id: number;
  category: string;
  key: number;
}

export default function ProductCard({
  name,
  price,
  imageURL1,
  imageURL2,
  mrp,
  id,
  category,
}: ProductCardProps) {
  const [hover, setHover] = useState<boolean>(false);

  const discountPercentage = Math.floor(((mrp - price) * 100) / mrp);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <>
      <Link href={`/store/${category}/${id}`}>
        <div className={styles.container}>
          <div
            className='image-container'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {hover ? (
              <Image
                src={imageURL2}
                alt='cover picture 1'
                width={400}
                height={400}
              />
            ) : (
              <Image
                src={imageURL1}
                alt='cover picture 2'
                width={400}
                height={400}
              />
            )}
          </div>
          <h3 className={styles.name}>{name}</h3>
          <div className={styles.info}>
            <div className={styles.price}>{`₹ ${price}`}</div>
            <div className={styles.mrp}>{`MRP ${mrp}`}</div>
            <div
              className={styles.discount}
            >{`(${discountPercentage}% off)`}</div>
          </div>
        </div>
      </Link>
    </>
  );
}
