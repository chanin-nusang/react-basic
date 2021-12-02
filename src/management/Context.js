import { createContext, useContext, useReducer } from "react";
import CartData from "../data/CartData";
import Reducer from "./Reducer";
const initState = {
  cart: CartData,
  total: 0,
  amount: 0,
};
const CartContext = createContext();
export const MyCartContext = () => {
  return useContext(CartContext);
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initState);
  return (
    <CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>
  );
};
export { CartContext, CartProvider };
