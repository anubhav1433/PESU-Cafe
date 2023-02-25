import React, { Component } from 'react'
import Food from './food';
import myimg from '../img/honey.jpg';
import burger from '../img/choco.jpg';
import PANEER from '../img/donuts.jpg';

class Dessert extends Component {
    constructor() {
        super();
        
        this.pizza = React.createRef();
        this.burger = React.createRef();
        this.roll = React.createRef();
        this.state = { total: 0 ,
            currentt : "Place your order",
            next :  "Place Your order"
        }
        this.totalcost = this.totalcost.bind(this);
        this.timeupdate = this.timeupdate.bind(this);
        
    }

    render() {
        return (
            <div id="bill" onChange={this.totalcost}>
                <Food img={myimg} name="HONEY CAKE" price="30" ref={this.pizza} />
                <Food img={burger} name="CHOCO LAVA CAKE" price="50" ref={this.burger} />
                <Food img={PANEER} name="DOUGHNUT" price="50" ref={this.roll} />
                <h5> Your total bill summary = {this.state.total} INR </h5>
                <h5>Order Time : {this.state.currentt}</h5>
                <h5>Your Unique Order Code is : {this.state.next}</h5>
                <h5>Kindly show this code and take your order</h5>
                <button onClick = {this.timeupdate}>Order Now</button>

            </div>
        )
    }
    totalcost() {
        this.setState(() => ({
            total:(this.pizza.current.quantity.current.value * this.pizza.current.props.price) +
                (this.burger.current.quantity.current.value * this.burger.current.props.price) +
                (this.roll.current.quantity.current.value * this.roll.current.props.price)
        }))
    }

    timeupdate() {
        var urrentt = new Date();
        var ext = new Date()
        ext.setHours(ext.getHours()+1);
        console.log(ext.toLocaleTimeString())
        var currenttime = urrentt.toLocaleTimeString();
        var nexttime = 1000;
        nexttime=nexttime+1;
        this.setState({currentt : currenttime, next : nexttime})
        
    }
}

export default Dessert