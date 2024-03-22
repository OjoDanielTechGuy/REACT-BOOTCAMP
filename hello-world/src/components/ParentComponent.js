import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       parentName: 'parent'
    }

    this.greetParent = this.greetParent.bind(this)

  }

  greetParent(chidlName) {
    // alert('Hello' + this.state.parentName)
    //using template literals only applicable to ES6
    alert(`Hello ${this.state.parentName} from ${chidlName}`)
  }

    render() {
    return (
      <div>
        <ChildComponent greetHandler = {this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent