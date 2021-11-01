import React from "react";
import "./style.views.about.css";
import company from "../../assets/company.jpg";
import mission from "../../assets/mission.png";
import png from "../../assets/png.png";
import light from "../../assets/light.png";
import pin from "../../assets/pin.png";
import MissionCard from "../../components/widgets/Cards/MissionCard";
import bgTop from '../../images/bg-section-top-desktop-2.svg';
import bgBottom from '../../images/bg-section-bottom-desktop-2.svg';

export default function About() {
  return (
    <div className="about-us-section-wrapper">
      <p className="about-us-section-title gradient-text">About Us</p>
      <div className="about-us-section-description-wrapper">
        <div className="about-us-section-content-wrapper">
          <p className="about-us-section-para-one">
            VR INDUSTRIES is a Non Woven Fabrics , Carry Bags & Mask
            manufacturing & trading Company with more than 5 years of
            experienced operating team.
          </p>
          <p className="about-us-section-para-two">
            We are physically present in Dewas, an important industrial city of
            Madhya Pradesh in the heart of the India but our clientele is not
            limited to the said region, and spreads nationwide.
          </p>
          <p className="about-us-section-para-three">
            Our company offers premium customization services to clients. Our
            Production house covers an area of 12000 sq. ft. and we work with
            all the latest technologies.
          </p>
          <p className="about-us-section-para-three">
            We listen to our customers before and during our production
            processes and after production for making improvements according to
            their suggestions.
          </p>
        </div>
        <img src={company} alt="CompanyImage" />
      </div>
      <div className="about-us-team-section-wrapper">
        <div className="bg-top">
          <img src={bgTop} alt="bgTop" />
        </div>
        <div className="team-section-title-wrapper">
          <p className="about-us-team-section-title gradient-text">Our Team</p>
        </div>
        <div className="about-us-team-section-description">
          <div className="about-us-team-section-content-wrapper">
            <p className="about-us-team-section-para">
              Our great mentor Mr. Vinay Jain has been driving the whole
              organization with his competent resource & experience of 30years
              in industrial sector to achieve milestones in the business. We
              have made excellent progress, and further on we have more to do.
            </p>
            <h1 className="about-us-team-section-profile-details">VINAY JAIN</h1>
            <p className="about-us-team-section-profile-role">DIRECTOR</p>
          </div>
          <img src={png} alt="ProfilePic" />
        </div>
        <div className="bg-bottom">
          <img src={bgBottom} alt="bgBottom" />
        </div>
      </div>
      <div className="mission-and-vision-section-wrapper">
        <p className="mission-and-vision-title gradient-text">
          Mission & Vision
        </p>
        <div className="mission-and-vision-description-wrapper">
          <div className="mission-and-vision-content-wrapper">
            <MissionCard
              description="NonWoven bags stand out as the best and convenient alternative to
              plastic bag bans and We believe in Reuse, Reduce and Recycle."
              cardImage={png}
            />
            <MissionCard
              description="Our mission is to provide our customers with superior service and
              quality products. We believe in Reuse, Reduce and Recycle."
              cardImage={light}
            />
            <MissionCard
              description="VR Industries has an extremely fast and experienced team, offering
              the best prices with the best quality and production time in the
              developing market conditions."
              cardImage={pin}
            />
          </div>
          <img src={mission} alt="Mission&Vision" />
        </div>
      </div>
    </div>
  );
}
