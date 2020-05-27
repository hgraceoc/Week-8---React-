import React, { Component} from "react";

class TempConverter extends Component {
    constructor(props) {
        super(props);

        this.state = { celsius: 0};

        this.handleChangeCelsius = this.handleChangeCelsius.bind(this);
        this.handleChangeFarenheit = this.handleChangeFarenheit.bind(this);
        this.celsiusToF = this.celsiusToF.bind(this);

    }

    handleChangeCelsius(e) {
        this.setState({ celsius: e.currentTarget.value });
    }

    handleChangeFarenheit(e) {
        this.setState({ celsius: this.farenheitToC(e.currentTarget.value) });
    }

    celsiusToF(num) {
            return num*9/5+32;
    }

    farenheitToC(num) {
            return ((num-32)*5/9);
    }

    render() {
        
        return (
            <form class="centered form">
                <label for="TempConverter">Temp Converter</label>
                <input class="c"
                    value={this.state.celsius} 
                    onChange={(e) => this.handleChangeCelsius(e)}
                    placeholder="Celsius"/>  

                <input class="f"
                    value={this.celsiusToF(this.state.celsius)}
                    onChange={(e) => this.handleChangeFarenheit(e)}
                    placeholder="Farenheit"/>    
            </form>
        )
    }
}


export default TempConverter;