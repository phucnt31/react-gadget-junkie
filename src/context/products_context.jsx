import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "../actions";

const initialState = {
  isSidebarOpen: false,
};

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductsContext.Provider value={{ ...state }}>
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
