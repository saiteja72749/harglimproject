import React,{Component} from 'react'
class Count extends Component{
    constructor(props){
        super(props)
        this.state={
            count: 0
        }
    }
    increment(){
        this.setState(
            {
            count: this.state.count+1
        },()=>{console.log('callback value',this.state.count)}
        ) 
        console.log(this.state.count)
    }

    decrement(){
        this.setState(
            {
            count:this.state.count-1
        },()=>{console.log("callback value",this.state.count)}
        )
    }

    initial(){
        this.setState({
            count:0
        },()=>{console.log("callback value",this.state.count)}
        )
    }
//     this.setState((prevState)=>({
//         count: prevState.count+1
//     }))
//     console.log(this.state.count)
// }
    render(){
        return(
            <div>
                {this.state.count}
                <button onClick={()=>this.increment()}>increment</button>
                <button onClick={()=>this.decrement()}>decrement</button>
                <button onClick={()=>this.initial()}>reset</button>
            </div>
        )
    }
}
export default Count