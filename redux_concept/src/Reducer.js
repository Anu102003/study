import React, { useReducer } from 'react'
const initialValue={
    count:0
}
const reducer=(state,action)=>{
    switch(action.type){
        case "INCREMENT":
            return {count:state.count+1}
        case "DECREMENT":
            return {count:state.count-1}
        case "RESET":
            return{count:0}
        default:
          return state;
    }
}
export const Reducer = () => {
   
    const [state,dispatch]=useReducer(reducer,initialValue);
  return (
    <>
    <h1>Count:{state.count}</h1>
    <button onClick={()=>dispatch({type:"INCREMENT"})}>ADD</button>
    <button onClick={()=>dispatch({type:"DECREMENT"})}>SUB</button>
    <button onClick={()=>dispatch({type:"RESET"})}>RESET</button>
    </>
  )
}
