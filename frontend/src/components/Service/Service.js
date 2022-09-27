import React from 'react';
import{CardGroup,Card, Row, Col} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


const Service = (props) => {
   const{_id,title,price,description}=props.service;
   const navigate = useNavigate()
   const handleShowDeatail = ()=>{
    //console.log(_id);
    navigate(`/details/${_id}`)
   }
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
              <button onClick={handleShowDeatail}>Buy</button>
            </Card>
        </div>
    );
};

export default Service;