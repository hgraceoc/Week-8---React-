import React, { Component} from "react";

class List extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            value: "",
            list: [] 
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        }

    handleChange(e) {
        this.setState({ list: e.currentTarget.value });
      }

    handleClick(e) {
        let currentList = this.state.list;

        e.preventDefault();
        let listItems = [...this.state.list];
        this.setState({ items: listItems })
        
    }
    
    render() {
        
        return (
            <div className="centered list">
                <form>
                    <label for="list">Add to the list:</label>
                    <input
                        onChange={(e) => this.handleChange(e)}
                        value={ this.state.list }/>
                </form>
                <button onClick={this.handleClick}>Add Item</button>
                <ul className="section_heading">List Items</ul>
                <li></li>
                
                    
            </div>
        )
    }



    }



export default List;