import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
 

const Login = () => {
     
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate= useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here (e.g., API call)
        console.log('Signup with:', username, password);
        const signupBody= {
              "username": username,
              "password": password
        }
        console.log(signupBody);
        axios.post("http://localhost:8080/api/auth/signin", signupBody, {withCredentials: true}).then((res)=>{
             console.log("Login successfull, token:  ",res.data.token);
            //  localStorage.setItem("jwttoken",res.data.token);
             navigate("/");
        }).catch((err)=>{
              console.log("Error unsuccesfull: ", err)
              alert("Wrong Credentials... Try again")
        })

    };

  return (
    <div>

            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>

            <h2>Not registered?</h2>
             <button onClick={()=>navigate("/signup")}>Create Account</button>
   
    </div>
  )
}

export default Login
