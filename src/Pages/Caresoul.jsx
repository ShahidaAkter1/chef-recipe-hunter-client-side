import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import first from '../assets/caresoul/1.jpg'
import second from '../assets/caresoul/10.webp'
import third from '../assets/caresoul/10.webp'

// import logo from '../../public/logo.jpg'

import { Button,Container, Card, Col, Image, Row } from 'react-bootstrap';
 
const Caresoul = () => {


    return (
        <Carousel className='container my-5'>
      <Carousel.Item interval={1000} variant="dark">
        <img
          className="d-block w-100 h-25"
          src={first}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='fw-bold fs-1 text-danger'> Our Special Bangali Food</h3>
          <p >Bengali cuisine is a diverse and flavorful culinary tradition that originates from the Bengal region of South Asia, encompassing parts of India and Bangladesh. It is known for its delicate use of spices, fresh herbs, and seafood, as well as its unique sweet and savory flavors. Popular dishes include fish curry, roshogolla (a sweet cheese ball), and biryani (a rice dish with meat or vegetables).</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={second}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h3 className='fw-bold fs-1 text-danger'> Our Special Bangali Food</h3>
          <p >Bengali cuisine is a diverse and flavorful culinary tradition that originates from the Bengal region of South Asia, encompassing parts of India and Bangladesh. It is known for its delicate use of spices, fresh herbs, and seafood, as well as its unique sweet and savory flavors. Popular dishes include fish curry, roshogolla (a sweet cheese ball), and biryani (a rice dish with meat or vegetables).</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={third}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h3 className='fw-bold fs-1 text-danger'> Our Special Bangali Food</h3>
          <p >Bengali cuisine is a diverse and flavorful culinary tradition that originates from the Bengal region of South Asia, encompassing parts of India and Bangladesh. It is known for its delicate use of spices, fresh herbs, and seafood, as well as its unique sweet and savory flavors. Popular dishes include fish curry, roshogolla (a sweet cheese ball), and biryani (a rice dish with meat or vegetables).</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default Caresoul;