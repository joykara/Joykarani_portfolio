import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import { BsArrowUpCircle } from 'react-icons/bs';
import toast from 'react-hot-toast';
// import { db } from '../../firebase/config';

const Contact = () => {
  // scroll back to top arrow
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  window.addEventListener('scroll', checkScrollTop);

  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      message,
      number,
      date
    };

    // set up contact form email.js
    emailjs.send('service_kzc70se', 'template_57v5le9', formData, 'yhqWQg8mSZDeU8lc-' )
    .then((res) => {
        toast.success('Message has been submitted');
        console.log('Success!', res.data);
    setName('');
    setEmail('');
    setMessage('');
    setDate('');
    setNumber('');
    })
    .catch((error) => {
      toast.error('Error submitting message');
      console.log('Error!', error);
    });
  };


  return (
    <>
    <div className="contact-container" id='contact'>
        <form className="contact-form" onSubmit={handleSubmit} ref={form}>
              <h4>CONNECT WITH ME</h4>
              <hr />
              <p>Please fill out the form below, and we'll be in touch.</p>

              <div className="contact-form-input">
                <label>NAME <span>(required)</span></label>
                  <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value) } required/>
              </div>

              <div className="contact-form-input">
                <label>PHONE NUMBER</label>
                  <input type="tel" placeholder="Number" value={number} onChange={(e) => setNumber(e.target.value) } required/>
              </div>

              <div className="contact-form-input">
                <label>EMAIL <span>(required)</span></label>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value) } required/>
              </div>

              <div className="contact-form-input" id='date'>
                <label>DATE</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
              </div>

              <div className="contact-form-input">
                <label>MESSAGE <span>(required)</span></label>
                <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value) } required></textarea>
              </div>

              <button type="submit">Submit</button>
          </form>
      {/* scroll to top icon */}
      <div className="scrollTop" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ display: 'flex' }}>
        <BsArrowUpCircle color='black'/>
      </div>
    </div>
    </>
    
  )
}

export default Contact