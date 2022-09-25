import React from 'react';
import{CardGroup,Card, Row, Col} from 'react-bootstrap';

const Service = (props) => {
   const{title,price,description}=props.service;
    return (
        <div>
            <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </div>
    );
};

export default Service;