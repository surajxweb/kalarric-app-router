"use client";

import React from "react";
import { UserProfile } from "@clerk/nextjs";
import styles from "./UserPage.module.css";

const UserPage = () => {
  return (
    <div className={styles.container}>
      <UserProfile />
    </div>
  );
};

export default UserPage;
