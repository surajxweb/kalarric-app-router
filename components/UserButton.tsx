"use client";

import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AiOutlineUser } from "react-icons/ai";
import styles from "./UserButton.module.css";
import { useAuth } from "@clerk/nextjs";
import { useClerk } from "@clerk/clerk-react";
import Link from "next/link";
import { ThemeProvider, createTheme } from '@mui/material/styles';


export default function UserButton() {
  const { userId } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { signOut } = useClerk();
  const logOut = () => {
    setAnchorEl(null);
    signOut();
  };

  const theme = createTheme({
    typography: {
      fontFamily: [
        'inherit',
      ].join(','),
    }
  });

  return (
    <div className={styles.container}>
        <ThemeProvider theme={theme}>
      <AiOutlineUser
        id='basic-button'
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup='true'
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={styles.icon}
        size='2em'
      />
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link href={"/profile"}>My Profile</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={"/orders"}>Order History</Link>
        </MenuItem>
        {userId && <MenuItem onClick={logOut}>Logout</MenuItem>}
        {!userId && (
          <MenuItem onClick={handleClose}>
            <Link href={"/sign-in"}>Log In</Link>
          </MenuItem>
        )}
      </Menu>

      </ThemeProvider>
    </div>
  );
}
