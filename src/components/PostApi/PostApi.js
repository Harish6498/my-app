import React, { useState } from 'react'
import axios from 'axios';
export default function PostApi() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [data,setData]=useState([]);
    function getUserName(event) {
        console.log(event.target.value)
        setUserName(event.target.value)
    }
    function getPassword(event) {
        console.log(event.target.value)
        setPassword(event.target.value)
    }
    function getDetailes() {
        getData()
        console.log(userName, password)

    }
    async function getData() {
        const response = await axios.post("https://api.escuelajs.co/api/v1/auth/login", {
            email: userName,
            password: password
        })
        setData(response.data)

    }
    return (
        <>
            <h2>this is input value</h2>

            <label>UserName</label>
            <input type="text" onChange={getUserName} />
            <label>password</label>
            <input type="password" onChange={getPassword} />
            <button onClick={getDetailes}>submit</button>

        </>
    )
}





