import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './weather.css';

const Weather=(props)=>{
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
                    <div>{props.error ? error() :null}</div>
                        <Form onSubmit={props.loadweather}>
                            <Form.Group controlId="formBasicEmail" >
                                <Form.Label class="formlabel">City</Form.Label>
                                <Form.Control type="text" name="city" autoComplete="off" placeholder="City" />
                                
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label class="formlabel">Country</Form.Label>
                                <Form.Control type="text" name="country" autoComplete="off" placeholder="Country" />
                            </Form.Group>
                            
                            <button className="button" type="submit">
                                Get Weather
                            </button>
                        </Form>
                    </Col>
                    
                    <Col >
                        <h2 className="cityname">{props.city}</h2>
                        <i className={`wi ${props.weatherIcon} display-1`} />
                        {props.temp_celsius ?(<h1 className="temp">{props.temp_celsius}&deg;</h1>) : null}
                        {minmaxTemp(props.temp_min,props.temp_max)}                       
                        <h2 className="dayname">{props.description}</h2>
                    </Col>
                </Row>
            </Container>
        </div>
        </div>
        

    );
};

function error(){
    return(
        <div classname= "alert alert-danger mx-5" role="alert">
            Please enter city and country!
        </div>
    )
}

function minmaxTemp(min,max){
    if(min && max){
    return (
        <h3>
            <span className="px-4 temp1">{min}&deg;</span>
            <span className="px-4 temp1">{max}&deg;</span>
        </h3>
    );
    }
    
}
export default Weather;