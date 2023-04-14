import React, {useState} from 'react'

function CountHooks() {
    const [count,setCount]=useState(0)
    const func=(()=>{
        setCount(count+1)
    })
    console.log("callback value",count)
  return (
    <div>
        <button onClick={func}>Click {count}</button>
    </div>
  )
}

export default CountHooks