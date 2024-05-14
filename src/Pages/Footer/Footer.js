import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHeartPulse, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className=' text-light footer'>
            <div className='bg-l'>
  <div class="row p-5">
    <div class="col text-start p-5">
    
    <h4> <FontAwesomeIcon className='fs-3' icon={faHeartPulse} /> Humankind Medicare</h4>
    <small>Health is not valued till sickness comes. Rest when you're weary. Refresh and renew yourself, your body, your mind, your spirit.</small>
    </div>
    <div class="col text-start p-5">
     <p><FontAwesomeIcon icon={faLocationDot} />  Dhaka, Bangladesh</p>
    <p><FontAwesomeIcon icon={faPhone} /> +08809475483</p>
    <p><FontAwesomeIcon icon={faEnvelope} /> humakind@gmail.com</p>
    </div>
    <div class="col text-start p-5">
    <p><FontAwesomeIcon icon={faFacebook} /> Facebook</p>
       <p> <FontAwesomeIcon icon={faTwitter} /> Twitter</p>
        
       <p> <FontAwesomeIcon icon={faYoutube} /> Youtube</p>
    </div>
  </div>
</div>
        
       
    <div>
    <p style={{backgroundColor: "rgb(55, 169, 204)"}}> This site made by Ajmiri Afrin © 2020 Copyright </p>
    </div>

       
  
  
  
        </div>
    );
};

export default Footer;