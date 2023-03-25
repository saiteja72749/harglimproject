import React, { Component } from 'react'
class Form extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         username:" ",
         password:" "

      }
    }
   
    handleUsernameChange=(event)=>{
        this.setState({
            username: event.target.value
        })
    }
    handleCommentChange=(event)=>{
        this.setState({
            comment: event.target.value
        })
    }
    // handleTopicChange=(event)=>{
    //     this.setState({
    //        topic: event.target.value 
    //     })
    // }
    handleSubmit=(event)=>{
      
        // alert(`development is in pending`)
        // ${this.state.topic}
        event.preventDefault()
    }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <h1>WELCOME TO HARGLIM</h1>
          <h4>enter your login credentials to move further</h4>
      <div>
        <label>UserName: </label>
        <input type='text' 
        value={this.state.username} 
        onChange={this.handleUsernameChange}/>
       </div>
       <div>
        <label>Password: </label>
        <input type='Password' value={this.state.comment} 
            onChange={this.handleCommentChange}/>
       </div>
       {/* <div>
        <label>Topic</label>
        <select value={this.state.topic}
        onChange={this.handleTopicChange}>
            <option value="cricket">Cricket</option>
            <option value="BasketBall">BasketBall</option>
            <option value="Badminton">Badminton</option>
        </select>
       </div> */}
       
        <button type='submit'>Login</button>
      </form>
    )
  }
}

export default Form