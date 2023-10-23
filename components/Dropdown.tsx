"use client";

import * as React from "react";
import Popover from "@mui/material/Popover";
import { AiOutlineDown } from "react-icons/ai";
import styles from "./Dropdown.module.css";

export default function DropDown({ address }: { address: any }) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <AiOutlineDown
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        color="orangered"
        className={styles.icon}
      />

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        className={styles.popperContainer}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className={styles.container}>
          <div
            className={styles.name}
          >{`${address.firstName} ${address.lastName}`}</div>
          <div className={styles.phone}>{address.phoneNumber}</div>
          <div>{address.lineOne},</div>
          <div>{address.lineTwo},</div>
          <div>
            {address.street}, {address.city}
          </div>
          <div>
            {address.state}: {address.pincode},
          </div>
          <div>{address.country}</div>
        </div>
      </Popover>
    </div>
  );
}
