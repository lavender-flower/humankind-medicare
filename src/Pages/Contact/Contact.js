import React from 'react';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='text-secondary con-component'><br></br>
           <div className='p-5 oswald-font'>
   <div className='pt-5'>
    <div className='pt-5'>
        <div className='pt-5'> <div className='pt-5'><h1  className='pt-5 p-b text-light'>Personalized Care, Trusted Expertise: Humankind Medicare Unraveled</h1></div></div></div></div> </div>
           
  <div className="row p-5 text-light">
    <div style={{borderRadius:"50px 20px"}} className="col zoom bg-ap p-3 mx-3">
    <div className="row">
    <div className="col-4"> <FontAwesomeIcon style={{fontSize:"60px"}} className='py-5' icon={faLocationDot} />
   </div>
    <div className="col-8 py-3 text-start"> <p>Address:</p>
    <p>1202 Badda </p>
    <p>Dhaka Bangladesh</p></div>
  </div>
   
    </div>
    <div style={{borderRadius:"50px 20px"}} className="col zoom bg-ap p-3 mx-4">
    <div className="row">
    <div className="col-4"> <FontAwesomeIcon  style={{fontSize:"60px"}} className='py-5' icon={faPhone} /></div>
    <div className="col-8 py-3 text-start">  <p>Phone:</p>
<p>(629) 555-0129</p>
<p>(629) 555-0130</p></div>
  </div>
   
  
    </div>
    <div style={{borderRadius:"50px 20px"}} className="col zoom p-3 bg-ap mx-3">
    <div className="row">
    <div className="col-4">  <FontAwesomeIcon  style={{fontSize:"60px"}} className='py-5' icon={faEnvelope} /></div>
    <div className="col-8 py-3 text-start">
        <p>Email:</p>
        <p>hm1@gmail.com</p>
        <p>hm2@gmail.com</p>
    </div>
  </div>
  

    </div>
  </div>

  <div className="row p-5">
    <div className="col-4"><img src='./images/contact.jpg'  style={{borderRadius:"25px"}} ></img></div>
    <div className="col-8 text-start">
    <form>
  <div className="mb-3">
    <label for="exampleInputName" className="form-label fs-3">Name</label>
    <input type="Text" className="form-control" id="exampleInputName"/>
    
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label fs-3">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputName" className="form-label fs-3">Write Comments</label>
    <input type="text" className="form-control" id=""/>
  </div>


  <Link className='text-decoration-none text-light' to='/login'><button type="submit" className="btn bg-ap text-light">Submit</button></Link>
</form>
    </div>
  </div>
</div>
    
    );
};

export default Contact;