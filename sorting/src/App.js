

// App.js
import React from 'react';
import { SortFilterProvider } from './SortFilterContext';
import ProductList from './ProductList';
// import Sample from "./s"
const App = () => {
  return (
    <>
    {/* <Sample/> */}
    <SortFilterProvider>
      <div>
        <ProductList />
      </div>
    </SortFilterProvider>
    </>
  );
};

export default App;
