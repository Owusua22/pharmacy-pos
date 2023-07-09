import React from 'react';
import {Navbar,Container,Nav, ThemeProvider} from "react-bootstrap"
import pic1 from "../Assets/logo.png"
import "./Header.css"
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify"
import { Link } from 'react-router-dom';


const Header = () => {

    return (
// breakpoints
  <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs">

{/* navbar */}
 <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" >
      <Container > 
        <div className='logo1'>
          <img src={pic1} alt="logo" className='logo' />
        < Link to ="/" style={{cursor:"pointer", fontSize:"23px", fontWeight:"900"}}>Sally's Phamaceuticals</Link>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{fontSize:"10px"}}/>
        <Navbar.Collapse id="responsive-navbar-nav">

          {/* Navlinks */}
          <Nav className='start'>
            <Link to="/pos">Get Started</Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
      <ToastContainer/>
    </Navbar>
</ThemeProvider>
       
    );
}

export default Header;
