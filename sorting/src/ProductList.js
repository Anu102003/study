// ProductList.js
import React from 'react';
import { useSortFilter } from './SortFilterContext';
import products from './data';
const ProductList = () => {
  const { state, dispatch } = useSortFilter();

  const handleSortChange = (event) => {
    dispatch({ type: 'SET_SORT', payload: event.target.value });
  };


  // Filter and sort products based on state
  // const filteredProducts = state.products.filter((product) => product.rating >= state.filterByRating);
  const filteredProducts = products.filter((product) => product.newPrice);
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (state.sortBy === 'newPrice') {
      return b.newPrice - a.newPrice;
    }else if (state.sortBy === 'low') {
      return a.newPrice - b.newPrice;
    } 
    else if (state.sortBy === 'reviews') {
      return b.reviews - a.reviews;
    }else if (state.sortBy === 'rating') {
      return b.rating - a.rating;
    }
  });
  return (
    <div>
      <div>
        <label>Sort By:</label>
        <select value={state.sortBy} onChange={handleSortChange}>
          <option value="newPrice">Price (high - low)</option>
          <option value="low">Price (low - high)</option>
          <option value="reviews">reviews</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      <ul>
        {sortedProducts.map((product) => (
          <li key={product.id}>
            <img src={product.img} height="100px"></img><br></br><br></br>
            <h2>Price: ${product.newPrice} | Reviews: {product.reviews} | Rating: {product.rating} star</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
