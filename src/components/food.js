import React, { Component } from 'react'

class Food extends Component {
    constructor() {
        super();
        this.quantity = React.createRef();
        
    }
    render() {
        const imgstyle = {
            width: "200px",
            height: "200px"
        };

        return (
            <div style={{ display: "inline-block", padding: "40px" }}>
                <form>
                    <img src={this.props.img} style={imgstyle} />

                    <p>Name : {this.props.name}</p>
                    <p>Price : {this.props.price}</p>
                    <label>Quantity : <input type="text" ref={this.quantity} /></label>
                </form>

            </div>
        )
    }
}

export default Food