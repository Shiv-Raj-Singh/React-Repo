import React, { useState } from 'react';
import "../Form.css"
const ToUpperCase = ()=>{
    const [user , setUser] = useState({
        name : "",
        phone : "",
        email : ""
    })
    // const [text2 , setText2] = useState('')

    const onChangeData = (e)=>{
        // console.log(e)
       let f_name = (e.target.name)
       let val = (e.target.value)
       setUser({...user , [f_name]:val})
    }

    const onclickButton = ()=>{
        console.log('clicked Successfully');
        console.log(user);
        
    }
    // console.log(user);
    return (
        <div>
            
            <h1>How are Doing</h1>
            <form action="Gff" className="userform">

            <label htmlFor="username">Enter your Name</label>
            <input type="text" onChange={onChangeData} name='name' value={user.name} required /> <br />
            {/* <label htmlFor="phone">Enter your phone </label>
            <input type="number" onChange={onChangeData} name='phone' value={user.phone}  required /><br />
            <label htmlFor="email">Enter your email</label>
            <input type="email" name='email' value={user.email} onChange={onChangeData} required /><br /> */}
            <button onClick={onclickButton}>Submit </button>

        </form>
        <h1>how Are you </h1>
        </div>
    )
}

export default ToUpperCase