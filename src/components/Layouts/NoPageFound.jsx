import React, { Component }  from 'react';
import Jumbo from '../Layouts/components/Jumbo'
import van from '../../assets/home/business woman.jpg'

const NoPage = () => {
    return (
      <div className='mb-5'>
        <Jumbo  jumbo_image={van}/>
      </div>
    );
  };
  
export default NoPage;