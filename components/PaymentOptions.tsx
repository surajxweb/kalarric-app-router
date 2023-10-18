import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import styles from "./PaymentOptions.module.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { lime, purple, grey } from "@mui/material/colors";

export default function PaymentOptions({
  paymentOption,
  setPaymentOption,
}: {
  paymentOption: string;
  setPaymentOption: any;
}) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentOption((event.target as HTMLInputElement).value);
  };

  const theme = createTheme({
    typography: {
      fontFamily: ["inherit"].join(","),
    },
    palette: {
      primary: grey,
      secondary: purple,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <FormControl>
        <FormLabel id='demo-controlled-radio-buttons-group'></FormLabel>
        <RadioGroup
          row
          aria-labelledby='demo-controlled-radio-buttons-group'
          name='controlled-radio-buttons-group'
          value={paymentOption}
          onChange={handleChange}
        >
          <FormControlLabel
            value='ccdc'
            control={<Radio />}
            label='Credit/Debit Card'
          />
          <FormControlLabel
            value='cod'
            control={<Radio />}
            label='Cash on Delivery'
          />
        </RadioGroup>
        {paymentOption === "ccdc" && (
          <div className={styles.paymentInfo}>
            We support all Visa, MasterCard and American Express Cards, and we
            are constantly adding more methods of payment.
          </div>
        )}
        {paymentOption === "cod" && (
          <div className={styles.paymentInfo}>
            A 25 ₹ Cash on Delivery charge, collected by the courier company,
            will be added to the bill. We offer free delivery on all prepaid
            orders over ₹ 999.
          </div>
        )}
      </FormControl>
    </ThemeProvider>
  );
}
