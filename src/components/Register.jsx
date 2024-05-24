import React, { useState } from 'react'

function Register() {
    
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [resMessage, setResMessage] = useState('')

    const submit = async (e) =>{
        e.preventDefault()
        
        try {
        const response = await fetch ('https://denisproj-b94c31275a95.herokuapp.com/users/register',{
            method:'POST',
            headers:{
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                username: username,
                password: password,
            }),
        })

        const data = await response.json()
        // console.log(data);
        setResMessage(`User ${data.username} sucessfully created !!`)
    } catch (error) {
        console.error(error);
    }
    }
    
    return (
            <div className="main">
                <form className="login" onSubmit={submit}>
                <h1>Register</h1>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="button-ball"></button>
                <p className="alert">{resMessage}</p>
            </form>
            </div>
        
    )
}

export default Register