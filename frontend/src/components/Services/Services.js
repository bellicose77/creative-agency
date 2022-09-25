import React, { useEffect, useState } from 'react';
import{CardGroup,Card, Row, Col} from 'react-bootstrap';
import axios from 'axios';

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
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
      }
      </Row>
    );
};

export default Services;