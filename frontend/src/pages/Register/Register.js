import React from 'react';

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
                        <lable>Email: </lable>
                        <input type="email"/>
                        <lable>Password: </lable>
                        <input type="password"/>
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