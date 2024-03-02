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
function Home() {
    return (  
      <>

        <OwlCarousel className={styles.carousel} dots={false} loop autoplay center={true} items={1} >
            <div className={'item '+ styles.carouselItem}>
              <Image className={styles.carouselImages} src={business_woman} fluid/>
            </div>
            <div className={'item '+ styles.carouselItem}>
                <Image className={styles.carouselImages} src={kiwi} fluid />
            </div>
            <div className={'item '+ styles.carouselItem}>
                <Image className={styles.carouselImages} src={clock} fluid/>
            </div>
        </OwlCarousel>
      

        <section className={styles.section1 + " fs-5  text-muted"}>
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

              <Row style={{marginTop:"40px"}}>
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
              </Row>

              <br/><br/><br/>

              <Container>
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

                
              </Container>
          </Container>
        </section>

        <section>
          

        </section>

        <section>
          <Container className='py-4 w-50 text-center fs-5  text-muted'>
            <h1 className='pb-4'>HAPPENINGS IN GWM</h1>
            <Row className=' text-center'>
              
            </Row>
          </Container>
        </section>
      </>
    );
  }

export default Home;