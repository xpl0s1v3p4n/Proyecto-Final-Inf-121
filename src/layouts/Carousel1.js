import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import celular1 from '../assets/img/celular1.jpg'
import celular2 from '../assets/img/celular2.png'
import celular3 from '../assets/img/celular3.jpg'
import '../styles/Carousel.css'


export default function Carousel1() {
    return (
        <div>
            <Carousel className='carousel'>
                <Carousel.Item>
                    <img className='imgcel' src={celular1} alt="First Slide"/>
                    <Carousel.Caption>
                        <h2>Samsung Galaxy S23 Ultra</h2>
                        <p></p>
                   </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='imgcel' src={celular2} alt="Second slide" />
                    <Carousel.Caption>
                        <h2>Huawei P50 Pro</h2>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item> 
                    <img className='imgcel' src={celular3} alt="Third slide" />
                    <Carousel.Caption>
                        <h2>Xiaomi 13 Pro</h2>
                        <p>
                            
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> 
        </div>
    );
}

