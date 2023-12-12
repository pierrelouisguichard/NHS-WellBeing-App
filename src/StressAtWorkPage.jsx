// StressAtWorkPage.jsx
import React from 'react';
import './StressAtWorkPage.css'; // Make sure to import the CSS file

function StressAtWorkPage() {
  return (
    <div className="stress-work-container">
      <h1>Stress at Work</h1>
      <p>Stress is what we feel when we think we cannot cope with the situation that we are faced with. There are two types of stress:</p>
      <ul>
        <li>Internal – such as our thoughts or beliefs (e.g., perfectionism).</li>
        <li>External – stress that happens in the external world that we cannot control (like getting the flu before an exam).</li>
      </ul>
      <p>Stress affects all of us at some point and can cause muddled thinking, memory problems, anxiety, agitation, headaches, a racing heart, and changes in behavior.</p>
      <p>To manage stress effectively, it's important to control our reaction to it, and understand that we all have a certain capacity for managing our day-to-day stressors.</p>
      <h2>Tips to Reduce Stress:</h2>
      <ul>
        <li>Avoid caffeine, alcohol, and nicotine.</li>
        <li>Try to get a good night's rest.</li>
        <li>Exercise regularly.</li>
        <li>Ask for support from a colleague, family member, or friend.</li>
        <li>Be realistic about what you can achieve and communicate this with others.</li>
        <li>Manage your time effectively.</li>
        <li>Take regular breaks and look after yourself.</li>
      </ul>
      <div className="resources">
        <a href="http://hse.gov.uk/stress/what-to-do.htm">Health and Safety Executive – Stress Management</a>
        <a href="http://acas.org.uk">ACAS</a>
      </div>
    </div>
  );
}

export default StressAtWorkPage;