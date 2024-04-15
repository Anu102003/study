import React, { useContext } from 'react';
import CreateContext from './CreateContext';

const ImpleContext2 = () => {
  const contextValue = useContext(CreateContext);

  return (
    <div>
      <p>Implement Component2: {contextValue.skill}</p>
    </div>
  );
};

export default ImpleContext2;