"use client";
import React from "react";
import { SignIn } from "@clerk/nextjs";
import styles from "./Clerk.module.css";
import Offers from "@/components/Offers";

const LoginPage = () => {
  return (
    <>
      <Offers />
      <div className={styles.container}>
        <SignIn />
      </div>
    </>
  );
};

export default LoginPage;

//Photo by <Link href="https://unsplash.com/@vorosbenisop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Benjamin Voros</Link> on <Link href="https://unsplash.com/photos/phIFdC6lA4E?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</Link>
