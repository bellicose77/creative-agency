import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Service from '../Service/Service';

const Services = () => {
  const[services,setServices] = useState([]);
  useEffect(()=>{
    const fetchdata = async ()=>{
      const {data} = await axios.get('http://localhost:8000/api/products/services');
      setServices(data)
    }
    fetchdata()
    
    
  },[]);
  console.log(services)
    return (
        <Row>
        {
          services.map(service =><Service/>)
          
         }
      </Row>
    );
};

export default Services;