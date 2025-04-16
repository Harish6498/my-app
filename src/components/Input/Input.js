import React, { useState } from 'react'

export default function Input() {
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    function getUserName(event){
        console.log(event.target.value)
        setUserName(event.target.value)
    }
    function getPassword(event){
        console.log(event.target.value)
        setPassword(event.target.value)
    }
    // function getDetailes(){

    // }
  return (
    
    <div>
        <h2>this is input value</h2>
        {/* {userName}
        {password} */}
        <label>UserName</label>
        <input type="text" onChange={getUserName}/>
        <label>password</label>
        <input type="password" onChange={getPassword}/>
        {/* <button onClick={getDetailes}>submit</button> */}

    </div>
  )
}
