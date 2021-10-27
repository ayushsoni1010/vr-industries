import React from 'react';
import './style.cards.contactCard.css';

export default function ContactCard(__contactCardProperties) {
    return (
        <div className="contact-card-wrapper">
            <p className="contact-card-name">
                <span className={__contactCardProperties.nameIcon}></span>{__contactCardProperties.Name}</p>
            <p className="contact-card-number">
                <span className={__contactCardProperties.numberIcon}></span>{__contactCardProperties.Number}</p>
            <p className="contact-card-email">
                <span className={__contactCardProperties.emailIcon}></span>{__contactCardProperties.Email}</p>
        </div>
    )
}