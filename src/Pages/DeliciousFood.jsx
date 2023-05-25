import React from 'react';

import logo from '../../public/logo.jpg'
import { Button,Container, Card, Col, Image, Row } from 'react-bootstrap';
const DeliciousFood = () => {
    return (
        <div>
             <div className='container pt-5 mb-5 ' style={{ backgroundColor:'#f5f5f5',height:'700px',marginBottom:'50px' ,marginTop:'50px '}}>
                
                {/* <Container >
                    
                    <Row >
                        <Col md={6}>
                            <img src={logo} alt="placeholder" className="img-fluid h-50 w-75 order-1 order-lg-2" />
                        </Col>
                        <Col md={6}>
                            <h1>Enjoy Your Healthy</h1>
                            <h1>Delicious Food</h1>
                            <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
                            <Button>View Food</Button>
                        </Col>

                    </Row>
                </Container> */}


<Container className='mx-auto'>
      <Row className='row row-cols-1 row-cols-md-2  '>
        <Col md={7}>
        <img src={logo} alt="placeholder" className="img-fluid h-75 w-75 " /> 
        </Col>
        <Col md={5} className=' mt-5 p-2 '>
            <h1 className='text-danger  fw-bold'>Enjoy Your Healthy</h1>
            <h1 className='text-primary fw-semibold'>Delicious Food</h1>
             <p>Eating healthy can sometimes feel like a chore, but it doesn't have to be that way! By choosing fresh, wholesome ingredients and cooking them in creative ways, you can create delicious meals that nourish your body and satisfy your taste buds. Bengali cuisine, also known as Bangladeshi cuisine, is a delectable and diverse cuisine that originated from the Bengal region of the Indian subcontinent. </p>
            <Button>View Food</Button>
        </Col>
      </Row>
      
    </Container>
            </div>
        </div>
    );
};

export default DeliciousFood;