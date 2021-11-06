import React from "react";
import emailjs from "emailjs-com";
import "./style.views.contactUs.css";
import contactUs from "../../assets/contactUs.svg";
import ContactCard from "../../components/widgets/Cards/ContactCard";
import QuickContactCard from "../../components/widgets/Cards/QuickContactCard";
// import GoogleMaps from '../../components/section-components/GoogleMaps/map';

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_2sx8z2g",
        e.target,
        "user_e7Ry2mTzH1Sc6BT5atsJW"
      )
      .then((res) => {
        if (res.status === 200) alert("Thank You! Your Message has been sent!");
        else alert("Error !");
      })
      .catch((err) => {
        console.log(err);
      });
    e.target.reset();
  }
  return (
    <div className="contact-us-section-wrapper">
      <p className="contact-us-section-title gradient-text">Contact Us</p>

      <div className="contact-us-send-message-and-map-wrapper">
        <div className="contact-us-send-message-us-wrapper">
          <p className="send-message-us-title">Send Message Us</p>
          <p className="send-message-us-description">
            Having some questions? Don’t miss your problem
          </p>
          <form className="contact-us-form-wrapper" onSubmit={sendEmail}>
            <label htmlFor="name">
              Name :
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="name-input"
              />
            </label>
            <label htmlFor="email">
              Email i'd :
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email i'd"
                className="email-input"
              />
            </label>
            <label htmlFor="message">
              Message :
              <textarea
                name="message"
                cols="47"
                rows="5 "
                placeholder="Enter your message"
              ></textarea>
            </label>
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </form>
        </div>
        <div className="contact-illustration-wrapper">
          <img src={contactUs} alt="contactImage" />
        </div>
      </div>

      <div className="contact-us-company-details-container">
        <div className="contact-us-company-address-card-wrapper">
          <p className="contact-us-company-address-card-title">Quick Contact</p>
          <p className="contact-us-company-address-card-description">
            If you have any questions simply use the following contact details.
          </p>
          <div className="quick-card-component-wrapper">
            <QuickContactCard
              startIcon="fas fa-map-marker-alt"
              title="ADDRESS :"
              description="32-33/ 7-B Industrial Area No. 1 , A.B Road Dewas, Madhya Pradesh, 455001"
            />
            <QuickContactCard
              startIcon="fas fa-envelope-open"
              title="EMAIL :"
              description="vrinddewas@gmail.com"
            />
            <QuickContactCard
              startIcon="fas fa-mobile-alt"
              title="PHONE :"
              description="+91 7049493600 "
            />
          </div>
        </div>
        <div className="contact-us-google-map-location-wrapper">
          <iframe
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=VR Industries Dewas&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
      </div>
      <div className="card-component-admin-details-wrapper">
        <ContactCard
          nameIcon="fas fa-user"
          Name="Vinay Jain"
          numberIcon="fas fa-phone"
          Number="+91 7049493600"
          emailIcon="fas fa-envelope"
          Email="vinay30vnj@gmail.com"
        />
        <ContactCard
          nameIcon="fas fa-user"
          Name="Rajesh Mehta"
          numberIcon="fas fa-phone"
          Number="+91 9425494249"
          emailIcon="fas fa-envelope"
          Email="rmehta.sv@gmail.com"
        />
        <ContactCard
          nameIcon="fas fa-user"
          Name="Rahil Jain "
          numberIcon="fas fa-phone"
          Number="+91 9165690656"
          emailIcon="fas fa-envelope"
          Email="rahiljain33@gmail.com"
        />
      </div>
    </div>
  );
}
