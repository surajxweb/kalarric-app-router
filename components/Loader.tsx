import styles from "./Loader.module.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loader = () => {
  return <AiOutlineLoading3Quarters className={styles.loader} size='1.4em' />;
};

export default Loader;
