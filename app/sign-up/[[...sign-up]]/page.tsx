"use client";
import React from "react";
import { SignUp } from "@clerk/nextjs";
import styles from "../../sign-in/[[...sign-in]]/Clerk.module.css";
import Offers from "@/components/Offers";

const RegisterPage = () => {
  return (
    <>
      <Offers />
      <div className={styles.container}>
        <SignUp />
      </div>
    </>
  );
};

export default RegisterPage;

//Photo by <Link href="https://unsplash.com/@vorosbenisop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Benjamin Voros</Link> on <Link href="https://unsplash.com/photos/phIFdC6lA4E?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</Link>
