import React, { useEffect, useContext, useReducer, createContext } from "react";
import reducer from "../reducers/filter_reducer";
import { useProductsContext } from "./products_context";
import { LOAD_PRODUCTS } from "../actions";

const initialState = {
  filtered_products: [],
  all_products: [],
};

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useProductsContext();

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};