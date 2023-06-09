 import React from 'react';
 import { Button, Card, Col, Image, Row } from 'react-bootstrap';
 import logo from  '../../public/logo.jpg'

 const Footer = () => {
    return (
        
      
            
            <div className="container-fluid bg-dark text-white">
            <div className="row d-flex justify-content-center align-items-center mx-5 ">
        <div className="col-md-3 ">
          <div className="d-flex flex-row justify-content-start align-items-start ">
            <img className="m-4   img-fluid rounded-circle w-25 h-25" src={logo} alt="" />
          </div>
          <p>There are many variations of passages of Chef Recipe available, but the majority have suffered alteration in some form, by injected humour.</p>
        </div>
       
        <div className="col-md-3  my-5 ">
          <h3 className="mt-4">Usefull Link</h3>
          <p>Home</p>
          <p>About Us</p>
          <p>Cases</p>
          <p>Blog</p>
          <p>Contact Us</p>
       </div>
       <div className="col-md-3  my-5">
        <h3 className="mt-4">Contact Now</h3>
        <p>555 4th 5t NW, Washington<br/>
          DC 20530, United States</p>
        <p>+88 01750 000 000</p>
        <p>+88 01750 000 000</p>
        <p>info@gmail.com</p>
        <p>info@gmail.com</p>
     </div>
        <div className="col-md-3">
          <h3>Subscribe</h3>
          <p>Subscribe for our latest & Articles. <br/>We Won’t Give You Spam Mails</p>
          <div className="input-group mb-5">
            <input type="text" className="form-control" placeholder="Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <span className="input-group-text" id="basic-addon2"><i className="fa-solid fa-location-arrow"></i></span>
          </div>
        </div>
      </div>
           
 
        </div>

       
    );
 };
 
 export default Footer;
