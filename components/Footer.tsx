import Image from "next/image";
import Link from "next/link";
import biglogo from "../resources/logo/biglogo.png";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src={biglogo} alt='big logo' width={313} height={222} />
        </div>
        <div className={styles.shop}>
          <ul className={styles.links}>
            <Link href='/store/tshirts'>
              <li>T-Shirts</li>
            </Link>
            <Link href='/store/wallets'>
              <li>Wallets</li>
            </Link>

            <li>Caps (Coming Soon!)</li>
          </ul>
        </div>
        <div className={styles.company}>
          <ul className={styles.links}>
            <Link href='/ourstory'>
              <li>Our Story</li>
            </Link>
            <Link href='/shippingandreturns'>
              <li>Shipping and Returns</li>
            </Link>
            <Link href='/privacypolicy'>
              <li>Privacy Policy</li>
            </Link>
             <Link  href='https://www.kalarric.art/' target="_blank">
              <li>Design @ Kalarric</li>
            </Link> 
          </ul>
        </div>
        <div className={styles.socials}>
          <div>
            <Link  target="_blank" href='https://www.instagram.com/kalarric'>
              <BsInstagram className={styles.insta} size='2em' />
            </Link>
            <Link  target="_blank" href='https://www.twitter.com/kalarric'>
              <RiTwitterXFill className={styles.insta} size='2em' />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.credit}>
        <div>&copy; 2022-23 Kalarric Lifestyle</div>
      </div>
    </div>
  );
}
