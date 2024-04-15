import React from 'react'
import './services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import services_data from '../../assets/services_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'



const Services = () => {

  const handleRead = ()=>{
    
  }
  return (
    
    <div id='services' className='services'>
      
      <div className="services-title">
        <h1>My Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {services_data.map((service,index)=> {
          return <div key={index} className='service-format'>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className='services-readmore'>
             <p onClick={handleRead}>Read More</p>  
              <img src={arrow_icon} alt="" />
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Services