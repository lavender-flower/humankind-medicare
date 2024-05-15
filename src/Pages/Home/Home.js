import React from 'react';
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHospital,faTruckMedical, faBedPulse, faHandsHoldingChild, faHouseMedicalCircleCheck, faUserDoctor, faIdCard} from '@fortawesome/free-solid-svg-icons';
import Overlayp from './Overlayp';
import OverlayR from './overlayR/overlayR';
import { Link } from 'react-router-dom';



const Home = () => {
    
    return (
        <div className='home-component'>

<div className='p-co'>
    <h1 className='blu-color oswald-font zoom'>GETTING YOU BACK TO BETTER.</h1>
    <small className='text-light oswald-font bg-l-blu'>Have saw replenish saw made bring creature whales darkness evening.</small>
</div>

<div className='bg-ap m-co p-4 text-light zoom-c'>
<div className="container">
  <div className="row">
    <div className="col text-start p-0">
      <h2 className=' oswald-font zoom'>MAKE AN</h2>
      <h2 className=' oswald-font zoom'>APPOINTMENT</h2>
      <hr></hr>
      <small className='oswald-font'>A Specialist will contact you shortly</small>

    </div>
    <div class="col">
    <div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-sm">Your Name</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
</div>
<div class="input-group-sm mb-3">
  
  <select class="form-select" id="inputGroupSelect01">
    <option selected>Choose Services...</option>
    <option value="1">Medicine</option>
    <option value="2">Eye Specialist</option>
    <option value="3">Diagnostic center</option>
    <option value="4">Dentist</option>
    <option value="5">Cardiologists</option>
    <option value="6">Gynecologist</option>
    <option value="7">Oncologist</option>
    <option value="8">Dermatologist</option>
    <option value="9">Gastroenterologist</option>
    <option value="10">Neurologist</option>

  </select>
</div>

    </div>
    <div class="col">
    <div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-sm">Your Email</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
</div>
<div>

  <input className='form-control p-1' type="date" id="date" name="date"/>


</div>
<div className='text-end pt-4'><Link className='text-decoration-none text-light' to='/login'> <button type="submit" class="btn btn-outline-light btn-sm"><small>Book Appointment</small></button></Link>
 
  </div>
    </div>
  </div>
</div>
</div>

<div className='m-co pt-5'>
<div class="row text-secondary">
    <div class="col-8 text-start pe-3">
      <h2 className='oswald-font cover-name text-secondary'>THE RIGHT CARE. RIGHT NOW.</h2>
      <p className='text-secondary'>A physician is obligated to consider more than a diseased organ, more than even the whole man—he must view the man in his world.” “Sometimes I inspire my patients; more often they inspire me.” “As a nurse, we have the opportunity to heal the heart, mind, soul and body of our patients, their families and ourselves.</p>
   <p className='text-secondary'>The key to a healthy life is having a healthy mind.” “Your illness is not your identity. Your chemistry is not your character.” “Wellness is the complete integration of body, mind, and spirit</p> 
   <div>
  <div class="row pt-4">
    <div class="col text-center zoom-c">
    <FontAwesomeIcon className='b-color fs-3' icon={faUserDoctor} />
    <p ><span className='text-danger fs-2 zoom'>200+</span> Doctors</p>
    
    </div>
    <div class="col text-center zoom-c">
    <FontAwesomeIcon className='b-color fs-3' icon={faTruckMedical} />
    <p ><span className='text-danger fs-2 zoom'>100+</span> Ambulances</p>
    
    </div>
    <div class="col text-center zoom-c">
    <FontAwesomeIcon className='b-color fs-3' icon={faBedPulse} />
    <p ><span className='text-danger fs-2'>500+<br></br></span> Beds </p>
    
    </div>
    <div class="col text-center zoom-c">
    <FontAwesomeIcon className=' b-color fs-3' icon={faIdCard} />
    <p ><span className='text-danger fs-2'>600+</span><br></br>Members</p>
    
    </div>

  </div>
</div>
   </div>
    <div class="col-4 oswald-font">
    <OverlayR></OverlayR>
      {/* <h8>Need an Emergency Help? CALL US!</h8> <br></br>
      <h5 className='zoom'>+8801878180573</h5>
      <hr></hr>
      <small className='text-body-secondary'>Health is not valued till sickness comes. It is health that is real wealth and not pieces of gold and silver. Rest when you're weary. Refresh and renew yourself, your body, your mind, your spirit.</small><br></br>
      <small className='text-body-secondary'>Health is a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity.</small><br></br>
      <br></br><button type="button" style={{backgroundColor: "rgb(55, 189, 230)"}} className="btn btn-sm text-light">Contact Us</button>
       */}
    </div>
  </div>
</div>


<Overlayp></Overlayp>

<div style={{marginLeft: "200px",
  marginRight:"200px"
}} className="row row-cols-1 row-cols-md-3 g-4 p-5 m-card">
  <div class="col zoom">
    <div class="card h-100">
      <img src="images\doctor.PNG" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title" style={{color: "rgb(55, 189, 230)"}}>The Doctors</h5>
        <p class="card-text text-secondary">
        Small helpings. Sample a little bit of everything. These are the secrets of happiness and good health.Your body hears everything your mind says.</p>
        <a href="#" style={{backgroundColor: "rgb(55, 189, 230)"}} class="btn btn-primary">watch video</a>
      </div>
    </div>
  </div>
  <div class="col zoom">
    <div class="card h-100">
      <img src="images\happyPatient.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 style={{color: "rgb(55, 189, 230)"}} class="card-title">Happy Patient</h5>
        <p class="card-text text-secondary">Our bodies are our gardens our wills are our gardeners. So we need well services</p>
        <a href="#" style={{backgroundColor: "rgb(55, 189, 230)"}} class="btn btn-primary">watch video</a>
      </div>
    </div>
  </div>
  <div class="col zoom">
    <div class="card h-100">
      <img src="images\happyEnvi.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 style={{color: "rgb(55, 189, 230)"}} class="card-title">The Environment</h5>
        <p class="card-text text-secondary">
  First priority.Mental and physical health .Focus on your health, your mission, and your people. That’s it.
How to be physically & mentally healthy?</p>
        <a href="#" style={{backgroundColor: "rgb(55, 189, 230)"}} class="btn btn-primary">watch video</a>
      </div>
    </div>
  </div>

</div>

        </div>
    );
};

export default Home;