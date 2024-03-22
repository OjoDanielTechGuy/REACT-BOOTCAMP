import React, { Component } from 'react'

class EventBind extends Component {

  constructor(props) {
    super(props)
  
    this.state = { 
       message: 'Hello'
    }
      this.clickHandler = this.clickHandler.bind(this)
  }
  
  clickHandler(){
    //the below gives out error hence event binding is introduce in the render method by "bind" attached to the method called
    this.setState({
        message: 'Welcome'
    })

    console.log(this)
  }

    render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler}>Click</button> */}
        
        {/*Approach in using event binding, Approach 1- using bind method*/}
        <button onClick={this.clickHandler.bind(this)}>Click</button>

        <br/>

        {/* Approach 2 - using arrow function */}
        <button onClick={() => this.clickHandler()}>Arrow Binding Function Click</button>

        <br/>
        
        {/* Approach 3 - recommended approach to binding binding in the constructor*/}
        <button onClick={this.clickHandler}>Approach 3 Click</button>
        
      </div>
    )
  }
}

export default EventBind