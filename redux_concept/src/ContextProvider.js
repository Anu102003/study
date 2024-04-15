import React, { useContext } from 'react';
import CreateContext from './CreateContext';
import ImpleContext from './ImpleContext';
import ImpleContext2 from './ImpleContext2';

const MyComponent = () => {
  const contextValue = useContext(CreateContext);

  return (
    <div>
      <p>Context Value: {contextValue.name}</p>
    </div>
  );
};

const ContextProvider = () => {
  const contextValue = {
    name:"Anu",
    age:"21",
    skill:"React"
  }

  return (
    <CreateContext.Provider value={contextValue}>
      <div>
        <h1>My App</h1>
        <MyComponent />
        <ImpleContext/>
        <ImpleContext2/>
      </div>
    </CreateContext.Provider>
  );
};

export default ContextProvider;
