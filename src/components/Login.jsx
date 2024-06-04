import React, { useState, useContext } from 'react'
import { AuthContext } from './AuthContext'


function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [resMessage, setResMessage] = useState('')
    const {login} = useContext(AuthContext)

    const submit = async (e) => {
        e.preventDefault()
        
        try {
            const response = await fetch ('https://denisproj-b94c31275a95.herokuapp.com/users/login',{
            method:'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        })
        
        const data = await response.json()
        // console.log(data)
        if (response.ok) {
                login(data)
                setResMessage(`Sucessfully logged in as ${data.username} !!`)
            }
        else{
            setResMessage(`Login failed: ${data.error}`)
        }
    } catch (error) {
            console.error(error);
            setResMessage('Error fetching data')
        }
    }

    return (
            <div className="main">
                <form className="login" onSubmit={submit}>
                <h1>Login</h1>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="button-ball"></button>
                <p className="alert">{resMessage}</p>
            </form>
            </div>
    )
}

export default Login