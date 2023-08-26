import Image from "next/image";
import Link from "next/link";
import walletImage from "../resources/Header/four.png";
import styles from "./Wallets.module.css";

export default function Wallets() {
  return (
    <div className={styles.container}>
      <Link href={"/wallets"}>
        <Image
          src={walletImage}
          alt='wallet banner'
          height={525}
          width={1350}
        />
      </Link>
    </div>
  );
}
