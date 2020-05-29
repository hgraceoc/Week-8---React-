import React, { Component} from "react";

import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class MinimumLength extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            input: "",
            length: 0
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value });
    }
  


    render() {
        let length = 30;
        return (

        <Form>
        <Row>
            <h2 className="centered">Multiply!</h2>
        </Row>
        <Row>
            <Col>
            <Form.Control placeholder="Thirty Plus Please" 
                value={this.state.input} 
                onChange={(e) => this.handleChange(e)}/>
            </Col>
        </Row>
        <Row className="marg">
        { this.state.input.length < length ? 
        <Alert className="centered" variant="info">
            This is simply not long enough
          </Alert> : null }
        </Row>
        </Form>
        )
    }
}



export default MinimumLength;