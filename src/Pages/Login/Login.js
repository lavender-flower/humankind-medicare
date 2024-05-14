import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const{signInUsingGoogle}=useAuth();
    return (
        <div className='py-5'>
            <br></br>
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle} className='btn btn-warning'>Google Sign in</button>
            
            <br></br>
        </div>
    );
};

export default Login;