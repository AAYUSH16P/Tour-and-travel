import React from 'react'
import './Newsletter.css'

import {Container,Row,Col} from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'



const Newsletter = () => {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div>
                    <h2>Subrice now to get useful traveling information.</h2>

                    <div className="newsletter__input">
                        <input type="email" placeholder="Enter your email"/>
                        <button className='btn newsletter__btn'>Subscribe</button>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed molestiae blanditiis deleniti porro iure mollitia nemo debitis architecto a explicabo.</p>
                </div>
                
            </Col>
            <Col lg="6">
            <div className="newsletter__img">
                <img src={maleTourist} alt="" />
            </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Newsletter