import React from 'react';
import './Experiences.css';

function Experiences() {
  return (
    <div className="experiences-container">
      <h1>EXPERIENCES</h1>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon">
            <img src="/juli.png" alt="JULI Logo" />
          </div>
          <div className="timeline-content">
            <h2>STRATEGY AND DATA ANALYTICS INTERN</h2>
            <p>
              Worked on data analysis and marketing strategies to help drive company growth. Analyzed key metrics, proposed improvements, and implemented data-driven strategies that boosted brand awareness. Conducted in-depth studies of user behavior and conversion funnels to optimize operational processes and enhance overall engagement.
            </p>
            <span>JUNE 2024 – AUGUST 2024</span>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon">
            <img src="uic.png" alt="University Logo" />
          </div>
          <div className="timeline-content">
            <h2>SUMMER RESEARCH INTERN</h2>
            <p>
              Worked on data analysis and modeling to support sustainable waste management solutions. Evaluated the costs and environmental impacts of decentralized composting systems. Analyzed datasets and developed scalable strategies to reduce food waste, including a model to divert a significant portion of food waste in Chicago.
            </p>
            <span>MAY 2023 – AUGUST 2023</span>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon">
            <img src="js.jpg" alt="University Logo" />
          </div>
          <div className="timeline-content">
            <h2>AMP</h2>
            <p>
              Gained hands-on experience in programming, game theory, and optimization by developing interactive applications and participating in competitive challenges. Focused on advanced problem-solving in areas like combinatorics and number theory.
            </p>
            <span>JUNE 2022 – AUGUST 2022</span>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon">
            <img src="cornell.png" alt="University Logo" />
          </div>
          <div className="timeline-content">
            <h2>CURIE</h2>
            <p>
              Worked on IoT device integration and real-time data processing, focusing on sensor data analysis and application deployment. Constructed microcontroller-based circuits and utilized the Particle Cloud to process and analyze data in real-time. Explored hardware assembly and logic gate integration to support these projects.
            </p>
            <span>JUNE 2021 – JUNE 2021</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
