import React, { useState } from "react"
import "./login.css"
import axios from "axios"
//import { useHistory } from "react-router-dom"

const Login = ({ setLoginUser }) => {

    // const history = useHistory()
    const [showRegister, setShowRegister] = useState(true)

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
            .then(res => {
                alert(res.data.message)
                setLoginUser(res.data.user)
            })
    }

    return (
        
        <div className="login hero">
            <h2 className="text-blue-900 bg-white/50 indent-10 font-bold p-auto tracking-wider">Login Your Details</h2>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password" ></input>
            <a href="/"><button className="button bg-orange-500 hover:text-blue-900" onClick={login}>Login</button></a>
            <div>Not a Member? <a className="underline text-blue-500" href="">SignUp</a></div>
            
        
        
</div>

    )
}

export default Login;