import React from "react";
import "./TestimonialsComponent.css"; // Create a CSS file for styling

const testimonials = [
  { id: 1, name: "John Doe", text: "Great service!" },
  { id: 2, name: "Jane Smith", text: "Very helpful!" },
];

const TestimonialsComponent = () => {
  return (
    <div className="testimonials-container">
      <h2>Testimonials</h2>
      <div className="testimonials-carousel">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p>"{testimonial.text}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsComponent;
