import React from 'react';
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
                    <form>
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
                </div>

            </div>

           </div>
        </div>
    );
};

export default Register;