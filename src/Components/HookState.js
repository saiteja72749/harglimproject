 import React, { useState } from 'react'
 
 function HookState() {
    const [name,setName]=useState({firstName:"",lastName:""})
   return (
     <form>
        <input type="text" 
        value={name.firstName} 
        onChange={e=>setName({... name,firstName:e.target.value})}/>
        <input type="text" 
        value={name.lastName}
        onChange={e=>setName({...name,lastName:e.target.value})}/>
        <h3>firstName is: {name.firstName}</h3>
        <h3>lastName is: {name.lastName}</h3>
        <h2>{JSON.stringify(name)}</h2>
     </form>
   )
 }
 
 export default HookState