import React from 'react';
import './style.card.whyChooseUsCard.css';

export default function WhyChososeUsCard(__whyChooseUsCardProperties) {
    return (
        <div className="why-choose-us-card-wrapper">
            <button><i className={__whyChooseUsCardProperties.mainIcon}></i></button>
            <p className="why-choose-us-card-title">{__whyChooseUsCardProperties.title}</p>
            <p className="why-choose-us-card-description">{__whyChooseUsCardProperties.description}</p>
        </div>
    )
}