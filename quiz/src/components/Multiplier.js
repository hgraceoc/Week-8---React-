import React, { Component} from "react";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class Multiplier extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            x: this.props.x,
            y: this.props.y
        };

        this.handleChangeX = this.handleChangeX.bind(this);
        this.handleChangeY = this.handleChangeY.bind(this);
    }


    handleChangeX(e) {
        this.setState({ x: e.currentTarget.value });
    }

    handleChangeY(e) {
        this.setState({ y: e.currentTarget.value })
    }


render() {
    return (
        <div className="centered">
             <Form>
                <Row>
                    <h2 class="centered">Multiply!</h2>
                </Row>
                <Row>
                    <Col>
                    <Form.Control placeholder="NumberOne" 
                        value={this.state.x} 
                        onChange={(e) => this.handleChangeX(e)}
                        placeholder="Number"/> 
                    </Col>
                    <Col>
                    <Form.Control placeholder="NumberTwo" 
                        value={this.state.y}
                        onChange={(e) => this.handleChangeY(e)}
                        placeholder="Number"/>
                    </Col>
                </Row>
                <Row>
                    <p className="centered">Total {(this.state.x * this.state.y)}</p>
                </Row>
            </Form>
            
        </div>
    )
}
}

Multiplier.defaultProps = {
    x: 5,
    y: 7
}


export default Multiplier;