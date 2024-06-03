import React from 'react'
import './about.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img  src={profile} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>As an enthusiastic and evolving Front-end Developer , I am actively seeking opportunities to contribute my skills and creatively to a collaborative development team. I am particularly interested in joining a team where i can leverage my current project experience to craft intuitive and visually appealing user interfaces, while continuously expanding my skill set in the field of Front-end development with a strong foundation in REACT and JAVASCRIPT.</p>
                    <p></p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS </p><hr style={{width:"90%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>ReactJs</p><hr style={{width:"60%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Javascript </p><hr style={{width:"60%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Bootstrap </p><hr style={{width:"50%"}}/>
                    </div>
                </div>
            </div> 
        </div>
        <div className="about-achievements">
                
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                {/* <div className="about-achievement">
                    <h1>3+</h1>
                    <p>DEPLOYED</p>
                </div> */}
            </div>
            
    </div>
  )
}

export default About