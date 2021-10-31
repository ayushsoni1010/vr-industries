import React from 'react';
import './style.cards.serviceCard.css';

export default function ServiceCard(__servicecardProperties) {
    return (
      <div className="service-card-wrapper">
        <span className={__servicecardProperties.startIcon}></span>
        <div className="service-card-content-wrapper">
          <p className="service-card-title">{__servicecardProperties.title}</p>
          <p className="service-card-descruiption">
            {__servicecardProperties.description}
          </p>
        </div>
      </div>
    );
}