import React, { useState } from 'react';
import {Link,NavLink} from 'react-router-dom';


const Navbar = () => {
 
    //defining statehook
    const [clicked,setClicked] =useState(true)
    const [scrClass,setScrClass]=useState('');
    

    //defining function handleclick
    const handleClick =()=>{
        setClicked(!clicked);
       
    }

    /* scroll event for navbar */
    window.addEventListener('scroll',function(){
        if(window.pageYOffset>80) {
            setScrClass('scroll-on');
        } else {
            setScrClass('');
        }
     })

    return (
       <nav className={scrClass}>
           <div className="logo">
            
              <Link to="/"><span><i class="fab fa-galactic-republic"></i></span>
              <span className="brand">Tech Services</span></Link>
           </div>
           <div className="toggleBtn" onClick={handleClick}>
           {clicked?<span ><i class="fas fa-bars"></i></span>: <span ><i class="fas fa-times"></i></span>}
          
           </div>
           <div className={clicked?"links":"links open"}>
               <ul >
                   <li ><NavLink exact activeClassName="active" to ="/">Home</NavLink></li>
                   <li><NavLink activeClassName="active" to ="/about">About</NavLink></li>
                   <li><NavLink activeClassName="active" to ="/services">Services</NavLink></li>
                   <li><NavLink activeClassName="active" to ="/contact">Contact</NavLink></li>
               </ul>
           </div>
       </nav>
    )
}

export default Navbar
