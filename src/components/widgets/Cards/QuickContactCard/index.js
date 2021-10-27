import React from "react";
import './style.cards.quickContactCard.css';

export default function QuickContactCard(__quickContactCardProperties) {
    return (
      <div className="quick-contact-card-wrapper">
        <button className="quick-contact-card-icon">
          <i className={__quickContactCardProperties.startIcon}></i>
        </button>
        <div className="quick-contact-card-content-wrapper">
          <p className="quick-contact-card-title">
            {__quickContactCardProperties.title}
          </p>
          <p className="quick-contact-card-description">
            {__quickContactCardProperties.description}
          </p>
        </div>
      </div>
    );
}