import React, { useState } from 'react';
import './Overlayp.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
const Overlayp = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <div className='py-5 my-5'>
            <div className="container1">
  <img src="images/cover4.jpg" alt="Avatar" className="image"/>
  <div className="overlay">
    <div className="text">
    <div className=' mt-5 text-light p-5 mb-5'>
<div>  <h3 className='oswald-font' style={{fontSize:'2.5vw'}}>HIGH CLASS SPECIALISTS READY TO HELP YOU AT ANY TIME</h3><hr></hr>
  <small style={{fontSize:'1vw'}}>He who has health has hope and he who has hope has everything. Let's build wellness rather than treat disease. A healthy outside starts from the inside. It is health that is real wealth and not pieces of gold and silver.
</small>
  </div>


<Button type="button" style={{backgroundColor: "rgb(235, 84, 84)",fontSize:'1.2vw'}} className="btn btn-sm text-light px-5" onClick={handleShow}>
        Book Appointment
      </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title style={{color: "rgb(235, 84, 84)"}} className='oswald-font'>Book An Appointment  <br></br>    <small className='oswald-font text-dark pb-2'>A Specialist will contact you shortly</small></Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div className=' p-4 text-light'>
<div className="container">
  <div className="row">
    
     
    


    
    <div className="col">
    <div className="input-group input-group-sm mb-3" >
  <span className="input-group-text" id="inputGroup-sizing-sm"style={{color: "rgb(235, 84, 84)"}}>Your Name</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
</div>
<div className="input-group-sm mb-3" >
  
  <select className="form-select" id="inputGroupSelect01" style={{color: "rgb(235, 84, 84)"}}>
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
    <div className="col">
    <div className="input-group input-group-sm mb-3">
  <span className="input-group-text" id="inputGroup-sizing-sm"style={{color: "rgb(235, 84, 84)"}}>Your Email</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
</div>
<div>

  <input style={{color: "rgb(235, 84, 84)"}} className='form-control p-1' type="date" id="date" name="date"/>


</div>

    </div>
  </div>
</div>
</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link className='text-decoration-none text-light' to='/login'>  <Button type='submit' style={{backgroundColor: "rgb(235, 84, 84)"}} className="btn text-light" onClick={handleClose}>
            Book Appointment
          </Button></Link>
        </Modal.Footer>
      </Modal>

</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Overlayp;