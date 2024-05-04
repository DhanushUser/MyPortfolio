import React from 'react'
import './mywork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'





const Mywork = ({setMenu}) => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <div className='container mx-2 '>
                    
                        <div className="card overflow-hidden w-100  " >
                            <div className="col ">
                                    <img key={index} src={work.w_img} alt="" className="w-100 "/>
                                    
                                <div className=" card-body w-90 ">
                                {/* <h5 className="card-title"> {work.w_name}</h5> */}
                                {/* <p>{work.w_des}</p> */}
                                    {/* <a href={work.w_link} target='_blank' className=' text-decoration-none justify-content-between '> <i class='bx bxl-github bg-dark rounded-circle ' ></i></a> */}
                                    <a href={work.w_link} target='_blank' className=' text-decoration-none justify-content-between float-end  mb-3'> Preview<i class='bx bxl-netlify'></i></a>
                            </div>
                            </div>
                            <div className="card-hover">
                            <h5>Project {work.w_no}</h5>
                            <p>{work.w_name}</p>
                        </div>
                        </div>
                       
                   
                </div>
                
            })}

            
        </div>
        <div className="mywork-showmore  ">
            <p className=' mt-2 '>Show More</p> 
            <img className='mb-1' width={20}  src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default Mywork