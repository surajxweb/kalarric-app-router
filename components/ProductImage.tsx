"use client";

import React, { FC } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Image from "next/image";

type ProductPageProps = {
  images: {
    id: string;
    productImage: { url: string }[];
  }[];
  thumbnails: string;
category: string};

const ProductImage: FC<ProductPageProps> = ({ images, thumbnails, category }) => {
  // Create an array of image objects in the required format
  const imageGalleryItems = images.flatMap((imageObj) =>
    imageObj?.productImage?.map((image) => ({
      original: image.url,
      thumbnail: image.url,
    }))
  );

  const position = thumbnails === "left" ? "left" : "bottom";

  return (
    <ImageGallery
      showNav={false}
      thumbnailPosition={position}
      items={imageGalleryItems}
      showPlayButton={false}
      renderItem={(image) => (
        <div className="image-gallery-image">
          <Image
            src={image.original}
            alt="product image"
            width={1200}
            height={category === "tshirts" ? 900 : 1200}
          />
        </div>
      )}
    />
  );
};

export default ProductImage;
