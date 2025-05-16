// NewForm.jsx
import { useState, useRef, useEffect } from 'react'; // Added useEffect
import './NewForm.css';
import emailjs from '@emailjs/browser';
import owlgif from '../../Images/owl-gif.gif';

const NewForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',       
    phone: '',  
    email: '',
    subject: 'Website Design', 
    message: ''     
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ message: '', isError: false });

  // This effect will clear the status message after 4 seconds
  useEffect(() => {
    let timer;
    if (status.message) {
      timer = setTimeout(() => {
        setStatus({ message: '', isError: false });
      }, 4000); // 4 seconds
    }
    
    // Cleanup function to clear the timer if component unmounts
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [status.message]); // Run effect when status message changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ message: '', isError: false });

    // Add current time for the email template
    const formWithTime = {
      ...form.current,
      time: new Date().toLocaleString()
    };

    // Replace these with your actual EmailJS credentials
    emailjs.sendForm(
      'service_t1t7kqb', 
      'template_d72f7ua', 
      form.current, 
      '-UzTIlfx2uPhW3BV0'
    )
      .then((result) => {
        setStatus({ 
          message: 'Message sent successfully!', 
          isError: false 
        });
        setFormData({
          name: '',
          phone: '',
          email: '',
          subject: 'Website Design',
          message: ''
        });
      }, (error) => {
        console.error('Error sending email:', error);
        setStatus({ 
          message: 'Failed to send message. Please try again.', 
          isError: true 
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="new-contact-main">
      <div className="new-contact-container">
        <div className="new-contact-left">
          <h1 className="new-heading">
            <span className="new-heading-red">Grow your business</span> with our robust digital solutions.
          </h1>
          <p className="new-subheading">
            We consistently exceed our clients' expectations by providing high quality digital solutions. Get in touch with us get started!
          </p>
          <div className="new-expert-box">
            <div className="new-expert-image">
              <img src={owlgif} alt="Digital Expert" />
            </div>
            <div className="new-expert-info">
              <h2 className="new-phone-number">(+91) 9718269561</h2>
              <p className="new-talk-text">TALK TO AN EXPERT</p>
            </div>
          </div>
        </div>
        
        <div className="new-contact-right">
          <form ref={form} className="new-contact-form" onSubmit={sendEmail}>
            <div className="new-form-row">
              <div className="new-form-group">
                <label htmlFor="name">NAME</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="new-form-group">
                <label htmlFor="phone">PHONE NUMBER</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="new-form-row">
              <div className="new-form-group">
                <label htmlFor="email">EMAIL ADDRESS</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="new-form-group">
                <label htmlFor="subject">REQUIRED SERVICE</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="Website Design">Website Design</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="SEO Services">SEO Services</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                </select>
              </div>
            </div>
            
            <div className="new-form-group new-full-width">
              <label htmlFor="message">PROJECT DETAILS</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
              ></textarea>
            </div>
            
            {/* Hidden field to capture time for email template */}
            <input 
              type="hidden" 
              name="time" 
              value={new Date().toLocaleString()} 
            />
            
            {/* Optional: Add hidden budget field for email template if needed */}
            <input 
              type="hidden" 
              name="budget" 
              value="Not specified" 
            />
            
            <button 
              type="submit" 
              className="new-submit-button" 
              disabled={loading}
            >
              {loading ? 'SENDING...' : 'GET FREE QUOTE'}
            </button>
            
            {status.message && (
              <p className={`new-status-message ${status.isError ? 'new-error' : 'new-success'}`}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewForm;