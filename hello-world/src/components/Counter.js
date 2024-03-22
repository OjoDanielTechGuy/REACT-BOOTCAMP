import React, {Component} from 'react'

//(rce)
class Counter extends Component {    
    //constructor (rconst)
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increment() {
        //do not modify state variable directly instead make use of setState
        // this.state.count = this.state.count + 1

        //setState method have to be used for display of the state performance
        this.setState({
            count: this.state.count + 1
        },
        () => {

            //place code withing the setState 
            console.log('Callback value', this.state.count)
        }
        )

        console.log(this.state.count)
    }
    
    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() =>this.increment()}>Increment</button>
                
            
            </div>
        )
    }
}

export default Counter