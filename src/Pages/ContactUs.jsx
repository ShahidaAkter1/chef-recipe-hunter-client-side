import React from 'react';
// import first from '../assets/contact/address.png'

const ContactUs = () => {
    return (
      
       <div className='mb-5'>
         <div className="container text-center bg-light h-100 p-5 ">
            <div className="row">
                <div className="col">
                    <h1>100+</h1>
                    <p> No. of Recipe</p>
                </div>
                <div className="col">
                    <h1 className='text-center'>5</h1>
                    <p> No. of Chef</p>
                </div>
                <div className="col">
                      <h1>5</h1>
                      <p> Weekly uploads New recipe</p>
                </div>
{/* <img src={first} className='h-25 w-100' alt="" /> */}
{/* <h1 className='fw-bold text-danger'>SUBSCRIBE</h1>
<h1 className='fw-bold text-danger'>&</h1> */}
            </div>
           
        </div>
        <div >
                <div className='text-white text-center p-5 bg-primary container'>
                    <h1>Join Our newsletter</h1>
                    <p>Weekly FREE UI resources straight to your inbox</p>
                    <div className="input-group mb-5 w-25 mx-auto">
                        <input type="text" className="form-control" placeholder="Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <span className="input-group-text w-25" id="basic-addon2"><i className="fa-solid fa-location-arrow"></i></span>
                    </div>
                </div>
                
            </div>
       </div>
    );
};

export default ContactUs;