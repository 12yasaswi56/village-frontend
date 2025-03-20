// import React from "react";
// import "../pageCSS/Contact.css"; // Import CSS file

// const Contact = () => {
//   return (
//     <div className="contact-container">
//       {/* Dark Transparent Overlay */}
//       <div className="overlay"></div>

//       {/* Contact Box */}
//       <div className="contact-box">
//         <h2>Contact Us</h2>
//         <p className="description">
//           Have questions or need support? Feel free to reach out!
//         </p>

//         <div className="contact-details">
//           <p><strong>Email:</strong> <a href="mailto:sushmasri.ch2003@gmail.com">sushmasri.ch2003@gmail.com</a></p>
//           <p><strong>Phone:</strong> +91 8332873989</p>
//           <p><strong>Address:</strong> VVIT-AIML Guntur</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import React from "react";
import "../pageCSS/Contact.css"; // Import the external CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Dark Transparent Overlay */}
      <div className="overlay"></div>

      {/* Contact Box */}
      <div className="contact-box">
        <h2>Contact Us</h2>
        <p className="description">
          Have questions or need support? Feel free to reach out!
        </p>

        <div className="contact-details">
          <p>
            <strong>Email:</strong> 
            <a href="mailto:sushmasri.ch2003@gmail.com"> sushmasri.ch2003@gmail.com</a>
          </p>
          <p><strong>Phone:</strong> +91 8332873989</p>
          <p><strong>Address:</strong> VVIT-AIML Guntur</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
