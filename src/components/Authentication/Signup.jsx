import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
 

const Signup = () => 
    {

        const navigate = useNavigate();
     
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here (e.g., API call)
        console.log('Signup with:', username, password);
        const signupBody= {
              "username": username,
              "password": password
        }
        console.log(signupBody);
        axios.post("http://localhost:8080/api/auth/signup", signupBody).then((res)=>{
             console.log("Signup successfull: ",res.data);
             navigate("/login");
        }).catch((err)=>{
              console.log("Error unsuccesfull: ", err)
        })

    };

  return (
    <div>

            <h2>Signup</h2>
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
                <button type="submit">Signup</button>
            </form>
   
    </div>
  )
}

export default Signup
