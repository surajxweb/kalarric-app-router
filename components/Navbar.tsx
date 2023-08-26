// Import required libraries and modules
"use client";

import styles from "./Navbar.module.css";
import { BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

import Link from "next/link";
import { useState } from "react";

// Define the Navbar component
export default function Navbar() {
  // State to control the visibility of the mobile menu
  const [listVisibility, setListVisibility] = useState(false);

  // Function to toggle the mobile menu visibility
  const changelistVisibility = () => {
    setListVisibility(!listVisibility);
    console.log(listVisibility);
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.nav1}>
          {/* Hamburger menu icon */}
          {!listVisibility && (
            <GiHamburgerMenu
              onClick={changelistVisibility}
              className={`${styles.icon} ${styles.ham}`}
              size='1.8em'
            />
          )}
          {/* Cross icon when mobile menu is visible */}
          {listVisibility && (
            <RxCross1
              onClick={changelistVisibility}
              className={`${styles.icon} ${styles.cross}`}
              size='1.8em'
            />
          )}

          {/* Logo */}
          <div className={styles.logo}>
            <Link href={"/"}>
              <div className={styles.imageContainer}></div>
            </Link>
          </div>

          {/* Navigation links */}
          <ul className={styles.pages}>
            <Link href={"/tshirts"}>
              <li className={styles.page}>T-Shirt</li>
            </Link>
            <Link href={"/caps"}>
              <li className={styles.page}>Caps</li>
            </Link>
            <Link href={"/wallets"}>
              <li className={styles.page}>Wallets</li>
            </Link>
            <Link href={"/blog"}>
              <li className={styles.page}>Blog</li>
            </Link>
            <Link href={"/support"}>
              <li className={styles.page}>Support</li>
            </Link>
            <Link href={"/about"}>
              <li className={styles.page}>About</li>
            </Link>
          </ul>

          {/* Tools section (Search, User Account, Cart) */}
          <div className={styles.tools}>
            <Link href={"/search"}>
              <BsSearch
                className={`${styles.icon} ${styles.search}`}
                size='1.8em'
              />
            </Link>
            <Link href={"/user"}>
              <AiOutlineUser
                className={`${styles.icon} ${styles.search}`}
                size='1.8em'
              />
            </Link>
            <Link href={"/cart"}>
              <div className={styles.carts}>
                <BsFillBagFill
                  className={`${styles.icon} ${styles.carticon}`}
                  size='2em'
                />
                <div className={styles.cartno}>10</div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* List for mobile screens */}
      {listVisibility && (
        <ul onClick={changelistVisibility} className={styles.mpages}>
          <Link href={"/tshirts"}>
            <li className={styles.mpage}>T-Shirt</li>
          </Link>
          <Link href={"/caps"}>
            <li className={styles.mpage}>Caps</li>
          </Link>
          <Link href={"/wallets"}>
            <li className={styles.mpage}>Wallets </li>
          </Link>
          <Link href={"/blog"}>
            <li className={styles.mpage}>Blog</li>
          </Link>
          <Link href={"/support"}>
            <li className={styles.mpage}>Support</li>
          </Link>
          <Link href={"/about"}>
            <li className={styles.mpage}>About</li>
          </Link>
          <Link href={"/user"}>
            <li className={styles.mpage}>Account</li>
          </Link>
          <Link href={"/search"}>
            <li className={styles.mpage}>Search</li>
          </Link>
        </ul>
      )}
    </>
  );
}
