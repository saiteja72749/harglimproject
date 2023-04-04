import React, { Component } from 'react'

export class Ref2 extends Component {
    constructor(props) {
      super(props)
        this.inputRef=React.createRef()
        this.cbRef=null
        this.setcbRef=element=>{
            this.cbRef=element
        }
    }
    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }
    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }

  render() {
    return (
        <center>
      <div>
        {/* <input type="text" ref={this.inputRef}/> */}
        <input type="text" ref={this.setcbRef}/>
        <button onClick={this.clickHandler}>Click</button>
      </div>
      </center>
    )
  }
}

export default Ref2