import React from "react";
import "./CompetitorComparison.css";

export const CompetitorComparison: React.FC = () => {
  return (
    <section className="competitor-comparison">
      <div className="competitor-comparison__container">
        <h2 className="competitor-comparison__title">
          Microwear Standards vs. Market Average
        </h2>
        
        <div className="competitor-comparison__table-wrapper">
          <table className="competitor-comparison__table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Microwear OEM Standard</th>
                <th>Typical Market Standard</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Waterproof</td>
                <td>
                  <span className="check-icon">✅</span> Real IP68 (Vacuum Tested)
                </td>
                <td>
                  <span className="dash-icon">-</span> IP67 or Fake IP68
                </td>
              </tr>
              <tr>
                <td>Battery</td>
                <td>
                  <span className="check-icon">✅</span> 450mAh (7-10 Days)
                </td>
                <td>
                  <span className="dash-icon">-</span> 280mAh (3-5 Days)
                </td>
              </tr>
              <tr>
                <td>Sensors</td>
                <td>
                  <span className="check-icon">✅</span> High-Precision Health Monitor
                </td>
                <td>
                  <span className="dash-icon">-</span> Basic G-Sensor
                </td>
              </tr>
              <tr>
                <td>Warranty</td>
                <td>
                  <span className="check-icon">✅</span> 12-24 Months
                </td>
                <td>
                  <span className="dash-icon">-</span> 6 Months
                </td>
              </tr>
              <tr>
                <td>Customization</td>
                <td>
                  <span className="check-icon">✅</span> Full OEM/ODM Support
                </td>
                <td>
                  <span className="dash-icon">-</span> Limited Logo Printing
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
