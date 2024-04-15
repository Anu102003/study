import React, { createContext, useContext, useReducer } from 'react';
import products from './data'
const SortFilterContext = createContext();

const initialState = {
  products:products,
  sortBy: 'newPrice',
  filterByReviews:'reviews',
  filterByRating: 'rating',
};


const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SORT':
      return { ...state, sortBy: action.payload };
      case 'SET_FILTER_REVIEWS':
      return { ...state, filterByReviews: action.payload };
    case 'SET_FILTER_RATING':
      return { ...state, filterByRating: action.payload };
    default:
      return state;
  }
};

const SortFilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SortFilterContext.Provider value={{ state, dispatch }}>
      {children}
    </SortFilterContext.Provider>
  );
};

const useSortFilter = () => {
  const context = useContext(SortFilterContext);
  if (!context) {
    throw new Error('useSortFilter must be used within a SortFilterProvider');
  }
  return context;
};

export { SortFilterProvider, useSortFilter };
