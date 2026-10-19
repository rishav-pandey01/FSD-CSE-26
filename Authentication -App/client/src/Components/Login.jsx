import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {

    const [uname,setUname] = useState('');
    const[pass,setPass] = useState('');
    const [message,setMessage] = useState('');
    const navigate = useNavigate();
    function handleReset(){
        setUname('');
        setPass('');
        setMessage('');
    }
    function handleLogin(e){
        e.preventDefault();
        if(uname === 'admin' && pass === "manager"){
            navigate('/user')
        }
        else{
            setMessage("Error: check credentials")
            navigate('/')
        }
    }

  return (
    <div className='login'>
        <div className='card'>
            <h1>Login Page</h1>
            <h2 style={{ color: 'red' }}>{message}</h2>
            <form onSubmit={handleLogin}>
                Username:<input type="text" value={uname} placeholder='Enter Username' onChange={(e)=>setUname(e.target.value)}/><br/>
                Password:<input type="password" value={pass} placeholder='Enter Password' onChange={(e)=>setPass(e.target.value)}/><br/>
                <button >Login</button>
                <button onClick={handleReset}>Reset</button>
                
            </form>
      
    </div>
    </div>
  )
}

export default Login
