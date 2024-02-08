import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';  
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

import logo from '../../../assets/logosite.png';

import styles from './Header.module.css';

function Header() {
    let [header_class, setHeaderClass] = useState(["" , true, '300px'])
    let [link_color, setLinkColor] = useState('white')
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
        <header className={styles.header}>
            <Navbar expand="xl" className={ " " + header_class[0]}>
                <Container>
                    
                    <Navbar.Brand  href="#home"><img className={styles.navBrand} width={header_class[2]} src={logo}></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
                    <Navbar.Collapse className='justify-content-end'>
                    
                        <span className='mr-auto'>
                            { header_class[1] &&
                            <Nav className={styles.nav1 + " justify-content-end"} >
                                <Nav.Link className={styles.navItem1 + " py-0 px-3"} href="#home"><FontAwesomeIcon icon={faPhoneVolume} /> +971 7 204 1111</Nav.Link>
                                <Nav.Link className={styles.navItem1 + " py-0 px-3"} href="#home"><FontAwesomeIcon icon={faCircleQuestion} /> FAQ</Nav.Link>
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
                            
                            <Nav className={styles.nav2 + " justify-content-end " }>
                                <Nav.Link style={{ color : link_color , borderBottomColor: link_color }} className={styles.navItem2 + " px-0 mx-3 " + styles.active} href="#">HOME</Nav.Link>

                                {/* <NavDropdown
                                    className={styles.navItem2 + " px-0 mx-3 -danger"}
                                    title="ABOUT"
                                    
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown> */}

                                <Nav.Link style={{ color : link_color }} className={styles.navItem2 + " px-0 mx-3"} href="#">ABOUT</Nav.Link>
                                <Nav.Link style={{ color : link_color }} className={styles.navItem2 + " px-0 mx-3"} href="#">JOIN US</Nav.Link>
                                <Nav.Link style={{ color : link_color }} className={styles.navItem2 + " px-0 mx-3"} href="#">CLIENT CORNER</Nav.Link>
                                <Nav.Link style={{ color : link_color }} className={styles.navItem2 + " px-0 mx-3"} href="#">MEDIA CENTRE</Nav.Link>
                                <Nav.Link style={{ color : link_color }} className={styles.navItem2 + " px-0 mx-3"} href="#">CONTACT US</Nav.Link>
                                <Nav.Link style={{ color : link_color }} className={styles.navItem2 + "  mx-3 " + styles.navOffers} href="#">OFFERS</Nav.Link>
                            </Nav>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
  }

export default Header;