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
        <input type = "Text" placeholder='Enter first name' required value={data.firstName} onChange={(e) => setData({...data, firstName:e.target.value})} />
        <label>Last Name</label>
        <input type = "Text" placeholder='Enter last name' required value={data.lastName} onChange={(e) => setData({...data, lastName:e.target.value})} />
        <label>Email</label>
        <input type = "email" placeholder='Enter email' required value={data.email} onChange={ (e) => setData({...data,email:e.target.value})}/>
        <label>Password</label>
        <input type = "password" placeholder='Enter password' minLength="8" required value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
        <button type = "submit">Register</button>
      </form>
    </div>
  )
}
