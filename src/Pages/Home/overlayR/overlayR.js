import React from 'react';
import './overlayR.css'
const overlayR = () => {
    return (
        
            <div  className="container2 ">
  <img src="images/overr.jpg" alt="Avatar" style={{borderRadius:"25px"}}  className="image1"/>
  <div className="overlay1" style={{borderRadius:"25px"}}>
    <div className="text1" > 
    <h8>Need an Emergency Help? CALL US!</h8> <br></br>
      <h5>+8801878180573</h5>
      <hr></hr>
      <small className='text-body-secondary px-2 text-light'>Health is not valued till sickness comes.<br></br> It is health that is real wealth and <br></br> not pieces of gold and silver.<br></br> Rest when you're weary. Refresh and renew <br></br>yourself, your body, your mind, your spirit.</small><br></br>
      <br></br>
      <br></br><button type="button" style={{backgroundColor: "rgb(55, 189, 230)"}} className="btn btn-sm text-light">Contact Us</button>
      </div>
  </div>
        </div>
    );
};

export default overlayR;