import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Service from '../Service/Service';
import{ Row,Col} from 'react-bootstrap';
import './Services.css'

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
      <div className='serviceContainer'>
        <h2 className='bHeader'>Provide awesome <span className='spText'>Services </span> </h2>
          <Row>
          
          {
          services.map(service =>(<Col><Service service={service}/></Col>))
          
         }
       
      </Row>
      </div>
    
    );
};

export default Services;