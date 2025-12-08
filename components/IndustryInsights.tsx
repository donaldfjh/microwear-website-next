import React from "react";
import Link from "next/link";
import styles from "./IndustryInsights.module.css";

export const IndustryInsights: React.FC = () => {
  const insights = [
    {
      id: 1,
      title: "Top 5 Smart Watch Trends for 2025 OEM Market",
      summary:
        "Discover why health monitoring and ECG sensors are dominating the B2B wearable supply chain...",
      link: "/news/smart-watch-trends-2025",
    },
    {
      id: 2,
      title: "How to Choose a Reliable Smart Watch Manufacturer in China",
      summary:
        "A guide for global importers on verifying ISO certifications and production capacity...",
      link: "/news/how-to-choose-factory",
    },
    {
      id: 3,
      title: "Microwear Launches New Series 9 with AMOLED Display",
      summary:
        "Our latest OEM model features ultra-low power consumption and waterproof chassis...",
      link: "/news/series-9-launch",
    },
  ];

  return (
    <section className={styles["industry-insights-section"]}>
      <div className={styles["industry-insights-container"]}>
        <h2 className={styles["industry-insights-title"]}>
          Latest Wearable Tech Insights
        </h2>
        <div className={styles["industry-insights-grid"]}>
          {insights.map((insight) => (
            <div key={insight.id} className={styles["insight-card"]}>
              <h3 className={styles["insight-title"]}>{insight.title}</h3>
              <p className={styles["insight-summary"]}>{insight.summary}</p>
              <Link href={insight.link} className={styles["insight-link"]}>
                Read More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
