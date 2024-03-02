import React, { Component }  from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Button } from 'react-bootstrap'

import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import Image from 'react-bootstrap/Image';

import styles from './About.module.css'

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

            
            <div className={styles.bhub2}>
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