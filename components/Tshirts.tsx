import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import tshirt1 from "../resources/Header/one.png";
import tshirt2 from "../resources/Header/two.png";
import tshirt3 from "../resources/Header/three.png";
import styles from "./Tshirts.module.css";

export default function Tshirts() {
  const roadToTShirt = () => {
    console.log("Hey");
  };

  return (
    <div className={styles.carouselContainer}>
      <Carousel
        autoPlay
        interval={3000}
        emulateTouch={true}
        infiniteLoop={true}
        showStatus={false}
        swipeable={true}
        showIndicators={false}
        showThumbs={false}
        onClickItem={roadToTShirt}
        className={styles.carousel}
      >
        <div className={styles.carouselItem}>
          <Image
            src={tshirt1}
            alt='Image 1'
            width={1536}
            height={600}
            unoptimized={true}
            loading='lazy'
          />
        </div>
        <div className={styles.carouselItem}>
          <Image
            src={tshirt2}
            alt='Image 2'
            width={1536}
            height={600}
            unoptimized={true}
            loading='lazy'
          />
        </div>
        <div className={styles.carouselItem}>
          <Image
            src={tshirt3}
            alt='Image 3'
            width={1536}
            height={600}
            unoptimized={true}
            loading='lazy'
          />
        </div>
      </Carousel>
    </div>
  );
}
