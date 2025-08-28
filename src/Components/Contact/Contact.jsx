import './Contact.css'
import msg_icon from '/assets/msg-icon.png'
import mail_icon from '/assets/mail-icon.png'
import phone_icon from '/assets/phone-icon.png'
import location_icon from '/assets/location-icon.png'
import white_arrow from '/assets/white-arrow.png'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="message icon" /></h3>
        <p>Feel free to reach out through contact form or find our contact 
            information below. Your feedback, questions, and suggestions are 
            important to us as we strive to provide exceptional service to our 
            university community.
        </p>
        <ul>
            <li><img src={mail_icon} alt="mail icon" />yjesse330@gmail.com</li>
            <li><img src={phone_icon} alt="phone icon" />+234 907 337 2467</li>
            <li><img src={location_icon} alt="location icon" />Lagos, Nigeria</li>
        </ul>
      </div>
      <div className="contact-col">
        <form action="https://formsubmit.co/youngjesse041@gmail.com" method='POST'>
            <label htmlFor="name">Your Name</label>
            <input type="text" name="name" placeholder='Enter your name' required/>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" name="phone" placeholder='Enter your mobile number' required/>
            <label htmlFor="name">Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>

            {/* honeypot field */}
            <input type="text" name='_honey' style={{display:"none"}}/>

            <input type="hidden" name="_captcha" value="false" />
            {/* <input type="hidden" name='_next' value=""/> */}
            <input type="hidden" name="_template" value="table" />

            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="right arrow" /></button>
        </form>
        <span></span>
      </div>
    </div>
  )
}

export default Contact