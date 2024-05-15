import React from 'react';
import './Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDroplet, faPeopleGroup, faStethoscope, faSyringe, faTruckMedical } from '@fortawesome/free-solid-svg-icons';
const Services = () => {
    return (
        <div className='oswald-font'>
            <div class="container-service">
  <img src="images/department.png" alt="Avatar" class="image-service"/>
  <div class="overlay-service">
    <div class="text-service"><h1>Our Medical Service</h1><br></br><p>
We're different from typical health checkup center. We're out to create magic. The goal is to WOW you with outstanding treatment.</p><button type="button" style={{ backgroundColor:"rgb(235, 84, 84)"}} class="btn text-light">Watch Timetable</button></div>
  </div>
</div>

<div className='p-5 oswald-font m-5'>
  <h1 className='text-secondary'>WHAT DO YOU NEED?</h1>
  <p style={{color:"rgb(235, 84, 84)"}}>We Provide various kind of services. For learning more contact with us.</p>
  <hr className='bg-ap'></hr>

  <div class="row">
    <div className="col bg-ap zoom py-5 mx-3 text-light">
      <h1><FontAwesomeIcon icon={faTruckMedical} /></h1>
   <p>Emergency Ambulance</p>
    </div>
    <div class="col bg-ap zoom py-5 mx-3 text-light">
      <h1><FontAwesomeIcon icon={faHandHoldingDroplet} /></h1>
  <p>Pharmacy Services $ Blood Bank</p>
    </div>
    <div class="col bg-ap zoom py-5 mx-3 text-light">
      <h1><FontAwesomeIcon icon={faPeopleGroup} /></h1>
  <p>Diabetes Services & Holter Monitoring</p>
  </div>
  <div class="col bg-ap zoom py-5 mx-3 text-light">
    <h1><FontAwesomeIcon icon={faStethoscope} /></h1>
  <p>Consultation & Prescription Reminders</p>
  </div>
  <div class="col bg-ap zoom py-5 mx-3 text-light">
    <h1><FontAwesomeIcon icon={faSyringe} /></h1>
  <p>Vaccines & Immunizations </p>
  </div>

  </div>
  
</div>

<div class="container pb-5">
  <h1 className='oswald-font text-secondary'>Latest News, Updates & Blogs</h1><hr></hr>
  <div class="row ">
    <div class="col pt-5 p-3 mx-3 bg-photo1 zoom">
    <p className='text-light text-start b-p'>Patient Care Customer Spotlight: Dr. Jessica</p>
    </div>
    <div class="col pt-5 p-3 mx-3 bg-photo2 zoom">
  <p className='text-light text-start b-p'>Special visit premiums with insights into billing best practices and frequently occurring errors.</p>
    </div>
    <div class="col pt-5 p-3 mx-3 bg-photo3 zoom">
    <p className='text-light text-start b-p'>DoctorCare Welcomes Trillium Medical Billing, Expanding Medical Billing Services and Solutions to Ontario Specialists</p>
    </div>
    <div class="col pt-5 p-3 mx-3 bg-photo4 zoom">
    <p className='text-light text-start b-p'>Physicians working in fast-paced Emergency departments across Ontario often need help managing billing effectively. </p>
    </div>
  </div>
</div>

<div class="container">
  <div class="row text-secondary">
    <div class="col mx-3">
  <h3 className='py-2'>  Free Shipping</h3>
<p>How to take advantage of our Free Standard Shipping</p>
<hr></hr>
    </div>
    <div class="col">
      <h3 className='py-2'>Locations
</h3><p>Find a Store Near You. View more contact information</p><hr></hr>
    </div>
    <div class="col">
<h3 className='py-2'>    Support 24/7</h3>
<p>We offer a 24/7 customer hotline so we can help you.</p>
<hr></hr>
    </div>
  </div>
</div>

        </div>
    );
};

export default Services;