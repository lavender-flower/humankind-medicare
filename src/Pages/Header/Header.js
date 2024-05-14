import React from 'react';
import './Header.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { NavLink,Link } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import useAuth from '../../Hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const {user,logOut}=useAuth();
    return (
        <div>
        
             
      <Navbar collapseOnSelect expand="lg" style={{backgroundColor: "rgb(55, 189, 230)"}} data-bs-theme="light">
        <Container>
           
          <Navbar.Brand className='text-light cover-name' href="#home">  <img src="images/logo-w.png" alt="" width="30" height="30"/> Humankind Medicare</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
            
            <Nav.Link ><NavLink className='text-decoration-none text-light ' to='/home'>Home</NavLink></Nav.Link>
            <Nav.Link ><Link className='text-decoration-none text-light' to='/services'>Departments</Link></Nav.Link>
            <Nav.Link ><NavLink className='text-decoration-none text-light' to='/doctors'>Our Doctors</NavLink></Nav.Link>
            <Nav.Link ><NavLink className='text-decoration-none text-light' to='/contacts'>Conacts</NavLink></Nav.Link>
            {user?.email? 
            <Button onClick={logOut} variant='outline-light'>Logout</Button>:
            <Nav.Link ><NavLink className='text-decoration-none text-light' to='/login'>Login</NavLink></Nav.Link>

            }
            <Navbar.Text className='text-primary'><small>Signed in as:</small> <a href='#login' className='text-light'>{user?.displayName}</a></Navbar.Text>
          </Nav>
          <Form className=" d-flex text-end">
     
          {/* <Navbar.Text className='text-primary'><FontAwesomeIcon icon={faHouse} /></Navbar.Text> */}
       <div className='d-inline-block'>
       <small className='text-light'> <FontAwesomeIcon icon={faHouse} /> 1202 Dhaka, Bangladesh</small>
         
         <h6 className='text-light'><FontAwesomeIcon icon={faPhone} /> +08809475483</h6>
       </div>

                </Form>
                </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
};

export default Header;