import React, { Component }  from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import Image from 'react-bootstrap/Image';

import styles from './Home.module.css'

import kiwi from '../assets/home/kiwi.jpg'
import clock from '../assets/home/clock.jpg'
import business_woman from '../assets/home/business woman.jpg'

import contactus from '../assets/home/contactus.jpg'
import latestnews from '../assets/home/latestnews.jpg'
import partners from '../assets/home/partners.jpg'

import oilbottle from '../assets/home/oilbottle.png'
import phoneapp from '../assets/home/phoneapp.png'

import web1 from '../assets/home/Web1.jpg'
import web2 from '../assets/home/Web2.jpg'
import web3 from '../assets/home/Web3.jpg'

import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import cardpic from '../assets/home/cardpic.jpg'

import cost_effectiveness from '../assets/home/icons/Cost-Effectiveness.png'
import customized_solutions from '../assets/home/icons/Costumized-Solutions.png'
import diversification from '../assets/home/icons/Diversification.png'
import effective from '../assets/home/icons/Effective.png'
import experts from '../assets/home/icons/Experts.png'

import Jumbo from './Layouts/components/Jumbo'
import { steps } from 'framer-motion';
function Home() {
    return (  
      <>
          <OwlCarousel className={styles.carousel} dots={false} loop autoplay center={true} items={1} >
            <div className={'item '+ styles.carouselItem}>
              <Image className={styles.carouselImages} src={web3} fluid/>
            </div>
            <div className={'item '+ styles.carouselItem}>
                <Image className={styles.carouselImages} src={web2} fluid />
            </div>
            <div className={'item '+ styles.carouselItem}>
                <Image className={styles.carouselImages} src={web1} fluid/>
            </div>
          </OwlCarousel>
        
          <section className={styles.section2 + " fs-5  text-muted"}>
          {/* <br/>
          <br/>
          <br/>
          <br/> */}
          <Container >
              <Row>
                <h1 className='text-center'>Welcome to GWM</h1>
                
                <p className='text-center'>
                  <br/><br/>
                  A powerhouse supporting startup businesses, SMEs, 
                  and global manufacturing players with their company formation in the UAE <br/><br/>

                  Situated in the heart of the emirate of Ras Al Khaimah in the United Arab
                  Emirates, Ras Al Khaimah Economic Zone (RAKEZ) is a business powerhouse 
                  and leading industrial hub. It is a business licencing authority that offers
                  customisable solutions for UAE company formation to free zone and non-free 
                  zone businesses in a multinational community of +21,000 companies that flourishes in over 50 sectors.<br/><br/>

                  Established by the Government of Ras Al Khaimah, RAKEZ is one of the largest
                  economic zones in the region supporting startups, entrepreneurs, SMEs and 
                  industrialists with their business setup processes and requirements. 
                  We provide a wide range of business licences in the UAE, residence visa services
                  , customisable facilities, as well as value-added support services including
                  accounting, translation, bank account opening, recruitment, procurement, marketing, and many more.<br/><br/>

                  We aim to make running and setting up your business in the UAE as easy as 1, 2, 3, while ensuring full compliance with the UAE’s rules and regulations.
                </p>
              </Row>

              {/* <Row style={{marginTop:"40px"}}>
                <OwlCarousel className={styles.carousel} navText={[<FontAwesomeIcon icon={faChevronLeft} />,<FontAwesomeIcon icon={faChevronRight} />]} nav={true} dots={false} loop autoplay center={true}  items={3} margin={50} >
                  
                  <div className={'item '+ styles.carouselItem2}>
                      <Image className={styles.carouselImages} src={contactus} fluid />
                  </div>
                  <div className={'item '+ styles.carouselItem2}>
                    <Image className={styles.carouselImages} src={latestnews} fluid/>
                  </div>
                  <div className={'item '+ styles.carouselItem2}>
                      <Image className={styles.carouselImages} src={partners} fluid/>
                  </div>
                </OwlCarousel>
              </Row> */}

              <br/><br/><br/>

              {/* <Container>
                <h1 className='text-center mb-5' >OUR STRATEGIC PILLARS </h1>
                <Row className='justify-content-center mb-5'>
                  <Col sm={4} className='text-center'>

                    <div className={styles.icon + ' mb-4'}>
                      <Image src={customized_solutions} />
                    </div>

                    <div className={styles.icon_text}>
                      <h4 className='px-2'>CUSTOMIZED SOLUTIONS</h4>
                      <p>Connect with us to benefit from our tailor-made packages and smart solutions for company formation in the UAE.</p>
                    </div>
                  </Col>

                  <Col sm={4} className='text-center'>
                    <div className={styles.icon + ' mb-4'}>
                      <Image src={customized_solutions} />

                    </div>
                    <div className={styles.icon_text }>
                      <h4 className='px-2'>SUPERIOR EFFICIENCY</h4>
                      <p>If you are setting up a business in the UAE, our seamless support will have you ready to operate in no time.</p>
                    </div>
                  </Col>
                </Row>
                <Row className='justify-content-center'>
                  <Col  className='text-center'>

                    <div className={styles.icon + ' mb-4'}>
                      <Image src={customized_solutions} />
                    </div>

                    <div className={styles.icon_text}>
                      <h4 className='px-2'>COMPLETELY DIVERSIFIED</h4>
                      <p>Choose from a wide range of industries, sectors and business activities when opening a company in the UAE.</p>
                    </div>
                  </Col>

                  <Col  className='text-center'>
                    <div className={styles.icon + ' mb-4'}>
                      <Image src={customized_solutions} />

                    </div>
                    <div className={styles.icon_text }>
                      <h4 className='px-2'>COST-EFFECTIVE SOLUTIONS</h4>
                      <p>It is easy to start a small business in the UAE with our affordable set-up packages and premium solutions.</p>
                    </div>
                  </Col>

                  <Col  className='text-center'>
                    <div className={styles.icon + ' mb-4'}>
                      <Image src={customized_solutions} />

                    </div>
                    <div className={styles.icon_text }>
                      <h4 className='px-2'>SEASONED EXPERTS</h4>
                      <p>Company formation in the UAE – with ease. Our team of experts are always ready to help with all of your requirements.</p>
                    </div>
                  </Col>
                </Row>

                
              </Container> */}
          </Container>
        </section>
        <section className={styles.section1}>
          <Container className='py-5 w-50 text-center fs-5 w-100  text-muted'>
            <Row>
              <Col sm={4} className={'text-start ' } ><h1 className={styles.sec1topic + ' w-50 mx-auto'}>Our<br/>Services</h1></Col>
              <Col md={8}>
                <div className={styles.sec1layers}>
                  <Row>
                    <Col className={styles.sec1wm} md={11}><div className={'text-start'}><h3 style={{color:"#FFB800",fontSize:"32px"}}>Waste Management</h3></div></Col>
                    <Col style={{borderBottom:"solid 3px #FFB800"}} md={1}><div className={'text-center'}><h3 style={{color:"#FFB800",fontSize:"32px" }}>&gt;</h3></div></Col>
                  </Row>
                  <Row className={'text-start pt-3 text-muted'}>
                    <Col md={6}><p style={{fontWeight:'400'}}>&gt; UCO Collecting</p></Col>
                    <Col md={6}><p>&gt; Collect Request</p></Col>
                    <Col md={6}><p>&gt; Fresh Pickups</p></Col>
                  </Row>
                </div>
                <div className={styles.sec1layers}>
                  <Row>
                    <Col className={styles.sec1wm} md={11}><div className={'text-start'}><h3 style={{color:"#68BC41",fontSize:"32px"}}>International Waste Trade</h3></div></Col>
                    <Col style={{borderBottom:"solid 3px #68BC41"}} md={1}><div className={'text-center'}><h3 style={{color:"#68BC41",fontSize:"32px" }}>&gt;</h3></div></Col>
                  </Row>
                  <Row className={'text-start pt-3 '}>
                    <Col md={6}><p>&gt; UCO Collecting</p></Col>
                    <Col md={6}><p>&gt; Collect Request</p></Col>
                    <Col md={6}><p>&gt; Fresh Pickups</p></Col>
                  </Row>
                </div>
                <div className={styles.sec1layers}>
                  <Row>
                    <Col className={styles.sec1wm} md={11}><div className={'text-start'}><h3 style={{color:"#373F51",fontSize:"32px"}}>Oit & Fat Processing</h3></div></Col>
                    <Col style={{borderBottom:"solid 3px #373F51"}} md={1}><div className={'text-center'}><h3 style={{color:"#373F51",fontSize:"32px" }}>&gt;</h3></div></Col>
                  </Row>

                </div>
              </Col>
            </Row>

            
          </Container>
        </section>

        <section className={styles.section3}>
          <Container className='py-5 w-50 text-center fs-5 w-100  text-muted'>
            <Row>
              <h2 className='text-white text-start mb-4'>How UCO collection works?</h2>
            </Row>
            <Row>
              <Col className='text-start' md={3}>
                  <div className={styles.steponeBox}>
                    <center className={'h-100 d-flex justify-content-center align-items-center ' + styles.steponeContent}>
                      01
                    </center>
                  </div>
                  <h4>
                    Schedule
                  </h4>
                  <p className='w-75'>
                    Schedule your desired time via website, app, or phone.
                  </p>
              </Col>
              <Col className='text-start' md={3}>
                  <div className={styles.steptwoBox}>
                    <div className={styles.topright}></div>
                    <center className={'h-100 d-flex justify-content-center align-items-center ' + styles.steponeContent}>
                      02
                    </center>
                  </div>
                  <h4>
                    Contract and Bin Delivery
                  </h4>
                  <p className='w-75'>
                    Our representative will arrive at the agreed time for contract signing and bin handover.
                  </p>
              </Col>
              <Col className='text-start' md={3}>
                  <div className={styles.stepthreeBox}>
                    <div className={styles.topright}></div>
                    <center className={'h-100 d-flex justify-content-center align-items-center ' + styles.steponeContent}>
                      03
                    </center>
                  </div>
                  <h4>
                    Rewards & Fresh Pickups
                  </h4>
                  <p className='w-75'>
                    Cash, bank transfers, or a wide range of competitively priced fresh products.
                  </p>
              </Col>
              <Col className='text-start' md={3}>
                  <div className={styles.stepfourBox}>
                  <div className={styles.topright}></div>
                    <center className={'h-100 d-flex justify-content-center align-items-center ' + styles.steponeContent}>
                      04
                    </center>
                    <div className={styles.bottomright}></div>
                  </div>
                  <h4>
                    Regular Collection Day
                  </h4>
                  <p className='w-75'>
                    Routine visits for oil collection at scheduled intervals or based on your needs.
                  </p>
              </Col>
            </Row>
          </Container>
        </section>

        <section className={styles.section4 + ' pt-5'}>
          <Container className='py-5 w-50 text-center fs-5 w-100  text-muted'>
            <Row>
              <Col className='z-2' sm={2}>
                <div className={styles.imgbox}>
                  <Image className='p-0 m-0' src={oilbottle}  />
                </div>
              </Col>
              <Col sm={10}>
                <div className={'text-overlay '+ styles.textoverlay}>
                  <h2 className='text-start'>Need to trade your International Waste?</h2>
                  <p className='text-start'>We are here for you to offer Lorem ipsum dolor sit amet,
                    con sectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore  <br/><br/>
                  <a href='google.com' className='text-start  text-success '>Read More Here</a>
                  </p>
                </div>                
              </Col>
            </Row>

            
          </Container>
        </section>

        <section className={styles.section5 + ' pt-5'}>
          <Container className='py-5 w-50 text-center fs-5 w-100  text-muted'>
            <Row>
              <Col className='text-start mb-4' sm={6}>
                <div>
                  <h2>
                    Who we are?
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. 
                  </p>
                  <Button className='btn-secondary '>Learn More</Button>
                </div>
              </Col>
              <Col className='ms-auto ' sm={5}>
                <Row className={'ms-auto align-items-center mb-3 position-relative ' + styles.design1} style={{width:"90%",height:"30%" ,backgroundColor:"#F3F4F6"}}>                      
                    <Col sm={8}>
                      <h5 className='text-start text-dark'>
                       Vans <br/> & Drivers
                      </h5>
                    </Col>
                    <Col md={4}>
                      <h1 className='text-dark'>230+</h1>
                    </Col>
                </Row>
                <Row className={'align-items-center mb-3 position-relative ' + styles.design2} style={{width:"90%",height:"30%" ,backgroundColor:"#F3F4F6"}}>                      
                    <Col sm={8}>
                      <h5 style={{color:"#68BC41"}} className='text-start'>
                        International <br/> Clients
                      </h5>
                    </Col>
                    <Col md={4}>
                      <h1 style={{color:"#68BC41"}}>230+</h1>
                    </Col>
                </Row>
                <Row style={{width:"90%",height:"30%" ,backgroundColor:"#F3F4F6"}} className={'ms-auto align-items-center mb-3 position-relative ' + styles.design3}>                      
                    <Col sm={8}>
                      <h5 style={{color:"#F5B203"}} className='text-start'>
                      UCO <br/> Collection
                      </h5>
                    </Col>
                    <Col md={4}>
                      <h1 style={{color:"#F5B203"}}>230+</h1>
                    </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        <section className={styles.section6 + ' py-5 my-5'}>
          <Container className='py-5 w-100  text-muted'>
            <Row>
              <div className='w-50'>
                <h2 className='text-white'>Recycle Solution Application</h2>
                <p className='text-text-white-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              </div>
              <div className='position-relative ms-auto w-25'>
                <img className='position-absolute' src={phoneapp}/>
              </div>
            </Row>
          </Container>
        </section>
        

        <section>
          <Container className='py-4 w-50 text-center fs-5  text-muted'>
            {/* <h1 className='pb-4'>HAPPENINGS IN GWM</h1> */}
            <Row className=' text-center'>
              
            </Row>
          </Container>
        </section>
      </>
    );
  }

export default Home;