import React, { Component } from 'react'

class CountMini extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increment(){
        this.setState({
            count: this.state.count+1
        },()=>{console.log("callback value",this.state.count)})
        console.log(this.state.count)
    }
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={()=>{this.increment()}}>click</button>
      </div>
    )
  }
}

export default CountMini