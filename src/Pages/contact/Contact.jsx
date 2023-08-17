import React from "react";
import pizzaLeft from "../../assets/pizzaleft.jpg";
import "./Contact.css"

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${pizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>CONTACT US</h1>
        <form id="contact-form" method="post">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" placeholder="Enter your Full Name.." />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter your Email.." />
          <label htmlFor="number">Phone Number</label>
          <input
            type="number"
            name="number"
            placeholder="Enter your Phone Number.."
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            cols="15"
            rows="6"
            placeholder="Enter your Message.."
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
