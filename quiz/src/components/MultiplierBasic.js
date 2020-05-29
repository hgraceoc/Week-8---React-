import React, { Component} from "react";


class MultiplierBasic extends Component {
    
    render() {
        const { x, y } = this.props;
        return (
            <>
            <h2 className="centered">Multiplying Hidden Props</h2>
            <p className="centered">{ this.props.x * this.props.y }</p>
            </>
        )
    }
}


MultiplierBasic.defaultProps = {
    x: 5,
    y: 7
}
        
        
export default MultiplierBasic;