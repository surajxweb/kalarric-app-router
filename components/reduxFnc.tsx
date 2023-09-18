"use client";
import React from "react"; // Import React if not already imported
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { logIn, logOut } from "@/redux/features/auth-slice";

const ReduxFnc = ({ id }: { id: string }) => {
  const dispatch = useDispatch<AppDispatch>();

  const clickKiya = () => {
    dispatch(logIn(id));
  };

  const nahiKiya = () => {
    dispatch(logOut());
  };

  return (
    <>
      <button onClick={clickKiya}>Click me to login!</button>
      <button onClick={nahiKiya}>Click me to logout!</button>
    </>
  );
};

export default ReduxFnc;
