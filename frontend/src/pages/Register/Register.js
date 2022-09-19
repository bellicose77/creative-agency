import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import './Register.css'

const Register = () => {
    const [data,setData] = useState({
        username:'',
        email:'',
        password:'',
        isAdmin:false
    });
    const navigate = useNavigate()
    const handleOnchange = (e) =>{
        const nameValue = e.target.name;
        setData((pre)=>({...pre,[nameValue]:e.target.value}));
    }
    //console.log(data)

    const handleRegister = async(e)=>{
        //console.log(data)
        e.preventDefault();
        try{
            const res = await axios.post('http://localhost:8000/api/auth/register',data)
            navigate('/login');

        }catch(err){

        }

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