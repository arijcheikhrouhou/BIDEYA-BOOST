import React from "react";
import "./Contact.css"; 
import gmailIcon from "../assets/gmail.png";
import officeIcon from "../assets/map.png";
import phoneIcon from "../assets/phone.png";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">

        {/* Left Section - Contact Info */}
        <div className="contact-info">
          <h2>Get in touch</h2>
          <p>Feel free to reach out to us for any questions, support, or inquiries!</p>

          <div className="contact-detail">
            <img src={officeIcon} alt="office" />
            <div>
              <h3>Head office</h3>
              <p>Institut supérieur d’informatique de Mahdia (ISIMa) - Hiboun 5111</p>
            </div>
          </div>

          <div className="contact-detail">
            <img src={gmailIcon} alt="Email" />
            <div>
              <h3>Email us</h3>
              <p>enactusISIMa2024-2025@gmail.com</p>
              <p>porteurdeprojet@gmail.com</p>
            </div>
          </div>

          <div className="contact-detail">
            <img src={phoneIcon} alt="Phone" />
            <div>
              <h3>Call us</h3>
              <p>Phone: +216 99-999-999</p>
              <p>Fax: +216 88-888-888</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="social-media">
            <h3>Follow us on social media</h3>
            <div className="social-icons">
              <img src="/icons/facebook.png" alt="Facebook" />
              <img src="/icons/instagram.png" alt="Instagram" />
              <img src="/icons/x.png" alt="X (Twitter)" />
              <img src="/icons/youtube.png" alt="YouTube" />
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="contact-form">
          <h2>Send us a message</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>

            <div className="form-group">
              <input type="text" placeholder="Phone" />
              <input type="email" placeholder="Email" />
            </div>

            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Bideya Boost. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
