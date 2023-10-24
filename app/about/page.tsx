import Offers from "@/components/Offers";
import styles from "./About.module.css";
import Image from "next/image";
import headerImage from "@/resources/banner/3.webp";
import biglogo from "@/resources/logo/logo_black.png";
import artisian from "@/resources/banner/artisian.webp";
import { PiHoodieBold } from "react-icons/pi";
import { PiBaseballCapFill } from "react-icons/pi";
import { PiTShirtBold } from "react-icons/pi";
import { PiWalletFill } from "react-icons/pi";
import { GiShorts } from "react-icons/gi";
import { PiPantsBold } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import akash from "@/resources/avatar/akash.png";
import suraj from "@/resources/avatar/suraj.png";
import Link from "next/link";

const team = [
  {
    name: "Akash",
    eid: "001",
    job: "Head of Product & Design",
    about:
      "Akash ensures that every product reflects the highest standards of quality and design. With his expertise, we bring you a curated selection of handcrafted treasures.",
    twitter: "https://twitter.com/itssuzikat",
    email: "akash@kalarric.com",
    image: akash,
  },
  {
    name: "Suraj Katyayan",
    eid: "003",
    job: "The Bridge Builder",
    about:
      "I, Suraj, am your tech-savvy connection to the world of Indian handicrafts. My role is to make sure the remarkable work of our local artisans reaches you with ease.",
    twitter: "https://twitter.com/itssuzikat",
    email: "suraj@kalarric.com",
    image: suraj,
  },
];

const AboutPage = () => {
  return (
    <>
      <Offers />
      <div className={styles.headerImage}>
        <Image src={headerImage} alt="header image" height={480} width={1600} />
      </div>
      <div className={styles.container}>
        <div className={styles.section1}>
          <div className={styles.logoImage}>
            <Image src={biglogo} alt="big logo" width={313} height={222} />
          </div>
          <div className={`${styles.sec1text}`}>
            At Kalarric, we are more than just an online store. We are the
            embodiment of a vision to empower local artisans and celebrate the
            rich tradition of Indian handicrafts. Our journey began with a
            simple goal: to bring the finest quality, handcrafted products,
            including clothing apparel, to a global audience.
          </div>
        </div>
        <h2 className={styles.heading}>Our Vision</h2>
        <div className={styles.section2}>
          <div className={styles.sec2image}>
            <Image src={artisian} alt="big logo" width={1200} height={900} />
          </div>
          <div className={styles.sec2text}>
            In the heart of India, where age-old traditions and craftsmanship
            thrive, we have a team dedicated to ensuring that only the finest,
            meticulously crafted products find their way into our online store.
            Our commitment is to uplift local communities and their incredible
            skills. We understand the love and care that goes into crafting each
            product, whether it&#39;s clothing apparel or other handcrafted
            items. We strive to reflect that same care in our service. Every
            purchase you make supports local artisans, and we take immense pride
            in facilitating this connection.
          </div>
          <div className={styles.icons}>
            <PiTShirtBold size="6em" className={styles.categoryIcon} />
            <PiBaseballCapFill size="6em" className={styles.categoryIcon} />
            <PiHoodieBold size="6em" className={styles.categoryIcon} />
            <GiShorts size="6em" className={styles.categoryIcon} />
            <PiWalletFill size="6em" className={styles.categoryIcon} />
            <PiPantsBold size="6em" className={styles.categoryIcon} />
          </div>
        </div>
        <h2 className={styles.heading}>The Team</h2>
        <div className={styles.section3}>
          {team.map((person) => (
            <div className={styles.people} key={person.eid}>
              <Image src={person.image} alt="avatar" height={500} width={500} />
              <div className={styles.name}>{person.name} </div>
              <div className={styles.job}>{person.job} </div>
              <div className={styles.about}>{person.about} </div>
              <div className={styles.socials}>
                <Link href={person.twitter} className={styles.twitter}>
                  <RiTwitterXFill size="1.5em" />
                </Link>
                <Link href={`mailto:${person.email}`} className={styles.email}>
                  <MdEmail size="1.5em" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutPage;
