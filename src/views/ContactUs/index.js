import React from "react";
import "./style.views.contactUs.css";
import contactUs from "../../assets/contactUs.svg";
import ContactCard from "../../components/widgets/Cards/ContactCard";
import { Box } from "@chakra-ui/react";

export default function ContactUs() {
  return (
    <div className="contact-us-section-wrapper">
      <p className="contact-us-section-title gradient-text">Contact Us</p>

      <div className="contact-details-container">
        <div className="card-component-wrapper">
          <ContactCard
            nameIcon="fas fa-user"
            Name="Ayush Soni"
            numberIcon="fas fa-phone"
            Number="+91 9644963410"
            emailIcon="fas fa-envelope"
            Email="mr.soni1002001@gmail.com"
          />
          <ContactCard
            nameIcon="fas fa-user"
            Name="Ayush Soni"
            numberIcon="fas fa-phone"
            Number="+91 9644963410"
            emailIcon="fas fa-envelope"
            Email="mr.soni1002001@gmail.com"
          />
          <ContactCard
            nameIcon="fas fa-user"
            Name="Ayush Soni"
            numberIcon="fas fa-phone"
            Number="+91 9644963410"
            emailIcon="fas fa-envelope"
            Email="mr.soni1002001@gmail.com"
          />
        </div>
        <div className="contact-illustration-wrapper">
          <img src={contactUs} alt="contactImage" />
        </div>
      </div>
    </div>
  );
}
