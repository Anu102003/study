import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    users:[],
}

export const userSlice=createSlice({
    name:"userSlice",
    initialState,
    reducers:{
        setUsers:(state,action)=>{
            state.users=[...state.users,action.payload]
        },
        deleteUsers:(state,action)=>{
            state.users=state.users.filter((user,index)=>index!=action.payload)
        },
        updateUser: (state, action) => {
            const { index, updatedUser } = action.payload;
            if (index >= 0 && index < state.users.length) {
                if (index >= 0 && index < state.users.length) {
                    state.users[index] = { ...state.users[index], ...updatedUser };                  }
            }
          },
    }
})

export const {setUsers,deleteUsers, updateUser}=userSlice.actions

export default userSlice.reducer
