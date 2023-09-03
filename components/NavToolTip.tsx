import * as React from "react";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

// Define the prop type
type BasicTooltipProps = {
  type: "search" | "login"; // type can only be 'search' or 'login'
};

export default function NavToolTip({ type }: BasicTooltipProps) {
  const iconStyles = {
    default: {
      color: "#b3b3b3", // Default color
    },
    hover: {
      color: "white", // Hover color
    },
  };

  return (
    <Tooltip title={type === "search" ? "Search" : "Sign In"}>
      <IconButton>
        {type === "search" ? (
          <SearchRoundedIcon
            style={iconStyles.default}
            sx={{ "&:hover": iconStyles.hover }}
          />
        ) : (
          <LoginRoundedIcon
            style={iconStyles.default}
            sx={{ "&:hover": iconStyles.hover }}
          />
        )}
      </IconButton>
    </Tooltip>
  );
}
