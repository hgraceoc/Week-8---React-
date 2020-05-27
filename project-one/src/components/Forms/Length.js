import React, { Component} from "react";

class Length extends Component {
    constructor(props) {
        super(props);

        this.state = { input: ""};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value });
    }

    render() {
        return (
            <form class="centered form">
                <label for="Length"></label>
                <input 
                    value={this.state.input} 
                    onChange={(e) => this.handleChange(e)}/>
                    <p class="section_heading" >Input Length: {this.state.input.length}</p>
            </form>
        )
    }
}


export default Length;