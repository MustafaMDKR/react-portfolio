import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaFacebookMessenger, FaWhatsapp} from 'react-icons/fa'


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Let's Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>mustafamdkr@gmail.com</h5>
            <a href="mailto:mustafamdkr@gmail.com" target='_blank'>send a message</a>
          </article>

          <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Mustafa Madkour</h5>
            <a href="https://m.me/mustafa.madkour.7" target='_blank'>send a message</a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+2 0128 091 8403</h5>
            <a href="https://api.whatsapp.com/send?phone=00201280918403" target='_blank'>send a message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact