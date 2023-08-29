"use client";

import React, { FC } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Image from "next/image";

type ProductPageProps = {
  imageURLs: string[];
  thumbnails: string;
};

const ProductImage: FC<ProductPageProps> = ({ imageURLs, thumbnails }) => {
  const images = imageURLs.map((url) => ({
    original: url,
    thumbnail: url,
  }));

  const position = thumbnails === "left" ? "left" : "bottom";

  return (
    <ImageGallery
      showNav={false}
      thumbnailPosition={position}
      items={images}
      showPlayButton={false}
      renderItem={(image) => (
        <div className='image-gallery-image'>
          <Image
            src={image.original}
            alt='product image'
            width={580}
            height={580}
          />
        </div>
      )}
    />
  );
};

export default ProductImage;
