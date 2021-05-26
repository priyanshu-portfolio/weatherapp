import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './weather.css';

const Weather=()=>{
    return(
        <div>
        <div className="bg" />
        <div className="bg bg2" />
        <div className="bg bg3" />
        <div className="content">
            <Container>
                <Row>
                    <Col className="">
                        <p className="headin">Weather</p>
                    </Col>
                </Row>
                <hr className="linehr" />
                <Row>
                    <Col>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="City" />
                                
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Country</Form.Label>
                                <Form.Control type="text" placeholder="Country" />
                            </Form.Group>
                            
                            <Button bsClass="custom-btn">
                                Get Weather
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
        </div>
        

    );
}
export default Weather;