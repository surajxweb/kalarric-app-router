"use client";

import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lime, purple, grey } from "@mui/material/colors";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import styles from "./FilterAndResults.module.css";
import StoreProducts from "./StoreProducts";
import Offers from "./Offers";

export default function FilterAndResults({ allProducts }: any) {
  const [checkboxes, setCheckboxes] = useState({
    tshirts: true,
    wallets: false,
  });
  const [productsToShow, setProductsToShow] = useState(allProducts || []);

  const handleCheckboxChange = (event: any) => {
    const checkboxName = event.target.name;
    const isChecked = event.target.checked;

    setCheckboxes({
      ...checkboxes,
      [checkboxName]: isChecked,
    });
  };

  useEffect(() => {
    setProductsToShow(
      checkboxes.tshirts
        ? checkboxes.wallets
          ? allProducts
          : allProducts.filter(
              (product: any) =>
                product.category.id === "cllyd3aeb0prh0aphuiym7aae"
            )
        : checkboxes.wallets
        ? allProducts.filter(
            (product: any) =>
              product.category.id === "cllyd12hb0pqe0aph15jqpws3"
          )
        : []
    );
  }, [checkboxes, allProducts]);

  const theme = createTheme({
    palette: {
      primary: lime,
      secondary: purple,
    },
  });

  return (
    <>
      <Offers />
      <div className={styles.container}>
        <div className={styles.filterContainer}>
          <div className={styles.heading}>Collections</div>
          <ThemeProvider theme={theme}>
            <FormControlLabel
              control={
                <Checkbox
                  name='tshirts'
                  checked={checkboxes.tshirts}
                  onChange={handleCheckboxChange}
                  color='primary'
                />
              }
              label='T-Shirts'
            />
            <FormControlLabel
              control={
                <Checkbox
                  name='wallets'
                  checked={checkboxes.wallets}
                  onChange={handleCheckboxChange}
                  color='primary'
                />
              }
              label='Wallets'
            />
          </ThemeProvider>
        </div>
        <StoreProducts productsToShow={productsToShow} />
      </div>
    </>
  );
}
