import React from 'react';
import Card from '../Components/Card';
import serviceData from '../Data.js';

const Services = () => {
    
    return (
        <main>
            <h1 id="services">Our Services</h1>
        
        <section className="services">
            {
                serviceData.map((data,index)=>{
                  return (
                    <Card data={data} index={index}/>
                  )
                })
            }
           
        </section>
      </main>
    )
}

export default Services
