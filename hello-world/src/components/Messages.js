import React, { Component } from 'react'

//using state: before using state hence ability to change message, create a constructor inside the class

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: "Welcome visitor"
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    render() {
        return(
            //creating a button to change message via html
            // <h1>Welcome Visitor</h1>
            <div>
               <h1>{this.state.message}</h1>
               <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
            
        )
    }
}

export default Message