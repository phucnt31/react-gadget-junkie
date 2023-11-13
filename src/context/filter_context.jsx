import React, { useEffect, useContext, useReducer, createContext } from "react";
import reducer from "../reducers/filter_reducer";
import { useProductsContext } from "./products_context";
import { LOAD_PRODUCTS, SET_GRID_VIEW, SET_LIST_VIEW } from "../actions";

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
};

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useProductsContext();

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  const setGridView = () => {
    dispatch({ type: SET_GRID_VIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LIST_VIEW });
  };

  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView }}>
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
