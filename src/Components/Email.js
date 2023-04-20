import React,{useRef} from "react";
import emailjs from 'emailjs-com';
export const Gmail=()=>{
    const form=useRef();

const sendEmail=(e)=>{
    e.preventDefault();
    e.target.reset()
    emailjs.sendForm('service_4aoupwu','template_x1ciibj',form.current,'JFEB9cka8w0T7GpPH')
    .then((result)=>{
        console.log(result.text)
    },(error)=>{
        console.log(error.text)
    })
    console.log('mail sent')
}
    return(
    <form ref={form} onSubmit={sendEmail}>
        <center>
        <label>name</label>
        <input type='text' name='user_name'/>
        <br/>
        <label>email</label>
        <input type='email' name='user_name'/>
        <br/>
        <label>Message</label>
        <textarea name='message'/>
        <br/>
        <button name='user_name'>submit</button>
        </center>
    </form>
    )
}
