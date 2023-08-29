"use client";

import React from "react";
import { UserProfile } from "@clerk/nextjs";

const UserPage = () => {
  return (
    <div>
      <UserProfile />
    </div>
  );
};

export default UserPage;
