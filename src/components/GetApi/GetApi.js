import React, { useState } from 'react';
import axios from 'axios';

export default function GetApi() {const [userName, setUserName] = useState("");
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
        const response = await axios.get("https://api.escuelajs.co/api/v1/products")
        setData(response.data)
        console.log(data)

    }
    return (
        <>
            <h2>{data[0].title}</h2>

            <label>UserName</label>
            <input type="text" onChange={getUserName} />
            <label>password</label>
            <input type="password" onChange={getPassword} />
            <button onClick={getDetailes}>submit</button>
    </>
  )
}
