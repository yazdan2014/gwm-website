import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';  
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebookF , faTwitter, faInstagram , faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons"


import logo from '../../../assets/logosite.png';

import Image from 'react-bootstrap/Image';

import styles from './Footer.module.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedin, faTwitter, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    console.log(window.location.pathname)
    return (
        <>
            {window.location.pathname != "/" &&
            <div className={styles.bhub}>
                <Container className='text-center py-5'>
                    <h3 className='text-white mb-5' style={{fontSize:"32px",fontWeight:"200"}}>
                        A WORLD-CLASS BUSINESS AND INDUSTRIAL HUB
                    </h3>
                    <Button style={{fontSize:"18px",fontWeight:"200"}} className='btn-success display-2 px-4'>GET STARTED</Button>
                </Container>
            </div>}
            <footer style={{backgroundColor:"#00913E"}}>  
                <Container className='py-5 ' style={{maxWidth:"1250px"}}>
                    <Row>
                        <Col md={10}>
                            <Row className='px-4'>
                                <Col md={4} className=" mb-3">
                                    <ul className="nav flex-column">
                                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">WEBMAIL LOGIN</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">BLOG</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">ARTICLES</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">RAS AL KHAIMAH ECONOMIC ZONE</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">BUSINESS SETUP IN UAE</a></li>
                                    </ul>
                                </Col>
                                <Col md={4} className="mb-3">
                                    <ul className="nav flex-column">
                                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">CAREERS</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">FAQ</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">GWM GOVERNMENT E-SUGGESTIONS</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">GWM GOVERNMENT E-COMPLAINTS</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">USEFUL NUMBERS</a></li>
                                    </ul>
                                </Col>
                                <Col md={4} className="mb-3">
                                    <ul className="nav flex-column">
                                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">E-COMMERCE BUSINESS IN UAE</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">FREELANCE VISA</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">WAREHOUSE FOR RENT</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">UAE TRADE LICENCE SETUP</a></li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={2} sm={12} className='text-center'>
                            <Image src={logo} fluid/>
                        </Col>
                    </Row>
                    <Row >
                        <Col  md={12} className='text-center ' >
                            <div className='d-flex justify-content-between pt-3 px-3' style={{borderTop:'1px solid white'}}>
                                <ul className=' list-group list-group-horizontal nav '>
                                    <li className={ styles.footerIcon }><a href="https://www.facebook.com/myrakez" target="_blank"> <FontAwesomeIcon size={'lg'} className={'text-white ' } icon={faFacebookF}/></a></li>
                                    <li className={ styles.footerIcon }><a href="https://twitter.com/myrakez" target="_blank"><FontAwesomeIcon size={'lg'} className={'text-white ' } icon={faXTwitter}/></a></li>
                                    <li className={ styles.footerIcon }><a href="https://www.instagram.com/myrakez/" target="_blank"><FontAwesomeIcon size={'lg'} className={'text-white ' } icon={faInstagram}/></a></li>
                                    <li className={ styles.footerIcon }><a href="https://www.linkedin.com/company/rakez" target="_blank"><FontAwesomeIcon size={'lg'} className={'text-white ' } icon={faLinkedin}/></a></li>
                                    <li className={ styles.footerIcon }><a href="https://www.youtube.com/myrakez" target="_blank"><FontAwesomeIcon size={'lg'} className={'text-white ' } icon={faYoutube}/></a></li>
                                    
                                </ul>
                                <p className={'text-end text-white ' + styles.footerTerms}>
                                    <span>
                                        Copyright 2024 by GWM - Copyright 2023 German Waste Management GmbH.
                                    </span>
                                    &nbsp; | &nbsp; 
                                    <a className='text-reset text-decoration-none' href='#'>
                                        Privacy Statement
                                    </a>
                                    &nbsp; | &nbsp; 
                                    <a className='text-reset text-decoration-none' href="#">
                                        Terms Of Use
                                    </a>
                                    <br/>
                                    Last Updated on 12/29/2019 9:23:05 PM
                                </p>
                                
                            </div>

                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
  }

export default Footer;