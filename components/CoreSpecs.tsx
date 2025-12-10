import React from "react";
import "./CoreSpecs.css";

export const CoreSpecs: React.FC = () => {
  return (
    <section className="core-specs">
      <div className="core-specs__container">
        <h2 className="core-specs__title">
          Smart Watch Core Technologies & Specifications
        </h2>

        <div className="core-specs__grid">
          <div className="core-specs__card">
            <div
              className="core-specs__icon core-specs__icon--blue"
              aria-hidden
            >
              <svg viewBox="0 0 24 24" className="core-specs__svg">
                <path
                  d="M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm4 15h.01"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h4 className="core-specs__card-title">Display Type</h4>
            <p className="core-specs__card-text">
              AMOLED / IPS HD Screen (1.9&quot; – 2.2&quot;)
            </p>
            <span className="core-specs__badge">High‑Brightness</span>
          </div>

          <div className="core-specs__card">
            <div className="core-specs__icon core-specs__icon--red" aria-hidden>
              <svg viewBox="0 0 24 24" className="core-specs__svg">
                <path
                  d="M12 21l-7.682-7.682a4.5 4.5 0 1 1 6.364-6.364L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 21z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h4 className="core-specs__card-title">Health Monitoring</h4>
            <p className="core-specs__card-text">
              Heart Rate, ECG, SpO2, Sleep Tracking
            </p>
            <span className="core-specs__badge">Clinical‑Grade</span>
          </div>

          <div className="core-specs__card">
            <div
              className="core-specs__icon core-specs__icon--cyan"
              aria-hidden
            >
              <svg viewBox="0 0 24 24" className="core-specs__svg">
                <path
                  d="M12 3l6 8a6 6 0 1 1-12 0l6-8z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h4 className="core-specs__card-title">Waterproof Level</h4>
            <p className="core-specs__card-text">IP68 / 5ATM Water Resistant</p>
            <span className="core-specs__badge">Swim‑Ready</span>
          </div>

          <div className="core-specs__card">
            <div
              className="core-specs__icon core-specs__icon--purple"
              aria-hidden
            >
              <svg viewBox="0 0 24 24" className="core-specs__svg">
                <path
                  d="M4 14l9-11v7h7l-9 11v-7H4z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h4 className="core-specs__card-title">Compatibility</h4>
            <p className="core-specs__card-text">
              Android & iOS (Custom App Support)
            </p>
            <span className="core-specs__badge">SDK / OEM</span>
          </div>
        </div>

        <div className="core-specs__table-wrapper">
          <table
            className="core-specs__table"
            aria-label="Smart Watch Specifications"
          >
            <thead>
              <tr>
                <th>Feature</th>
                <th>Specification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Display Type</td>
                <td>AMOLED / IPS HD Screen (1.9&quot; – 2.2&quot;)</td>
              </tr>
              <tr>
                <td>Health Monitoring</td>
                <td>Heart Rate, ECG, Blood Oxygen (SpO2), Sleep Tracking</td>
              </tr>
              <tr>
                <td>Waterproof Level</td>
                <td>IP68 / 5ATM Water Resistant</td>
              </tr>
              <tr>
                <td>Compatibility</td>
                <td>Android & iOS (Custom App Support)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
