import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contect = () => {


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a1a26feb-6073-4fc3-a4cb-f27c2a8cdff9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert(res.message)
    }
  };




  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veniam beatae vero saepe doloribus ipsa sequi laborum, esse quasi voluptates! Commodi soluta ut doloribus a! Expedita fugiat maiores voluptatibus. Ut?</p>
       
        <div className="contact-details">
          <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>leukvirapha13@gmail.com</p>
          </div>
          <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+855 93 906 564</p>
          </div>
          <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Teuk Thal, Sen Sok, Phnom Penh</p>
          </div>
        </div>
      </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name ' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message'></textarea>

          <button type='submit' className='contact-submit'>Submit Now</button>
        </form>

      </div>
    </div>
  )
}

export default Contect
