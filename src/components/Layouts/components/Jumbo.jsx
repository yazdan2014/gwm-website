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

import styles from './Jumbo.module.css';


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Image from 'react-bootstrap/Image';


function Jumbo({jumbo_image}) {

    return (
        <>
        {
            <OwlCarousel className={styles.carousel} dots={false} center={true} items={1} >
                <div className={'item '+ styles.carouselItem}>
                    <Image className={styles.carouselImages} src={jumbo_image} fluid />
                </div>
            </OwlCarousel>
        }
        </>
    );
  }

export default Jumbo;