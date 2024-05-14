import { fa0, fa4, faBan } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
      
       <div className='p-5'>
         <div className='p-5' style={{color: "rgb(55, 189, 230)"}} ><br></br><br>
        </br>
   
      <p className='fs-1' > <FontAwesomeIcon icon={fa4} /><FontAwesomeIcon icon={fa0} /><FontAwesomeIcon icon={fa4} /></p>
      <h1>OOPS! The Page you requested was not found.</h1>
      <br></br>
      <br></br>
      <Link to='/'><button type="button" className="btn btn-sm btn-danger text-light">Go Home Page</button>

</Link>



        </div>
       </div>
    );
};

export default NotFound;