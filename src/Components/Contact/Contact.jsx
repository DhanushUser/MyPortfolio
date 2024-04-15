import React from 'react'
import './contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "a7233fbe-0577-4153-940f-5a0f1bb5f637");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          alert("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

      
  return (

    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>    
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently seeking for a opportunity to improve my skills!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /><p>dhanushsamynathan07@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /><p>6380367182</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /><p>2/218, Murugan colony, Irumbarai(po), Mettupalayam taluk, coimbatore-638459</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your Name' name='name' required/>
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' required/>
                    <label htmlFor="">Write Your message here!</label>
                    <textarea name="message"   rows="8" placeholder='Enter your message'></textarea>
                    <div className="btns">
                        <button className='contact-submit' type='submit'>Submit Now</button>
                        <div className='contact-home'><AnchorLink className='anchor-link'  href='#home'>Back to Top </AnchorLink> </div>
                    </div>
                </form>
        </div>
    </div>

  )
}

export default Contact