import React from 'react';
import './WellbeingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

export function WellbeingPage(props) {
  return (
    <div className="wellbeing-container">
      <nav className="wellbeing-nav">
        <button className="back-button">{"<"}</button>
        <h1>Well-being</h1>
      </nav>
      <div className="wellbeing-buttons">
        <a href="/mentalhealth" className="wellbeing-button">Mental Health</a>
        <a href="/stressatwork" className="wellbeing-button">Stress at Work</a>
        <a href="/healthyeating" className="wellbeing-button">Healthy Eating and Physical Health</a>
        <a href="/bereavement" className="wellbeing-button">Bereavement and Loss</a>
      </div>
      <Navbar />
    </div>
  );
}

export default WellbeingPage;
