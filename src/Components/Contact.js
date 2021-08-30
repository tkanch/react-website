import React, { useState } from 'react'

const Contact = () => {

    //defining state

    const [data,setData] = useState({
        fullname:'',
        email:'',
        phnum:'',
        msg:''
    })

    
    //defining event functions

    const submitEvent =(e)=>{
        e.preventDefault();
         window.alert(` Form is submitted successfully and your info are as follows:
                        Your name is ${data.fullname}
                        Your email is ${data.email}
                        your phone number is ${data.phnum}
                        your message is ${data.msg}`
           )
         
}

    const inputEvent =(e)=>{
       const inputData={
           name:e.target.name,
           value:e.target.value
       }

       const name=inputData.name
       const value=inputData.value

        setData((prevval)=>{
            return {
                ...prevval,
                [name]:value
                
            }
        })
    }


    return (
        <main>
            <h1 id="services">Contact Us</h1>
        
        <form onSubmit={submitEvent}>
            <label htmlFor="name">Full Name</label>
            <input 
            type="text" 
            id="name" 
            placeholder="Enter your name"
            value={data.fullname}
            onChange={inputEvent}
            name="fullname"
            required
            />
            <label htmlFor="email">Email Address</label>
            <input 
            type="email" 
            id="email"
            placeholder="Enter your email"
            value={data.email}
            onChange={inputEvent}
            name="email"
            required
            />
            <label htmlFor="phnum">Phone Number</label>
            <input 
            type="number" 
            id="phnum"
            placeholder="Enter your phone number"
            value={data.phnum}
            onChange={inputEvent}
            name="phnum"
            required
            />
            <label htmlFor="msg">Message</label>
            <textarea  
            id="msg" 
           value={data.message}
           onChange={inputEvent}
           name="msg"
           required
            ></textarea>
            <button>Submit</button>
          </form>
         
      </main>
    )
}

export default Contact
