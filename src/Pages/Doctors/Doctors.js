import React, { useEffect, useState } from 'react';
import './Doctors.css';
import Docs from '../../doctors.json';
import { Link } from 'react-router-dom';

// function FetchData(){
//   const [doctor, setDoctors]=useState([]);

//   useEffect(()=>{
//     fetch('doctors.json')

//   },[])
// }
const Doctors = () => {
    return (
        <div className='oswald-font'>
            <div className="container-doctor">
  <img src="images/doctors.jpg" alt="Avatar" className="image-doctor"/>
  <div className="overlay-doctor">
    <div className="text-doctor"><h1 style={{fontSize:'3vw'}}>WE MADE YOUR MEDICAL TREATMENT EASY</h1>
    <p style={{fontSize:'1vw'}}>We will give you better healthcare, Here you can find some professional specialist. </p>
<button type="button" style={{ backgroundColor:"rgb(235, 84, 84)"}} className="rounded-pill btn text-light">Our Doctors</button>
</div>
  </div>
</div>



<div className='p-5 '>
  <h1 className='text-secondary pb-3'>Connecting You with Our Knowledgeable Healthcare Team</h1>
  <div className="row row-cols-1 p-5 row-cols-md-4 g-4">
  {
    Docs.map(doc=>{
      return(
        <div className="col">
        <div className="card h-100">
          <img src={doc.img} className="card-img-top zoom" alt="..."/>
          <div className="card-body">
            <h5 className="card-title text-secondary">{doc.name}</h5>
            <p className="card-text">{doc.department}</p>
          </div>
        </div>
      </div>
        
        )
    })
  }
</div>
</div>

<div>
<div style={{borderRadius:"50px 20px"}} className="container  bg-ap text-white mb-5">
  <div className="row text-start p-5">
    <div className="col-lg pt-3">
      <h5>Our Mission</h5>
      <p>Our clinic's goal is to give each patient compassionate, all-encompassing, and individualized medical care. Our dedication lies in our pursuit of wellness promotion, sickness prevention, and meeting the particular requirements of every person we assist.</p>
    </div>
    <div className="col-lg pt-3">
      <h5>Our vision</h5>
      <p>Our Clinic's aim is to be the premier supplier of outstanding healthcare services, known for our steadfast dedication to patient-centered care, innovation, and clinical quality. Our goal is to establish a more wholesome community.</p>
    </div>
    <div className="col-lg pt-3">
      <h5>Our Value</h5>
      <p>We place a high value on compassion, understanding, and empathy in all of our interactions with patients because we know that emotional support is crucial to the healing process. In order to build trust, we maintain the greatest moral standards, integrity, and openness in all facets of our work.</p>
    </div>
  </div>
</div>
</div>
<div className='p-5 text-secondary'>
  <h1>
  Why Join Humankind Medicare?
  </h1><hr></hr>
  <p>At Humankind Medicare Clinic, your health and well-being are at the heart of everything we do. We understand that each patient is unique, and we are dedicated to providing personalized, compassionate care tailored to your specific needs.</p>
  <Link className='text-decoration-none text-light' to='/login'><button type="button" className="btn btn-sm bg-ap text-light px-5">Contact Us</button></Link>
</div>
        </div>
    );
};

export default Doctors;