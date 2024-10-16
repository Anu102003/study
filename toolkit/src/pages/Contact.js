import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUsers, updateUser } from '../slices/userSlice'
import { Home } from './Home'

export const Contact = () => {
    const user = useSelector((state) => state.userInfoStore.users)
    const dispatch = useDispatch()
    const handleDelete = (index) => {
        dispatch(deleteUsers(index))
    }
    const handleUpdateUser = () => {
        const userIndex = 0; 
        const updatedUserData = {
          name: 'Ua Name',
          email: 'email@example.com',
        //   age:"update23"
        };
    
        dispatch(updateUser({ index: userIndex, updatedUser: updatedUserData }));
        console.log("updated")

      };
    console.log(user)
    return (
        <div>
            {
                user && user.map((val,index) => (
                    <div key={index}>
                        <h1>------------------</h1>
                        <h4>{val.name}</h4>
                        <h4>{val.age}</h4>
                        <h4>{val.email}</h4>
                        <button onClick={()=>{handleDelete(index)}}>Delete</button>
                        <button onClick={handleUpdateUser}>Updated</button>

                    </div>
                ))
            }</div>
    )
}
