import React from 'react'
import { useState } from 'react'
export default function Register() {
  const [data,setData] = useState({
    firstName: '',
    lastName:'',
    email: '',
    password: '',
  })
  const registerUser=(e)=>{
    e.preventDefault();

  }

  return (
    <div>
      <form onSubmit={registerUser}>
        <label>First Name</label>
        <input type = "Text" placeholder='Enter first name' value={data.firstName} onChange={(e) => setData({...data, firstName:e.target.value})} />
        <label>Last Name</label>
        <input type = "Text" placeholder='Enter last name' value={data.lastName} onChange={(e) => setData({...data, lastName:e.target.value})} />
        <label>Email</label>
        <input type = "email" placeholder='Enter email' value={data.email} onChange={ (e) => setData({...data,email:e.target.value})}/>
        <label>Password</label>
        <input type = "password" placeholder='Enter password' value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
        <button type = "submit">Register</button>
      </form>
    </div>
  )
}
