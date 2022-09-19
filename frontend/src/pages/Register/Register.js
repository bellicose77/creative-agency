import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
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
                        <input type="text"/>
                        <br/>
                        <lable>Email: </lable>
                        <input type="email"/>
                        <br/>
                        <lable>Password: </lable>
                        <input type="password"/>
                        <br/>
                        <lable>Admin: </lable>
                        <input type="Boolean"/>
                         
                    </form>
                    <button>Submit</button>
                    <p>Already have an account?<Link to='/login'><span>SignIn</span></Link></p>
                </div>

            </div>

           </div>
        </div>
    );
};

export default Register;