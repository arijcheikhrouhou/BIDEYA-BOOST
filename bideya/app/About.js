import React from "react";
import "./About.css"; 
import bgImage from "../assets/aboutus.jpg";

const About = () => {
  return (
    <div className="about-container">
      <header className="header">
        <h1 className="title">Who we are ?</h1>
        <p className="subtitle">
          Enactus ISIMa is a proud chapter of the global Enactus network,
          committed to entrepreneurial action for social good. We aim to address
          local and regional challenges through technology and innovation.
        </p>
      </header>

      <section className="about-enactus">
        <h2>About Enactus</h2>
        <p>
          Enactus is a global organization dedicated to inspiring students to
          take entrepreneurial action for social good. Operating in over 36
          countries, it empowers young leaders to address societal challenges
          through innovation and business principles.
        </p>

        <div className="stats">
          <div className="stat-box">
            <span className="stat-number">+36</span>
            <span className="stat-text">countries</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">+69k</span>
            <span className="stat-text">students engaged</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">+13.2M</span>
            <span className="stat-text">lives impacted</span>
          </div>
        </div>

        <p>
          Enactus teams around the globe have showcased impactful projects and
          won numerous awards at national and international levels.
        </p>
        <ul>
          <li>
            <strong>Enactus World Cup:</strong> Representation by top university
            teams globally.
          </li>
          <li>
            <strong>National Championships:</strong> Teams demonstrating
            innovative solutions and securing national titles.
          </li>
        </ul>
      </section>

      <section className="about-isima">
        <h2>About Enactus ISIMA</h2>
        <p>
          At Enactus ISIMa, we focus on leveraging technology and
          entrepreneurship to create solutions for local and regional
          challenges. Our projects align with the Sustainable Development Goals
          (SDGs).
        </p>
      </section>
    </div>
  );
};

export default About;
