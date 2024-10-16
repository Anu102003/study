import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import todoSlice from "../slices/todoSlice";

const  store=configureStore({
    reducer:{
        userInfoStore:userSlice,
        todoStore:todoSlice
    }
})

export default store
