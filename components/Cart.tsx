"use client";
import * as React from "react";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { BsFillBagFill } from "react-icons/bs";

import { useAppSelector } from "@/redux/store";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#f23729", // Change the badge background color to red
    right: -3,
    top: 13,
    border: `0.5px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const WhiteOnHoverIcon = styled(BsFillBagFill)({
  color: "#b3b3b3", // Default color
  "&:hover": {
    color: "white", // Change color to white on hover
  },
});

export default function Cart() {
  const cartQty = useAppSelector((state) =>
    state.storeReducer.value.cart.reduce((acc, item) => acc + item.quantity, 0)
  );

  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={cartQty > 0 ? cartQty : "0"} color="primary">
        <WhiteOnHoverIcon />
      </StyledBadge>
    </IconButton>
  );
}
