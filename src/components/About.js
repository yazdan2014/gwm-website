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

import wolfsburg from '../assets/about/wolfsburg.jpg'
import moderncity from '../assets/about/moderncity.jpg'

import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Jumbo from './Layouts/components/Jumbo'

import skyline from '../assets/about/skyline.svg'

function About() {
    return (  
      <>

        <Jumbo jumbo_image={wolfsburg}/>
      

        <section className={styles.section1 + ""}>
          <Container >
              <Row>
                <h1 className='text-center'>WOLFSBURG</h1>
                
                <p className='text-center fs-5 fw-lighter text-muted'>
                  <br/><br/>
                    At the northernmost part of the United Arab Emirates (UAE) 
                    lies Ras Al Khaimah, one of the leading destinations for business set-up in the UAE. <br/><br/>

                    The emirate prides on its proven record of safety and stability as 
                    backed by renowned credit rating agencies such as Fitch Ratings and
                    S&P. With logistical hubs such as seaports, international airport
                    and multi-lane superhighways, companies easily access the trade
                    flows between the east and the west.<br/><br/>

                    <div className={styles.bhub}>
                        <Container className='text-center py-5'>
                            <h3 className='text-white mb-5' style={{fontSize:"32px",fontWeight:"200"}}>
                                A WORLD-CLASS BUSINESS AND INDUSTRIAL HUB
                            </h3>
                        </Container>
                    </div>
                    But is business all that it has to offer? Beyond Ras Al Khaimah’s
                    business-friendly façade is a perfect place for you and your family to live.
                    Experience a rich local culture, scenic view of majestic mountains, relaxed
                    seaside ambiance, and a year-round sunny weather for a cost that’s way below the
                    average major cities. You will also get access to high-quality yet affordable
                    housing, shopping malls, premier educational institutions and advanced medical facilities.<br/><br/>

                    We aim to make running and setting up your business in the UAE as easy as 1, 2, 3, while ensuring full compliance with the UAE’s rules and regulations.
                </p>
              </Row>
          </Container>
          
          <div className={styles.bhub2}>
                <Image className={styles.skyline } src={skyline} alt='skyline'/>
            </div>
        </section>

        <section>
        </section>

      </>
    );
  }

export default About;