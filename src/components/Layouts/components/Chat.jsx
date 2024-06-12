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
import { Container, Row, Col, Image , Form } from 'react-bootstrap';
import logo from '../../../assets/logobw.png';

import Lottie from 'react-lottie';
import loading_animation from './../../../assets/chat/loading.json'


import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { motion , AnimatePresence ,} from "framer-motion"


function Chat() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loading_animation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      
    const [open, setOpen] = useState(false);

    const [conn, setConnection] = useState(null);
    const [_messages, setMessages] = useState([]);

    const [message, setMessage] = useState("");

    const username = "yaz" 
    const chatroom = "yaz-chatroom" 

    const handleOpen = () => {
        if(!conn) joinChatRoom()
        setOpen(!open);
        console.log(_messages)
    };

    const joinChatRoom = async () => {
        try {
        const conn = new HubConnectionBuilder()
            .withUrl("https://api.germanwm.de/Chat")
            .configureLogging(LogLevel.Information)
            .build();
        //debugger;
        // conn.on("JoinToChatRoom", (user, msg) => {
        //     setMessages((_messages) => [..._messages, { user, msg }]);
        // });

        try{
            await conn.start();
        }catch{
            console.log("Connection timed out, reconnecting...")
            
            return setTimeout(joinChatRoom,3000)
        }
        await conn.invoke("JoinToChatRoom", { username, chatroom });

        conn.on("SendMessage", (user, content, time) => {
            setMessages((_messages) => [..._messages, { user, content, time}]);
        });

        conn.on("JoinToChatRoom", (user, msg,time) => {
            setMessages((_messages) => [..._messages, { user, msg ,time}]);
        });
        // await conn.invoke("SendMessage", "salam");

        setConnection(conn);
        } catch (e) {
        console.log(e);
        }
    };

    const sendMessageToGroup = async () => {
        try {
          await conn.invoke("SendMessage", message);
        //   setMessages((_messages) => [..._messages, { username, message }]);
          setMessage("")
        } catch (e) {
          console.log(e);
        }
      };

    return (
        <>
            <div className={styles.float}>
            <AnimatePresence  >
                {open && 
                
                <motion.div
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
                            {conn &&
                            
                            <Row className={styles.chat + ' m-0 w-100 '}>
                                <div className={'overflow-auto ' + styles.messages }>
                                    {
                                        _messages.map((message)=>{
                                            if(message.user !== username){
                                                return(
                                                    <Row className={ styles.messageWrapper +' align-items-right'}>
                                                        <div className={styles.messageAdmin + ' w-auto h-auto text-justify ms-auto'}>
                                                            <p>{message.content}</p>
                                                            <div className={styles.chatTime + " "}>{message.time}</div>
                                                        </div>
                                                    </Row>
                                                )
                                            }else{
                                                return(
                                                    <Row className={ styles.messageWrapper }>
                                                        <div className={styles.messageUser + ' w-auto h-auto text-justify'}>
                                                            <p>{message.content}</p>
                                                            <div className={styles.chatTime + " "}>{message.time}</div>
                                                        </div>
                                                    </Row>
                                                )
                                            }
                                        })
                                    }
                                    


                                </div>
                                <Form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        sendMessageToGroup(message);
                                        setMessage("");
                                    }}
                                    className={styles.footer + ' mx-0'}>
                                    <Row className={styles.footer + ' mx-0 mt-2'}>
                                            <Col className='d-flex justify-content-center my-auto' sm={10} >
                                            <Form.Control
                                                className='my-auto w-100 border-0'
                                                placeholder='Type a message...'
                                                type="text"
                                                onChange={(e) => setMessage(e.target.value)}
                                                value={message}
                                            />
                                            </Col>
                                            <Col className='d-flex justify-content-center my-auto' sm={2} >
                                                <button className='my-auto w-100 ' type='text' ><FontAwesomeIcon size={'lg'} fontWeight={"100"} color='#72B62B' icon={faPaperPlane}/></button>
                                            </Col>
                                    </Row>
                                </Form>
                            </Row>
                            }{
                                !conn &&
                                <Row className={styles.chatLoading + ' m-0 w-100 '}>
                                    <Lottie 
                                        options={defaultOptions}
                                        height={400}
                                        width={400}
                                    />
                                </Row>
                            }
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