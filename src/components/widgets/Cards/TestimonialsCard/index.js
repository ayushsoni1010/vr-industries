import React from 'react';
import './style.cards.testimonialsCard.css';

export default function TestimonialsCard(__testimonialCardProperties) {
    return (
        <div className="testimonails-card-wrapper">
            <img src={__testimonialCardProperties.avatar} alt="ProfilePic" />
            <p className="testimonials-card-description">{__testimonialCardProperties.description}</p>
            <p className="testimonials-card-person-name">{__testimonialCardProperties.name}</p>
        </div>
    )
}