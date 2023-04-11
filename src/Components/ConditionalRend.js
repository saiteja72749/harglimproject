import React, { Component } from 'react'
class ConditionalRend extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
        }
    }

  render() {
    return this.state.isLoggedIn && <div>Hello Sai</div>


    // return this.state.isLoggedIn ? (
    //     <div>Hello Sai</div>
    // ):
    // (
    //     <div>Hello Teja</div>
    // )


    // let message
    // if(this.state.isLoggedIn){
    //     message=<div>Hello Sai</div>
    // }
    // else{
    //     message=<div>Hello Teja</div>
    // }
    // return <div>{message}</div>
   

    //  if(this.state.isLoggedIn){
    //     return <div>Hello Sai</div>
    // }
    // else{
    //     return <div>Hello Teja</div>
    // }


    // return (
    //   <div>
    //     <div>Hello Sai</div>
    //     <div>Hello Teja</div>
    //   </div>
    // )
  
}
}

export default ConditionalRend