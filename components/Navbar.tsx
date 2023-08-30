// Import required libraries and modules
"use client";

import styles from "./Navbar.module.css";
import { LiaTshirtSolid } from "react-icons/lia";
import { LiaWalletSolid } from "react-icons/lia";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHistory } from "react-icons/ai";
import { BiLogInCircle } from "react-icons/bi";
import { BiLogOutCircle } from "react-icons/bi";
import { SiStorybook } from "react-icons/si";
import { FaBlog } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { AiFillLock } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAuth } from "@clerk/nextjs";
import { useClerk } from "@clerk/clerk-react";

import Link from "next/link";
import { useState } from "react";
import UserButton from "./UserButton";

// Define the Navbar component
export default function Navbar() {
  // State to control the visibility of the mobile menu
  const [listVisibility, setListVisibility] = useState(false);

  // Function to toggle the mobile menu visibility
  const changelistVisibility = () => {
    setListVisibility(!listVisibility);
  };

  const { userId } = useAuth();

  const { signOut } = useClerk();
  const signOutKrrdo = () => {
    signOut();
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
            <Link href={"/store/tshirts"}>
              <li className={styles.page}>T-Shirt</li>
            </Link>
            {/* <Link href={"/caps"}>
              <li className={styles.page}>Caps</li>
            </Link> */}
            <Link href={"/store/wallets"}>
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
              <AiOutlineSearch
                className={`${styles.icon} ${styles.search}`}
                size='2em'
              />
            </Link>
            <UserButton />
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
        <div
          onClick={changelistVisibility}
          className={`${styles.mpages} ${
            listVisibility ? styles.slideIn : styles.slideOut
          }`}
        >
          <div className={styles.msection}>
            <div className={styles.mheading}>Store</div>
            <div className={styles.mlists}>
              <Link href={"/tshirts"}>
                <div className={styles.mlist}>
                  <LiaTshirtSolid />
                  <div className={styles.mtext}>Tshirts</div>
                </div>
              </Link>
              <Link href={"/wallets"}>
                <div className={styles.mlist}>
                  <LiaWalletSolid />
                  <div className={styles.mtext}>Wallets</div>
                </div>
              </Link>
              <Link href={"/search"}>
                <div className={styles.mlist}>
                  <AiOutlineSearch />
                  <div className={styles.mtext}>Search</div>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.msection}>
            <div className={styles.mheading}>Accounts</div>
            <div className={styles.mlists}>
              <Link href={"/profile"}>
                <div className={styles.mlist}>
                  <AiOutlineUser />
                  <div className={styles.mtext}>User Profile</div>
                </div>
              </Link>
              <Link href={"/orders"}>
                <div className={styles.mlist}>
                  <AiOutlineHistory />
                  <div className={styles.mtext}>Order History</div>
                </div>
              </Link>
              {!userId && (
                <Link href={"/sign-in"}>
                  <div className={styles.mlist}>
                    <BiLogInCircle />
                    <div className={styles.mtext}>Log In</div>
                  </div>
                </Link>
              )}
              {userId && (
                <div onClick={signOutKrrdo} className={styles.mlist}>
                  <BiLogOutCircle />
                  <div className={styles.mtext}>Log Out</div>
                </div>
              )}
            </div>
          </div>
          <div className={styles.msection}>
            <div className={styles.mheading}>Kalarric</div>
            <div className={styles.mlists}>
              <Link href={"/about"}>
                <div className={styles.mlist}>
                  <SiStorybook />
                  <div className={styles.mtext}>Our Story</div>
                </div>
              </Link>
              <Link href={"/blog"}>
                <div className={styles.mlist}>
                  <FaBlog />
                  <div className={styles.mtext}>Our Blog</div>
                </div>
              </Link>
              <Link href={"/support"}>
                <div className={styles.mlist}>
                  <BiSupport />
                  <div className={styles.mtext}>Customer Support</div>
                </div>
              </Link>
              <Link href={"/privacypolicy"}>
                <div className={styles.mlist}>
                  <AiFillLock />
                  <div className={styles.mtext}>Privacy Policy</div>
                </div>
              </Link>
              <Link href={"/shippingandreturns"}>
                <div className={styles.mlist}>
                  <FaShippingFast />
                  <div className={styles.mtext}>Shipping And Returns</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
