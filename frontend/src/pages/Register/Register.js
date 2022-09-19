import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const [data,setData] = useState({
        username:'',
        email:'',
        password:'',
        isAdmin:false
    });
    const handleOnchange = (e) =>{
        const nameValue = e.target.name;
        setData((pre)=>({...pre,[nameValue]:e.target.value}));
    }
    //console.log(data)

    const handleRegister = (e)=>{
        console.log(data)
        e.preventDefault();

    }
    return (
        <div>
           <div className='regContainer'>
            <div className='regWrapper'>
                <div className='regHeader'>
                 <h2>Register here</h2>
                </div>
                <div className='regForm'>
                    <form className='regFormInp'>
                        <lable>Name: </lable>
                        <input name='username' onChange={handleOnchange} type="text"/>
                        <br/>
                        <lable>Email: </lable>
                        <input name='email' onChange={handleOnchange} type="email"/>
                        <br/>
                        <lable>Password: </lable>
                        <input name='password' onChange={handleOnchange} type="password"/>
                        <br/>
                        <lable>Admin: </lable>
                        <input name='isAdmin' onChange={handleOnchange} type="Boolean"/>
                         
                    </form>
                    <button onClick={handleRegister}>Submit</button>
                    <p>Already have an account?<Link to='/login'><span>SignIn</span></Link></p>
                </div>

            </div>

           </div>
        </div>
    );
};

export default Register;