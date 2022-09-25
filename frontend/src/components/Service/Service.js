import React from 'react';
import{CardGroup,Card, Row, Col} from 'react-bootstrap';

const Service = (props) => {
   const{title,price,description}=props.service;
    return (
        <div>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                    <p>{price}</p>
                </Card.Text>
              </Card.Body>
              <button>Buy</button>
            </Card>
        </div>
    );
};

export default Service;