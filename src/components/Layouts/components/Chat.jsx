import React, { useState, useEffect } from 'react';
// import Container from 'react-bootstrap/Container';  
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// import InputGroup from 'react-bootstrap/InputGroup';
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './Chat.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faX, faPaperPlane  } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col, Image } from 'react-bootstrap';
import logo from '../../../assets/logobw.png';

import Form from 'react-bootstrap/Form';

import { motion , AnimatePresence ,} from "framer-motion"


function Chat() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <>
            <div className={styles.float}>
            <AnimatePresence  >
                {open && <motion.div
                    initial={{ y:100, opacity: 0 }}
                    animate={{ y:0 , opacity: 1   }}
                    exit={{ y:100, opacity: 0 }}
                >
                    
                    <Container className={styles.chatBox + " p-0 m-0" }>
                        <Row className={styles.header + ' items-center m-auto fs-5 '}>
                            <Col className='d-flex justify-content-center my-auto'  md={2}>
                                <Image style={{width:"50px",height:"50px"}} src={logo} fluid/>
                            </Col>    
                            <Col className={'my-auto '} md={8}>
                                <h4 className='mb-0'>Live Chat Support</h4>
                                <h5>Working hours: 8am - 21pm (GMT+2)</h5>
                            </Col>   
                            <Col className='align-items-end my-auto' md={2}>
                                <Button onClick={handleOpen} className=''><FontAwesomeIcon size={'sm'} fontWeight={"100"} color='white' icon={faX}/></Button>
                            </Col>    
                        </Row> 
                        <Row className={styles.chat + ' items-center m-auto fs-5 w-100 align-items-end'}>
                            <Row className={styles.footer + ' mx-0'}>
                                <Col className='d-flex justify-content-center my-auto' sm={10} >
                                <Form.Control
                                    className='my-auto w-100 border-0'
                                    placeholder='Type a message...'
                                    type="text"
                                />
                                </Col>
                                <Col className='d-flex justify-content-center my-auto' sm={2} >
                                    <button className='my-auto w-100 ' type='text' ><FontAwesomeIcon size={'lg'} fontWeight={"100"} color='#72B62B' icon={faPaperPlane}/></button>
                                </Col>
                            </Row>
                        </Row>
                    </Container>
                </motion.div>
                }
            </AnimatePresence>
            
            <AnimatePresence  mode="popLayout">
                {!open && 
                <motion.button 
                    whileHover={{ scale:1.07 }}
                    transition={{ duration: 0.3 }}
                    initial={{ y:100, opacity: 0 }}
                    animate={{ y:0 , opacity: 1   }}
                    exit={{  opacity: 0 }}
                    className={styles.floatingBtn + ' float-end'} onClick={handleOpen}>                    
                    <FontAwesomeIcon  size={'lg'} style={{width:"28px",height:"auto"}} icon={faMessage}/>
                </motion.button>
                }
            </AnimatePresence>
            
            </div>
        </>
    );
  }
  
export default Chat;