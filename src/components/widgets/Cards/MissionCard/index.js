import React from "react";
import './style.card.missionCard.css';

export default function MissionCard(__missionCardProperties) {
    return (
        <div className="mission-vision-card-section-wrapper">
            <img src={__missionCardProperties.cardImage} alt="MissionCard"/>
            <p className="mission-vision-card-description">
            {__missionCardProperties.description}
            </p>
        </div>
    )
}