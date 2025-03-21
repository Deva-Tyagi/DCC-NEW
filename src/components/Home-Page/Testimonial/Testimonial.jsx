// App.js
import React, { useState } from "react";
import "./Testimonial.css";

const testimonials = [
  {
    company: "Alliance Communication Services",
    user: {
      name: "Devin Tustin",
      title: "President",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg",
    },
    backgroundImage: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg",
    feedback: "You're a great team and I'm very happy with the product you guys produced!",
  },
  {
    company: "Human Touch",
    user: {
      name: "Victoria Lladoc",
      title: "Head of Marketing",
      image: "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
    },
    backgroundImage: "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
    feedback: "They helped us develop an app that's gonna change a lot what we do in our business!",
  },
  {
    company: "TrippleTech",
    user: {
      name: "Karim S.",
      title: "CEO",
      image: "https://img.freepik.com/free-photo/young-adult-man-wearing-hoodie-beanie_23-2149393636.jpg",
    },
    backgroundImage: "https://img.freepik.com/free-photo/young-adult-man-wearing-hoodie-beanie_23-2149393636.jpg",
    feedback: "We would be nowhere without their excellent problem-solving approach!",
  },
  {
    company: "Future Innovators",
    user: {
      name: "Sophia L.",
      title: "CTO",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/570a1745898621.58408191aee7a.jpg",
    },
    backgroundImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/570a1745898621.58408191aee7a.jpg",
    feedback: "Their solutions are innovative and impactful!",
  },
  
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div
      className="testimonial-card"
      style={{ backgroundImage: `url(${testimonial.backgroundImage})` }}
    >
      <div className="card-content">
        <h3>{testimonial.company}</h3>
        <p className="feedback">{testimonial.feedback}</p>
        <div className="user-details">
          <img
            src={testimonial.user.image}
            alt={`${testimonial.user.name}`}
            className="user-image"
          />
          <div>
            <h4>{testimonial.user.name}</h4>
            <p>{testimonial.user.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 3
  );

  return (
    <>
    <div className="testimonial-container">
        <div className="testmonial-header">
        <h2>AUTHENTIC STORIES, REMARKABLE CHANGE</h2>
         <p>See how DCC transforms businesses with stunning UX design, cutting-edge web development, smart product optimization, and dedicated support—helping you stand out and grow.</p>
        </div>
      <h3>EXCEEDING EXPECTATIONS, DELIVERING EXCELLENCE</h3>
      <div className="testimonial-slider">
        {visibleTestimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
      <div className="controls">
        <button onClick={handlePrev} className="arrow-button">
          &#8592;
        </button>
        <div className="progress-bar">
          <div
            className="progress"
            style={{
              width: `${((currentIndex + 3) / testimonials.length) * 100}%`,
            }}
          ></div>
        </div>
        <button onClick={handleNext} className="arrow-button">
          &#8594;
        </button>
      </div>
    </div>
    </>
  );
};

export default Testimonial;
