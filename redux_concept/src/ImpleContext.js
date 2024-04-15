import React, { useContext } from 'react';
import CreateContext from './CreateContext';

const ImpleContext = () => {
  const contextValue = useContext(CreateContext);

  return (
    <div>
      <p>Implement Component: {contextValue.age}</p>
    </div>
  );
};

export default ImpleContext;
