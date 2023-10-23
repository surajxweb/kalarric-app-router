import Link from "next/link";
import styles from "./NotFound.module.css";
import Offers from "@/components/Offers";
import Image from "next/image";
import erroImage from "@/resources/404_text.webp";

export default function NotFound() {
  return (
    <>
      <Offers />
      <div className={styles.container}>
        <div className={styles.contentConatiner}>
          <div className={styles.errorImage}>
            <Image src={erroImage} height={800} width={1080} alt="not found" />
          </div>
          <div className={styles.text}>
            <div>
              Looks like you got lost shopping at Kalarric. Ain&#39;t that
              funny?
            </div>
            <Link href="/">Come on, Let&#39;s go Home</Link>
          </div>
        </div>
      </div>
    </>
  );
}
