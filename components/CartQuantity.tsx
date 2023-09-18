import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux"; // Import the necessary hooks
import { updateCartItemQuantity } from "@/redux/features/auth-slice"; // Import the action

export default function CartQuantity({
  qty,
  cartID,
}: {
  qty: number;
  cartID: string;
}) {
  const dispatch = useDispatch<AppDispatch>(); // Get the dispatch function

  const handleQuantityChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const newQuantity = Number(event.target.value);
    dispatch(updateCartItemQuantity({ cartID, quantity: newQuantity })); // Dispatch the action
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant='standard' htmlFor='uncontrolled-native'>
          Quantity
        </InputLabel>
        <NativeSelect
          defaultValue={qty}
          onChange={handleQuantityChange} // Call the handler when the value changes
          inputProps={{
            name: "quantity",
            id: "uncontrolled-native",
          }}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
          <option value={13}>13</option>
          <option value={14}>14</option>
          <option value={15}>15</option>
          <option value={16}>16</option>
          <option value={17}>17</option>
          <option value={18}>18</option>
          <option value={19}>19</option>
          <option value={20}>20</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
