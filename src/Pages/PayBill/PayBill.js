import React from 'react';
import { Button } from 'react-bootstrap';

const PayBill = () => {
    return (
        <div className='container py-5'>
            <h3>Pay Your Bill Here</h3>
            <ul className="list-group">
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Consultation Bill
    <span className="badge bg-primary ">1400tk</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Ambulance Bill
    <span className="badge bg-primary">2000tk</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Cavin Bill
    <span className="badge bg-primary ">1000tk</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Checkup Bill
    <span className="badge bg-primary ">500tk</span>
  </li>
</ul>
<br></br>
<Button variant='danger'> Pay Bill</Button>
        </div>
    );
};

export default PayBill;