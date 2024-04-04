import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';  
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import Modal from 'react-bootstrap/Modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

import logo from '../../../assets/logosite.png';

import styles from './Header.module.css';

import StepWizard from "react-step-wizard";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import kiwi from '../../../assets/home/kiwi.jpg'
import Image from 'react-bootstrap/Image';


import Wizard from './stepwizard/wizard';

import { NavLink } from 'react-router-dom';

function Header({header_image}) {
    let [header_class, setHeaderClass] = useState(["" , true, '300px'])
    let [link_color, setLinkColor] = useState('white')
    
    const mstyle = {
        active_link:{
            borderBottomColor: link_color
        }
    }
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    console.log(window.location.pathname )
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>{
                if (window.scrollY > 100){

                    setHeaderClass([styles.stickyHeader, false , '250px'])
                    setLinkColor("#00913E")
                }else if ( window.innerWidth > 1199){
                    setHeaderClass(['', true, "300px"])
                    setLinkColor("white")
                }
                // setSmall(window.pageYOffset > 200)
                console.log(window.scrollY)
            });

            window.addEventListener('resize', function(event){
                if(window.innerWidth < 1199){
                    setHeaderClass([styles.stickyHeader, false , '250px'])
                    setLinkColor("#00913E")
                } else{
                    setHeaderClass(['', true, "300px"])
                    setLinkColor("white")
                }
            });
        }
      }, []);
      

    return (
        <>
        <header className={styles.header}>
            <Navbar expand="xl" className={ " " + header_class[0]}>
                <Container>
                    
                    <Navbar.Brand  href="#home"><img className={styles.navBrand} width={header_class[2]} src={logo}></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
                    <Navbar.Collapse className='justify-content-end'>
                    
                        <span className='mr-auto'>
                            { header_class[1] &&
                            <Nav className={styles.nav1 + " justify-content-end"} >
                                <Nav.Link className={styles.navItem1 + " py-0 px-3"} href="#home"><FontAwesomeIcon icon={faPhoneVolume} /> +49 (0) 5363 - 810 3 750</Nav.Link>
                                <Nav.Link className={styles.navItem1 + " py-0 px-3"} href="/contact-us"><FontAwesomeIcon icon={faCircleQuestion} /> FAQ</Nav.Link>
                                <Nav.Link className={styles.navItem1 + " py-0 px-3"} href="#link">PORTAL 360</Nav.Link>
                                <Nav.Link className={styles.navItem1 + " py-0 px-3"} href="#">REGULATIONS</Nav.Link>
                                <Nav.Link className={styles.navItem1 + " py-0 px-3"} href="#">CAREERS</Nav.Link>
                                
                                {/* <NavDropdown className={styles.navItem + " py-0"} title="English" >
                                    <NavDropdown.Item href="#action/3.1">Deutsch</NavDropdown.Item>

                                    <NavDropdown.Item href="#action/3.2">فارسی</NavDropdown.Item>

                                    <NavDropdown.Item href="#action/3.3">العربیه</NavDropdown.Item>

                                    <NavDropdown.Item href="#action/3.4">Français</NavDropdown.Item>

                                </NavDropdown> */}

                                <Form.Control
                                
                                    type="text"
                                    placeholder="Search"
                                    className={ styles.navItem1 + " mx-2" }
                                /> 
                            </Nav>
                            }
                            
                            <Nav activeKey={window.location.pathname} className={styles.nav2 + " justify-content-end " }>
                                <Nav.Link  style={{ color : link_color , ...(window.location.pathname === '/' ? mstyle.active_link:{}) }} className={styles.navItem2 + " px-0 mx-3 "} href="/">HOME</Nav.Link>

                                <Nav.Link style={{ color : link_color , ...(window.location.pathname === '/about' ? mstyle.active_link:{}) }} className={styles.navItem2 + " px-0 mx-3"} href="/about">ABOUT</Nav.Link>
                                <Nav.Link style={{ color : link_color , ...(window.location.pathname === '/collection' ? mstyle.active_link:{}) }} className={styles.navItem2 + " px-0 mx-3"} href="/collection">COLLECTION</Nav.Link>
                                <Nav.Link style={{ color : link_color }} className={styles.navItem2 + " px-0 mx-3"} href="#">SHOP</Nav.Link>
                                <Nav.Link style={{ color : link_color , ...(window.location.pathname === '/recyclesolution' ? mstyle.active_link:{}) }} className={styles.navItem2 + " px-0 mx-3"} href="#">RECYCLE SOLUTION</Nav.Link>
                                <Nav.Link style={{ color : link_color , ...(window.location.pathname === '/contact-us' ? mstyle.active_link:{}) }} className={styles.navItem2 + " px-0 mx-3"} href="/contact-us">CONTACT US</Nav.Link>
                                <Nav.Link style={{ color : link_color  }} className={styles.navItem2 + "  mx-3 " + styles.navOffers} onClick={handleShow} href="#">ONE CLICK PICKUP</Nav.Link>
                            </Nav>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
        <Modal size='lg' show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>ONE CLICK PICKUP</Modal.Title>
            </Modal.Header>
            <Modal.Body size='lg'>
                <Wizard/>
            </Modal.Body>
            {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer> */}
        </Modal>
        </>
    );
  }
  
export default Header;