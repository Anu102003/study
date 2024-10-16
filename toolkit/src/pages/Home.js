import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUsers } from '../slices/userSlice'

export const Home = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
    })
    const handelChange = (event) => {
        const { name, value } = event.target
        setFormData((currentValue) => {
            return {
                ...currentValue,
                [name]: value
            }
        })
    }
    const handleAdd = () => {
        dispatch(setUsers(formData))
        console.log(formData)
    }
    
    return (
        <div>Home
            <form>
                <div>
                    <label>Name:</label>
                    <input type='text' value={formData.name} name="name" onChange={handelChange} />
                </div>
                <div>
                    <label>Age:</label>
                    <input type='number' value={formData.age} name="age" onChange={handelChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type='email' value={formData.email} name="email" onChange={handelChange} />
                </div>
            </form>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}
