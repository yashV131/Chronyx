import { useState } from "react"
export default function Login() {
    const[data,setData] = useState({
        email:'',
        password:'',
    })
    const loginUser = (e) =>
    {
        e.preventDefault();
    }
  return (
    <div>
      <form onSubmit = {loginUser}>
        <label>
          <span>Email</span>
          <input type = "email" placeholder = "Enter email" required value ={data.email} onChange={(e) => setData({...data, email:e.target.value})}/>
        </label>
        <label>
          <span>Password</span>
          <input type = "password" placeholder = "Enter password" minLength="8" required value= {data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
        </label>
        <button type= "submit">Login</button>
      </form>
    </div>
  )
}
