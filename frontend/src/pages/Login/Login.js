import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import logo from '../../images/logo.png'
import './Login.css'

const Login = () => {
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
                       <input className='loginInputField' type="text" placeholder="email"/>
                         <br/>
                        <input className='loginInputField' type="password" placeholder="password"/>
                        <br/>
                       </div>
                    
                      <button className='loginInputField'>Submit</button>
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