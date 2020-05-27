import React, { Component} from "react";

class PasswordStrength extends Component {
    constructor(props) {
        super(props);

        this.state = { input: ""};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value });
    }

    backgroundColour() {
        let style;
        let length = this.state.input.length;
        if (length < 9) {
            return style = {borderColor:"red"};
        }
    }

    render() {
        
        return (
            <form class="centered form">
                <label for="Password">Password</label>
                <input 
                    type="password"
                    value={this.state.input} 
                    style={this.backgroundColour()}
                    onChange={(e) => this.handleChange(e)}/>        
            </form>
        )
    }
}


export default PasswordStrength;