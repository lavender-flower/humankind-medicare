import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { getAuth,createUserWithEmailAndPassword} from 'firebase/auth';

const Login = () => {
    const auth=getAuth();

    const {signInUsingGoogle}=useAuth();

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [displayName,setDisplayName]=useState('');

const handleDisplaynameChange=e=>{
setDisplayName(e.target.value);
}
    const handlePasswordChange=e=>{
        setPassword(e.target.value);
    }
    const handleEmailChange=e=>{
setEmail(e.target.value);
    }
    const handleRegistration=e=>{
        console.log(email,displayName,password);
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            return{user}
        })
        e.preventDefault();
        e.target.reset();

    }

    return (
        <div className='py-5'>

            <div className='row p-5'>
            
               
            <div className="col-lg-4 p-5 text-start"><img src='./images/logins.jpg'  style={{borderRadius:"25px",width:"30vw"}} ></img></div>
         <div className='col-lg-8 p-5 text-start'>
         <h3>Please Register </h3>
<form className='text-start'  onSubmit={handleRegistration}>
    
               
                <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Enter Your Name</label>
    <input required onBlur={handleDisplaynameChange} type="text" className="form-control"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input required onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
  <label htmlFor="inputPassword5" className="form-label">Enter Password</label>
<input required type="password" onBlur={handlePasswordChange} id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock"/>
<div id="passwordHelpBlock" className="form-text">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</div>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" value="submit" className="btn btn-sm btn-warning">Register</button>
  
</form>
<p className='text-start'>or, Do you have Google Account to login? </p> 
<div className='text-start'><button onClick={signInUsingGoogle} className='btn btn-sm btn-warning'>Google Sign In</button></div>
                </div>
     
            </div>
            <br></br>

            
            
        </div>
    );
  
};

export default Login;