import React from 'react';
import{CardGroup,Card, Row, Col} from 'react-bootstrap';

const Service = () => {
    return (
        <div>
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
        </div>
    );
};

export default Service;