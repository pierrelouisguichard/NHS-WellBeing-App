// BereavementAndLossPage.jsx
import React from 'react';
import './BereavementAndLossPage.css'; // Make sure to import the CSS file

function BereavementAndLossPage() {
  return (
    <div className="bereavement-loss-container">
      <h1>Bereavement and Loss</h1>
      <p>Loss is an inevitable part of life and can deeply affect us in various ways depending on our personal resilience. It's important to acknowledge feelings of anger, helplessness, and anxiety as natural parts of grieving.</p>
      <h2>Symptoms of Grieving:</h2>
      <ul>
        <li>Numbness, panic, tearfulness, or the inability to cry.</li>
        <li>Difficulty sleeping or concentrating.</li>
        <li>Physical symptoms like palpitations or feeling sick.</li>
        <li>Varying coping mechanisms, from managing well to requiring significant support.</li>
      </ul>
      <p>Types of Grief:</p>
      <ul>
        <li>Anticipatory grief – experienced when expecting a death.</li>
        <li>Secondary loss – the struggle with new experiences and thinking of the future after losing a loved one.</li>
      </ul>
      <p>If you need support:</p>
      <a href="http://cruse.org.uk">CRUSE Bereavement Care</a> or call <a href="tel:08088081677">0808 808 1677</a>
    </div>
  );
}

export default BereavementAndLossPage;