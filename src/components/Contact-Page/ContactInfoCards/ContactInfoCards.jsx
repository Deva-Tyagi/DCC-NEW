import React, { useState } from 'react';
import './ContactInfoCards.css';
import emailjs from 'emailjs-com';

const ContactInfoCards = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const contactInfo = [
    {
      icon: "📅",
      title: "Schedule a Consultation",
      description: "Free 30-minute discovery call",
      details: "Discuss your project needs with our team",
      linkText: "Book Now",
      action: () => setIsCalendarOpen(true)
    },
    {
      icon: "📞",
      title: "Call Us",
      description: "Mon-Fri from 8am to 5pm",
      details: "+91 9718269561",
      linkText: "Call Now",
      href: "tel:+15551234567"
    },
    {
      icon: "✉️",
      title: "Email Us",
      description: "We'll respond within 24 hours",
      details: "hello@digitalcraft.co",
      linkText: "Send Email",
      href: "mailto:hello@digitalcraft.co"
    },
  ];

  // Get dates for next 14 days
  const getNextTwoWeeks = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      
      // Skip weekends
      if (nextDate.getDay() !== 0 && nextDate.getDay() !== 6) {
        const formattedDate = nextDate.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short', 
          day: 'numeric'
        });
        dates.push(formattedDate);
      }
    }
    return dates;
  };

  const availableTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const templateParams = {
      name,
      email,
      date: selectedDate,
      time: selectedTime,
      message
    };

    emailjs.send(
      'service_t1t7kqb',  
      'template_d72f7ua', 
      templateParams,
      '-UzTIlfx2uPhW3BV0'      
    )
    .then((response) => {
      setIsSubmitting(false);
      setSubmitMessage('Consultation scheduled! We will confirm shortly.');
      
      // Reset form after 3 seconds and close popup
      setTimeout(() => {
        setSelectedDate('');
        setSelectedTime('');
        setName('');
        setEmail('');
        setMessage('');
        setSubmitMessage('');
        setIsCalendarOpen(false);
      }, 2000);
    })
    .catch((error) => {
      setIsSubmitting(false);
      setSubmitMessage('Something went wrong. Please try again.');
    });
  };

  return (
    <section className="contact-info-cards">
      <div className="contact-info-container">
        <div className="contact-info-header">
          <h2>Get in Touch</h2>
          <p>Multiple ways to reach us. Choose what works best for you.</p>
        </div>
        <div className="contact-info-grid">
          {contactInfo.map((item, index) => (
            <div key={index} className="contact-info-card">
              <div className="contact-info-icon">
                <span>{item.icon}</span>
              </div>
              <div className="contact-info-content">
                <h3>{item.title}</h3>
                <p className="contact-info-description">{item.description}</p>
                <p className="contact-info-details">{item.details}</p>
                {item.href ? (
                  <a href={item.href} className="contact-info-link">
                    {item.linkText}
                    <span className="contact-info-arrow">→</span>
                  </a>
                ) : (
                  <button onClick={item.action} className="contact-info-link contact-info-button">
                    {item.linkText}
                    <span className="contact-info-arrow">→</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar Popup Modal */}
      {isCalendarOpen && (
        <div className="calendar-modal-overlay">
          <div className="calendar-modal">
            <button className="close-modal" onClick={() => setIsCalendarOpen(false)}>×</button>
            <h2>Schedule Your Consultation</h2>
            <p>Select a date and time for your free 30-minute discovery call</p>
            
            <form onSubmit={handleSubmit} className="consultation-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </div>
              
              <div className="form-group calendar-dates">
                <label>Select Date</label>
                <div className="date-options">
                  {getNextTwoWeeks().map((date, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`date-option ${selectedDate === date ? 'selected' : ''}`}
                      onClick={() => setSelectedDate(date)}
                    >
                      {date}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="form-group time-slots">
                <label>Select Time</label>
                <div className="time-options">
                  {availableTimes.map((time, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`time-option ${selectedTime === time ? 'selected' : ''}`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Additional Notes (optional)</label>
                <textarea 
                  id="message" 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)}
                  rows="3"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="submit-button"
                disabled={!name || !email || !selectedDate || !selectedTime || isSubmitting}
              >
                {isSubmitting ? 'Scheduling...' : 'Schedule Consultation'}
              </button>
              
              {submitMessage && <p className="submit-message">{submitMessage}</p>}
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactInfoCards;