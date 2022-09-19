import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import logo from '../../images/logo.png'
import './Login.css'

const Login = () => {
  const [credentials,setCredentials]=useState({
    email:'',
    password:''
  });
  const handleLOnchange = e =>{
    setCredentials((pre)=>({...pre,[e.target.name]:e.target.value}))
  };
  const handleLogin = e =>{
    e.preventDefault();
  }
    return (
        <div>
            <Navbar/>
            <div className='loginContainer' >
            
                <img className='loginImg' src={logo}/>
                
                 <div className='loginWrapper'>
                   <div className='loginHeader'>
                   <h2>Login With</h2>
                   </div>
                   <div className='loginInput'>
                     <div className='loginInputFiel'>
                       <input name='email' onChange={handleLOnchange } className='loginInputField' type="email" placeholder="email"/>
                         <br/>
                        <input name='password' onChange={handleLOnchange } className='loginInputField' type="password" placeholder="password"/>
                        <br/>
                       </div>
                    
                      <button onClick={handleLogin} className='loginInputField'>Submit</button>
                   </div>
                   <div className='loginLink'>
                    <p>Don't have an accont?<Link to="/register"><span className='loginSpan'>Create an account</span></Link></p>
                   </div>
                   
                 </div>

        </div>
    </div>
    );
};

export default Login;