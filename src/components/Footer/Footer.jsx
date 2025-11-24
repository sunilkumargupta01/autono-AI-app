import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="subscribe">
      <h1>AUTONO</h1>
      <div className="footer-part">
        <div className="footer-part-list1">
          <ul>
            <li>Technology</li>
            <li>About</li>
            <li>Careers</li>
          </ul>
          <ul>
            <li>Tel: 123-456-7890</li>
            <li>Email: sunil@autono.com</li>
            <li>500 Terry Francine St San Francisco, CA 94158</li>
          </ul>
        </div>
        <div className="footer-part-list2">
          <h3>SUBSCRIBE</h3>
          <p>Sign up to receive Autono news and updates.</p>
          <div className="input-part">
            <label htmlFor="email">Email *</label>
            <input type="text" id="email" />
            <button>Subscribe</button>
          </div>
          <input type="checkbox" />
          <span>Yes, subscribe me to your newsletter. *</span>
        </div>
      </div>
      <p className="copyright">© 2035 by Autono. Powered and secured by Sunil.dev</p>
    </footer>
  );
};

export default Footer;
