import React, { Component }  from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Button } from 'react-bootstrap'

import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot , faPhone , faIndustry, faTreeCity, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Image from 'react-bootstrap/Image';

import styles from './Shop.module.css'

import headquarter from '../assets/contactus/headquarter.jpeg'

import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Accordion from 'react-bootstrap/Accordion';
import Jumbo from './Layouts/components/Jumbo'

import skyline from '../assets/about/skyline.svg'

function About() {
    return (  
      <>

        <Jumbo jumbo_image={headquarter}/>
      
        <section className={styles.section1 + ""}>
        <Container>
              <Row className='mb-5'>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1216.2506141615966!2d10.8644933!3d52.43383452923126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47af9116ac249099%3A0xd70809581ce432cd!2sHeinrichswinkel%2014%2C%2038448%20Wolfsburg%2C%20Germany!5e0!3m2!1sen!2s!4v1710328472297!5m2!1sen!2s" 
                width="600" height="450" style={{border:0}}
                 allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </Row>
              <br/>
              <br/>
              <Row>
                <Col md={3}>
                  <Row>
                    <Col className='text-end' sm={4}>
                      <FontAwesomeIcon size={'lg'} className={'text-success ' } style={{width:"25px",height:"auto"}} icon={faIndustry}/>
                    </Col>
                    <Col sm={8}>
                      <h4 >Factory</h4>
                      <p className='text-muted'>Ziegeleiweg 1, 19273 Amt Neuhaus, Germany</p>
                    </Col>
                  </Row>
                </Col>
                <Col md={3}>
                  <Row>
                    <Col className='text-end' sm={4}>
                    <FontAwesomeIcon size={'lg'} className={'text-success ' } style={{width:"25px",height:"auto"}} icon={faTreeCity}/>
                    </Col>
                    <Col sm={8}>
                      <h4>HEADQUARTER</h4>
                      <p className='text-muted'>Ziegeleiweg 1, 19273 Amt Neuhaus, Germany</p>
                    </Col>
                  </Row>
                </Col>
                <Col md={3}>
                  <Row>
                    <Col className='text-end' sm={4}>
                      <FontAwesomeIcon size={'lg'} className={'text-success ' } style={{width:"25px",height:"auto"}} icon={faPhone}/>
                    </Col>
                    <Col sm={8}>
                      <h4 >CALL US</h4>
                      <p className='text-muted'>+49 (0) 5363 - 810 3 750</p>
                    </Col>
                  </Row>
                </Col>
                <Col md={3}>
                  <Row>
                    <Col className='text-end' sm={4}>
                      <FontAwesomeIcon size={'lg'} className={'text-success ' } style={{width:"25px",height:"auto"}} icon={faEnvelope}/>
                    </Col>
                    <Col sm={8}>
                      <h4>EMAIL</h4>
                      <p className='text-muted'>info@germanwm.de</p>

                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
        </section>

        <section className='pb-5 my-5'>

            
            <div className={styles.bhub2 + ' mb-5 pb-5'}>
                <Image className={styles.skyline} src={skyline} alt='skyline'/>
            </div>
            <Container >
                <Row>
                  
                <h1 className='text-center mb-5'>Why GWM ?</h1>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>1. Reliable Service</Accordion.Header>
                    <Accordion.Body>
                      We assure over 500 satisfied customers, offering complimentary, hygienic containers for your used cooking oil.
                    </Accordion.Body>
                  </Accordion.Item>
                  
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>2. Quick Response</Accordion.Header>
                    <Accordion.Body>
                      In less than 24 hours, our team is at your doorstep for efficient oil collection.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>3. Trained Professionals</Accordion.Header>
                    <Accordion.Body>
                      Our skilled staff is well-trained in safe and responsible used cooking oil handling.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>4. User-Friendly Ordering</Accordion.Header>
                    <Accordion.Body>
                      Utilize our custom software to easily place your oil collection orders.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4">
                    <Accordion.Header>5. Cutting-edge Technology</Accordion.Header>
                    <Accordion.Body>
                      Benefit from our proprietary software solution developed to streamline the ordering process.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="5">
                    <Accordion.Header>6. Effortless Preparation</Accordion.Header>
                    <Accordion.Body>
                      Minimal preparation is needed for oil collection – just pour and we take care of the rest.
                    </Accordion.Body>
                  </Accordion.Item>



                </Accordion>

                </Row>
            </Container>
          
        </section>

        <section>
        </section>

      </>
    );
  }

export default About;