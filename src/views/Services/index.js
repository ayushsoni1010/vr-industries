import React from 'react';
import './style.views.services.css';
import machine1 from '../../images/machine1.jpeg';
import machine2 from '../../images/machine2.jpeg';
import machine3 from '../../images/machine3.jpeg';
import machine4 from '../../images/machine4.jpeg';
import machine5 from '../../images/machine5.jpeg';
import machine6 from '../../images/machine6.jpeg';
import background from '../../images/background.jpeg';
import company from '../../images/company.jpg';

export default function Services() {
    return (
      <div className="service-infrastructure-section-wrapper">
        <p className="service-title">Infrastructure</p>
        <div>
          <img src={company} alt="CompanyImages" className="company" />
          <img src={background} alt="CompanyImages" className="background" />
          <div>
            <img src={machine1} alt="CompanyImages" className="machine1" />
            <img src={machine2} alt="CompanyImages" className="machine2" />
          </div>
          <div>
            <img src={machine3} alt="CompanyImages" className="machine3" />
            <img src={machine4} alt="CompanyImages" className="machine4" />
          </div>
          <img src={machine5} alt="CompanyImages" className="machine5" />
          <img src={machine6} alt="CompanyImages" className="machine6" />
        </div>
      </div>
    );
}