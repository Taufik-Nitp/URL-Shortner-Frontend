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
        console.log('Signup with:', username, password);
    
        const signupBody = {
            username: username,
            password: password
        };
    
        axios.post("http://localhost:8080/api/auth/signup", signupBody)
            .then((res) => {
                console.log("Signup successful: ", res.data);
                navigate("/login");
            })
            .catch((err) => {
                if (err.response) {
                    const status = err.response.status;
                    const message = err.response.data;
    
                    if (status === 409) {
                        alert("Username already exists. Please choose another.");
                    } else if (status === 503) {
                        alert("Server is currently unavailable. Please try again later.");
                    } else if (status === 500) {
                        alert("An unexpected error occurred. Please try again.");
                    } else {
                        alert("Signup failed: " + message);
                    }
    
                    console.error("Signup error:", status, message);
                } else if (err.request) {
                    // Request was made but no response (e.g., server is down)
                    alert("Unable to connect to the server. Please check your network.");
                    console.error("No response from server:", err.request);
                } else {
                    // Something else happened setting up the request
                    alert("Signup error: " + err.message);
                    console.error("Error:", err.message);
                }
            });
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
